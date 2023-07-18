import { Socket } from "socket.io";
import { IntegerId } from "../../../../../utils/entities/integerId";
import { getWSUserData } from "../../../../utils/helpers";
import ChatController from "../../../../../controllers/chatController/chat.controller";
import { RelationCollaboratorChat } from "../../../../../entities/chats/chatMessage/chatCollaboratorRelation";
import PrivateChatMessage from "../../../../../entities/chats/chatMessage/privateChatMessage";
import WSChatServiceDataHandler from "../../dataHandlers";
import WSChatServiceEvents from "../../events";
import { WSPrivateChatMessagesGroup } from "../../dataHandlers/handlers/privateChatMessagesGroup";
import { FormattedPrivateChatMessages } from "../../../../../entities/chats/entities";
import { WSChatServiceRoom } from "../../utils/helpers";
import { IOServerService } from "../../../../utils/common";

export default class GetPrivateChatMessages {
    private io: IOServerService;
    private dataHandler: WSChatServiceDataHandler;
    private socket: Socket;
    private collaboratorId: number;
    private collaboratorChatId: number;
    constructor(
        io: IOServerService, dataHandler: WSChatServiceDataHandler, 
        socket: Socket, body: any
    ) {
        this.io = io;
        this.dataHandler = dataHandler;
        this.socket = socket;
        this.collaboratorChatId = new IntegerId(body).value;
        this.collaboratorId = getWSUserData(socket).userId;
    }
    async getMessages() {
        const { socket, collaboratorId, collaboratorChatId } = this;
        // Obtener mensajes del chat privado del 
        const collaboratorRelationList: RelationCollaboratorChat[] = await ChatController.getRelationCollaboratorInPrivateChat(
            collaboratorId,
            collaboratorChatId
        );
        let messageList: PrivateChatMessage[] =
            this.dataHandler
                .privateChatMessagesGroup
                .getPrivateChatMessageList(collaboratorId, collaboratorChatId);
        await ChatController.markPrivateChatMessagesAsSeen(
            collaboratorId,
            collaboratorChatId
        );
        // Verificar si no existen mensajes de este chat
        if (!messageList) {
            // Obtener los mensajes a través de una db query
            messageList = await ChatController.getPrivateChatMessages(
                collaboratorId,
                collaboratorChatId
            );
            // Guardando los mensajes en la memoria
            this.dataHandler
                .privateChatMessagesGroup
                .setPrivateChatMessageList(
                    collaboratorId, collaboratorChatId, messageList
                );
        }
        // Marcar como visto mensajes
        const formattedPrivateChatMessages: FormattedPrivateChatMessages = {
            collaboratorRelationList,
            messages: messageList
        };
        // Enviar lista de mensajes al colaborador
        socket.emit(
            WSChatServiceEvents.Server.DispatchPrivateChatMessages,
            formattedPrivateChatMessages
        );
        // Agregando a la relación de chats privados abiertos
        const chatId: string = WSPrivateChatMessagesGroup.getChatId(
            collaboratorId,
            collaboratorChatId
        );
        this.dataHandler
            .openPrivateChats
            .addCollaboratorToPrivateChat(
                chatId,
                collaboratorId
            );
        // Notificando de chats privados sin leer al colaborador
        const hasUnreadChats: boolean = await ChatController.collaboratorHasUnreadPrivateChats(collaboratorId);
        socket.emit(
            WSChatServiceEvents.Server.NotifyUnreadPrivateChats,
            hasUnreadChats
        );
        this.notifyOnlineState(collaboratorId, collaboratorChatId);
    }
    private notifyOnlineState(collaboratorId: number, collaboratorChatId: number) {
        const isOnline: boolean = this.dataHandler.connectedCollaborators.isConnectedCollaborator(collaboratorChatId);
        const collaboratorChatRoom: string = WSChatServiceRoom.getCollaboratorChatRoom(collaboratorId);
        this.io
            .to(collaboratorChatRoom)
            .emit(
                WSChatServiceEvents.Server.NotifyCollaboratorOnlineState,
                isOnline
            );
    }
}