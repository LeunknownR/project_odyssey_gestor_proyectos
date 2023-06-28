import { Socket } from "socket.io";
import { IOServerService, WSEvent, WSServiceEventHandler } from "../../../utils/common";
import WSChatServiceEvents from "../events";
import WSChatServiceDataHandler from "../dataHandlers";
import { getWSUserData } from "../../../utils/helpers";
import WSSearchPrivateChatPreviewPayload from "../utils/entities/searchPrivateChatPreviewPayload";
import ChatController from "../../../../controllers/chatController/chat.controller";
import WSSearchChatPreviewPayload from "../utils/entities/searchChatPreviewPayload";
import WSChatTab from "../utils/enums";
import { PrivateChatPreview } from "../../../../entities/chats/chatPreview/privateChatPreview";
import { IntegerId } from "../../../../utils/entities/integerId";
import PrivateChatMessage from "../../../../entities/chats/chatMessage/privateChatMessage";
import ProjectChatMessage from "../../../../entities/chats/chatMessage/projectChatMessage";
import WSPrivateMessage from "../utils/entities/privateMessage";
import { WSChatServiceRoom } from "../utils/helpers";
import { WSPrivateChatMessagesGroup } from "../dataHandlers/handlers/privateChatMessagesGroup";
import { RelationCollaboratorChat } from "../../../../entities/chats/chatMessage/chatCollaboratorRelation";
import { FormattedPrivateChatMessages } from "../../../../entities/chats/entities";
import FormattedProjectChatMessages from "../../../../entities/chats/chatMessage/formattedProjectChatMessage";

export default class WSChatServiceCollaboratorEventHandler extends WSServiceEventHandler<WSChatServiceEvents.Collaborator> {
    //#region Attributes
    private dataHandler: WSChatServiceDataHandler;
    //#endregion
    constructor(io: IOServerService, dataHandler: WSChatServiceDataHandler) {
        super(io);
        this.dataHandler = dataHandler;
    }
    //#region Methods
    listen(socket: Socket) {
        const wsEventList: WSEvent<WSChatServiceEvents.Collaborator>[] = [
            {
                name: WSChatServiceEvents.Collaborator.SearchChat,
                handler: this.searchChat.bind(this)
            },
            {
                name: WSChatServiceEvents.Collaborator.GetPrivateChatMessages,
                handler: this.getPrivateChatMessages.bind(this)
            },
            {
                name: WSChatServiceEvents.Collaborator.LeavePrivateChat,
                handler: this.leavePrivateChat.bind(this)
            },
            {
                name: WSChatServiceEvents.Collaborator.GetProjectChatMessages,
                handler: this.getProjectChatMessages.bind(this)
            },
            {
                name: WSChatServiceEvents.Collaborator.SendMessageToPrivateChat,
                handler: this.sendMessageToPrivateChat.bind(this)
            }
        ];
        this.configSocket(socket, wsEventList);
    }
    //#region Search chat
    private async getPrivateChatPreview(
        searchedCollaborator: string, 
        collaboratorId: number
    ): Promise<PrivateChatPreview[]> {
        // Verificando si es una cadena vacía
        if (searchedCollaborator) 
            return await ChatController.getPrivateChatPreviewListWithMessages(collaboratorId);
        const getPrivateChatPreviewPayload: WSSearchPrivateChatPreviewPayload = new WSSearchPrivateChatPreviewPayload(
            collaboratorId,
            searchedCollaborator
        );
        return await ChatController.searchPrivateChatPreviewList(getPrivateChatPreviewPayload);
    }
    private async searchPrivateChatPreview(
        socket: Socket,
        collaboratorId: number,
        searchChatPreviewPayload: WSSearchChatPreviewPayload
    ): Promise<void> {
        // Obtener preview list de chats de la bd
        const newPrivateChatPreviewList: PrivateChatPreview[] = await this.getPrivateChatPreview(searchChatPreviewPayload.searchedChat, collaboratorId);
        // Agregando preview list a la memoria
        this.dataHandler
            .privateChatPreviewGroup
            .addPreviewChat(
                collaboratorId, 
                newPrivateChatPreviewList
            );
        // Enviar preview list al colaborador
        socket.emit(
            WSChatServiceEvents.Server.DispatchPrivateChatPreview,
            newPrivateChatPreviewList
        );
    }
    private async searchProjectChatPreview(
        socket: Socket,
        // Otros parámetros
    ): Promise<void> {

    }
    private async searchChat(socket: Socket, body: any) {
        const searchChatPreviewPayload = new WSSearchChatPreviewPayload(body);
        const { userId: collaboratorId } = getWSUserData(socket);
        switch (searchChatPreviewPayload.chatTab) {
            case WSChatTab.Private:
                this.searchPrivateChatPreview(
                    socket, collaboratorId,
                    searchChatPreviewPayload
                );
                break;
            case WSChatTab.Project:
                this.searchProjectChatPreview(
                    socket
                );
                break;
        }
    }
    private async leavePrivateChat(socket: Socket, body: any) {
        const { userId: collaboratorId } = getWSUserData(socket);
        const collaboratorChatId = new IntegerId(body.collaboratorId);
        // Eliminando colaborador de su chat privado
        const chatId: string = WSPrivateChatMessagesGroup.getChatId(
            collaboratorId,
            collaboratorChatId.value
        );
        this.dataHandler
            .openPrivateChats
            .removeCollaboratorOfPrivateChat(
                chatId, collaboratorId
            );
    }
    //#endregion
    //#region Search chat
    private async getPrivateChatMessages(socket: Socket, body: any) {
        const collaboratorChatId = new IntegerId(body.collaboratorChatId);
        const { userId: collaboratorId } = getWSUserData(socket);
        // Obtener mensajes del chat privado del colaborador
        let messageList: PrivateChatMessage[] = this.dataHandler
            .privateChatMessagesGroup
            .getPrivateChatMessageList(collaboratorId, collaboratorChatId.value);
        const relationCollaboratorChatList: RelationCollaboratorChat[] = await ChatController.getRelationsWithChatCollaborator(
            collaboratorId,
            collaboratorChatId.value
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
                    collaboratorId,
                    collaboratorChatId.value,
                    messageList
                );
        }
        // Marcar como visto mensajes
        await ChatController.markPrivateChatMessagesAsSeen(
            collaboratorId,
            collaboratorChatId.value
        );
        const formattedPrivateChatMessages: FormattedPrivateChatMessages = {
            relationCollaboratorChatList,
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
            collaboratorChatId.value
        );
        this.dataHandler
            .openPrivateChats
            .addCollaboratorToPrivateChat(
                chatId,
                collaboratorId
            );
        const hasMessages: boolean = await ChatController.collaboratorHasNewPrivateMessages(collaboratorId);
        socket.emit(
            WSChatServiceEvents.Server.NotifyNewPrivateChatMessages,
            hasMessages
        );
        this.notifyIfCollaboratorHasNewPrivateMessages(
            socket.emit,
            collaboratorId
        );
    }
    async notifyIfCollaboratorHasNewPrivateMessages(
        emit: (event: WSChatServiceEvents.Server, hasMessages: boolean) => void,
        collaboratorId: number
    ): Promise<void> {
        // Revisar que entre todos los chat del colaborador que existen si tienen mensajes
        const hasNewMessages: boolean = await ChatController.collaboratorHasNewPrivateMessages(collaboratorId);
        emit(
            WSChatServiceEvents.Server.NotifyNewPrivateChatMessages,
            hasNewMessages
        );
    }
    private async getProjectChatMessages(socket: Socket, body: any) {
        const projectId = new IntegerId(body.projectId);
        const { userId: collaboratorId } = getWSUserData(socket);
        let formattedProjectChatMessages: FormattedProjectChatMessages = this.dataHandler
            .projectChatMessagesGroup
            .getProjectChatMessageList(projectId.value);
        // Verificar si no existen mensajes de este chat
        if (!formattedProjectChatMessages) {
            // Obtener los mensajes a través de una db query
            formattedProjectChatMessages = await ChatController.getProjectChatMessages(projectId);
            // Guardando nuevo chat messages en memoria
            this.dataHandler
                .projectChatMessagesGroup
                .setProjectChatMessageList(projectId.value, formattedProjectChatMessages);
        }
        // Marcar como visto mensajes
        await ChatController.markProjectChatMessagesAsSeen(
            collaboratorId,
            projectId.value
        );
        // Enviar preview list al colaborador
        socket.emit(
            WSChatServiceEvents.Server.DispatchProjectChatMessages,
            formattedProjectChatMessages
        );
    }
    private async savePrivateChatMessage(
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
    private async sendPrivateChatMessageList(
        socket: Socket,
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
        // Enviando chat actualizado a emisor y receptor
        // Emisor
        socket.emit(
            WSChatServiceEvents.Server.DispatchPrivateChatMessages,
            privateChatMessageList
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
                privateChatMessageList
            );
    }
    private async sendPrivateChatNotification(
        socket: Socket, receiverId: number
    ) {
        const hasMessages: boolean = true;
        this.dataHandler
            .privateChatHasMessagesGroup
            .notify(receiverId, hasMessages);
        const isConnected: boolean = this.dataHandler
            .connectedCollaborators
            .isConnectedCollaborator(receiverId);
        if (!isConnected) return;
        const receiverRoomName: string = WSChatServiceRoom.getCollaboratorChatRoom(receiverId);
        // Notificando de mensajes al receptor
        this.notifyIfCollaboratorHasNewPrivateMessages(
            this.io.to(receiverRoomName).emit,
            receiverId
        );
    }
    private async sendMessageToPrivateChat(socket: Socket, body: any)  {
        const privateMessage = new WSPrivateMessage(body);
        const { userId: senderId } = getWSUserData(socket);
        this.savePrivateChatMessage(
            senderId,
            privateMessage
        );
        this.sendPrivateChatMessageList(
            socket,
            senderId,
            privateMessage.receiverId
        );
        this.sendPrivateChatNotification(
            socket, privateMessage.receiverId
        );
    }
    //#endregion
    //#endregion
}