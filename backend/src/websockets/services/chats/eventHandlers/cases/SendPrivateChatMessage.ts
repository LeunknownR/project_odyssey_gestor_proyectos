import { Socket } from "socket.io";
import WSPrivateMessage from "../../utils/entities/privateMessage";
import { getWSUserData } from "../../../../utils/helpers";
import WSChatServiceDataHandler from "../../dataHandlers";
import { WSChatServiceRoom } from "../../utils/helpers";
import ChatController from "../../../../../controllers/chatController/chat.controller";
import WSChatServiceEvents from "../../events";
import { IOServerService } from "../../../../utils/common";
import PrivateChatMessage from "../../../../../entities/chats/chatMessage/privateChatMessage";
import { RelationCollaboratorChat } from "../../../../../entities/chats/chatMessage/chatCollaboratorRelation";
import { FormattedPrivateChatMessages } from "../../../../../entities/chats/entities";
import WSChatTab from "../../utils/enums";

export default class SendPrivateChatMessage {
    //#region Attributes
    private io: IOServerService;
    private dataHandler: WSChatServiceDataHandler;
    private socket: Socket;
    private senderId: number;
    private privateMessage: WSPrivateMessage;
    //#endregion
    constructor(
        io: IOServerService, 
        dataHandler: WSChatServiceDataHandler,
        socket: Socket, body: any
    ) {
        this.io = io;
        this.socket = socket;
        this.senderId = getWSUserData(this.socket).userId;
        this.dataHandler = dataHandler;
        this.privateMessage = new WSPrivateMessage(body);
    }
    //#region Methods
    async sendMessage(): Promise<void> {
        const { senderId, privateMessage } = this;
        await this.saveChat(
            senderId, privateMessage
        );
        this.sendMessageList(
            senderId, privateMessage.receiverId
        );
        // Notificando que el mensaje fue guardado
        this.io.to(
            WSChatServiceRoom.getCollaboratorChatRoom(privateMessage.receiverId)
        ).emit(WSChatServiceEvents.Server.NotifySentMessage, WSChatTab.Private);
        this.sendChatNotification(
            privateMessage.receiverId
        );
    }
    private async sendChatNotification(receiverId: number): Promise<void> {
        const isConnected: boolean = this.dataHandler
            .connectedCollaborators
            .isConnectedCollaborator(receiverId);
        if (!isConnected) return;
        const receiverRoomName: string = WSChatServiceRoom.getCollaboratorChatRoom(receiverId);
        // Notificando de chats privados sin leer al receptor
        const hasUnreadChats: boolean = await ChatController.collaboratorHasUnreadPrivateChats(receiverId);
        this.io.to(receiverRoomName).emit(
            WSChatServiceEvents.Server.NotifyUnreadPrivateChats,
            hasUnreadChats
        );
    }
    private async saveChat(
        senderId: number,
        privateMessage: WSPrivateMessage
    ): Promise<void> {
        // Guardar mensaje en la bd
        const privateChatMessage: PrivateChatMessage = await ChatController.sendMessageToPrivateChat(
            senderId,
            privateMessage
        );
        // Agregar a lista de mensajes del chat privado
        this.dataHandler
            .privateChatMessagesGroup
            .addMessage(
                privateChatMessage,
                privateMessage.receiverId,
            );
    }
    private async sendMessageList(
        senderId: number,
        receiverId: number
    ): Promise<void> {
        // Obtener mensajes del chat privado
        const privateChatMessageList: PrivateChatMessage[] = this.dataHandler
            .privateChatMessagesGroup
            .getPrivateChatMessageList(
                senderId,
                receiverId
            );
        // Obteniendo relaciones con los colaboradores del chat privado
        const collaboratorRelationList: RelationCollaboratorChat[] = await ChatController.getRelationCollaboratorInPrivateChat(
            senderId,
            receiverId
        );
        const formattedPrivateChatMessages: FormattedPrivateChatMessages = {
            collaboratorRelationList,
            messages: privateChatMessageList
        };
        // Enviando chat actualizado a emisor y receptor
        // Emisor
        this.socket.emit(
            WSChatServiceEvents.Server.DispatchPrivateChatMessages,
            formattedPrivateChatMessages
        );
        // Receptor
        // Verificando si se encuentra conectado para el envío
        const isConnected: boolean = this.dataHandler
            .connectedCollaborators
            .isConnectedCollaborator(receiverId);
        if (!isConnected) return;
        // Enviando mensajes
        const receiverRoomName: string = WSChatServiceRoom.getCollaboratorChatRoom(receiverId);
        this.io
            .to(receiverRoomName)
            .emit(
                WSChatServiceEvents.Server.DispatchPrivateChatMessages,
                formattedPrivateChatMessages
            );
    }
    //#endregion
}