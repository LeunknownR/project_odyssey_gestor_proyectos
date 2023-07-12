import { Socket } from "socket.io";
import { IOServerService, WSEvent, WSServiceEventHandler } from "../../../utils/common";
import WSChatServiceEvents from "../events";
import WSChatServiceDataHandler from "../dataHandlers";
import { getWSUserData } from "../../../utils/helpers";
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
import { CollaboratorProjectChatMessage, FormattedPrivateChatMessages } from "../../../../entities/chats/entities";
import FormattedProjectChatMessages from "../../../../entities/chats/chatMessage/formattedProjectChatMessage";
import { ProjectChatPreview } from "../../../../entities/chats/chatPreview/projectChatPreview";
import WSProjectMessage from "../utils/entities/projectMessage";

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
                name: WSChatServiceEvents.Collaborator.GetProjectChatMessages,
                handler: this.getProjectChatMessages.bind(this)
            },
            {
                name: WSChatServiceEvents.Collaborator.SendMessageToPrivateChat,
                handler: this.sendMessageToPrivateChat.bind(this)
            },
            {
                name: WSChatServiceEvents.Collaborator.SendMessageToProjectChat,
                handler: this.sendMessageToProjectChat.bind(this)
            }
        ];
        this.configSocket(socket, wsEventList);
    }
    private async getPrivateChatPreview(
        collaboratorId: number,
        searchedCollaborator: string
    ): Promise<PrivateChatPreview[]> {
        // Verificando si es una cadena vacía
        if (!searchedCollaborator)
            return await ChatController.getPrivateChatPreviewWithMessages(collaboratorId);
        return await ChatController.searchPrivateChatPreview(collaboratorId, searchedCollaborator);
    }
    private async getProjectChatPreview(
        collaboratorId: number,
        searchedProject: string
    ): Promise<ProjectChatPreview[]> {
        const searchProjectChatPreviewList: ProjectChatPreview[] = await ChatController.searchProjectChatPreview(collaboratorId, searchedProject);
        return searchProjectChatPreviewList;
    }
    private async searchPrivateChatPreview(
        socket: Socket,
        collaboratorId: number,
        searchChatPreviewPayload: WSSearchChatPreviewPayload
    ): Promise<void> {
        // Obtener preview list de chats de la bd
        const newPrivateChatPreviewList: PrivateChatPreview[] = await this.getPrivateChatPreview(
            collaboratorId,
            searchChatPreviewPayload.searchedChat
        );
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
        collaboratorId: number,
        searchedChat: string
    ): Promise<void> {
        const newProjectChatPreviewList: ProjectChatPreview[] = await this.getProjectChatPreview(collaboratorId, searchedChat);
        // Agregando preview list a la memoria
        this.dataHandler
            .projectChatPreviewGroup
            .addPreviewChat(
                collaboratorId,
                newProjectChatPreviewList
            );
        // Enviar preview list al colaborador
        socket.emit(
            WSChatServiceEvents.Server.DispatchProjectChatPreview,
            newProjectChatPreviewList
        );
    }
    private async searchChat(socket: Socket, body: any): Promise<void> {
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
                    socket, collaboratorId,
                    searchChatPreviewPayload.searchedChat
                );
                break;
        }
    }
    // private leavePrivateChat(socket: Socket, collaboratorChatIdBody: any): void {
    //     const collaboratorChatId = new IntegerId(collaboratorChatIdBody);
    //     const { userId: collaboratorId } = getWSUserData(socket);
    //     // Eliminando colaborador de su chat privado
    //     const chatId: string = WSPrivateChatMessagesGroup.getChatId(
    //         collaboratorId,
    //         collaboratorChatId.value
    //     );
    //     this.dataHandler
    //         .openPrivateChats
    //         .removeCollaboratorOfPrivateChat(
    //             chatId, collaboratorId
    //         );
    //     const collaboratorChatRoom: string = WSChatServiceRoom.getCollaboratorChatRoom(collaboratorChatId.value);
    //     this.io
    //         .to(collaboratorChatRoom)
    //         .emit(
    //             WSChatServiceEvents.Server.NotifyCollaboratorOnlineState,
    //             false
    //         );
    // }
    private doNotifyStateOnlinePrivateChat(collaboratorId: number, collaboratorChatId: number) {
        const isOnline = this.dataHandler.connectedCollaborators.isConnectedCollaborator(collaboratorChatId);
        const collaboratorChatRoom: string = WSChatServiceRoom.getCollaboratorChatRoom(collaboratorId);
        this.io
            .to(collaboratorChatRoom)
            .emit(
                WSChatServiceEvents.Server.NotifyCollaboratorOnlineState,
                isOnline
            );
    }
    private async getPrivateChatMessages(socket: Socket, collaboratorChatIdBody: any) {
        const collaboratorChatId = new IntegerId(collaboratorChatIdBody);
        const { userId: collaboratorId } = getWSUserData(socket);
        // Obtener mensajes del chat privado del 
        const collaboratorRelationList: RelationCollaboratorChat[] = await ChatController.getRelationCollaboratorInPrivateChat(
            collaboratorId,
            collaboratorChatId.value
        );
        let messageList: PrivateChatMessage[] =
            this.dataHandler
                .privateChatMessagesGroup
                .getPrivateChatMessageList(collaboratorId, collaboratorChatId.value);
        await ChatController.markPrivateChatMessagesAsSeen(
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
            collaboratorChatId.value
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
        this.doNotifyStateOnlinePrivateChat(collaboratorId, collaboratorChatId.value);
    }
    private async getProjectChatMessages(socket: Socket, projectIdBody: any): Promise<void> {
        const projectId = new IntegerId(projectIdBody);
        const { userId: collaboratorId } = getWSUserData(socket);
        let formattedProjectChatMessages: FormattedProjectChatMessages = this.dataHandler
            .projectChatMessagesGroup
            .getFormattedProjectChatMessages(projectId.value);
        // Marcar como visto mensajes
        await ChatController.markProjectChatMessagesAsSeen(
            collaboratorId,
            projectId.value
        );
        // Verificar si no existen mensajes de este chat
        if (!formattedProjectChatMessages) {
            // Obtener los mensajes a través de una db query
            formattedProjectChatMessages = await ChatController.getProjectChatMessages(projectId);
            // Guardando nuevo chat messages en memoria
            this.dataHandler
                .projectChatMessagesGroup
                .setFormattedProjectChatMessages(projectId.value, formattedProjectChatMessages);
        }
        // Enviar preview list al colaborador
        socket.emit(
            WSChatServiceEvents.Server.DispatchProjectChatMessages,
            formattedProjectChatMessages
        );
        this.dataHandler
            .openProjectChats
            .addCollaboratorToProjectChat(
                projectId.value,
                collaboratorId
            );
        // Notificando de chats privados sin leer al colaborador
        const hasUnreadChats: boolean = await ChatController.collaboratorHasUnreadProjectChats(collaboratorId);
        socket.emit(
            WSChatServiceEvents.Server.NotifyUnreadProjectChats,
            hasUnreadChats
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
    private async saveProjectChatMessage(
        senderId: number,
        projectMessage: WSProjectMessage
    ): Promise<void> {
        // Guardar mensaje en la bd
        const projectChatMessage: ProjectChatMessage = await ChatController.sendMessageToProjectChat(
            senderId,
            projectMessage
        );
        //Agregar a la lista de de mensajes de chat de proyecto
        this.dataHandler
            .projectChatMessagesGroup
            .addMessage(
                projectMessage.projectId,
                projectChatMessage
            );
    }
    private async sendPrivateChatNotification(receiverId: number): Promise<void> {
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
        socket.emit(
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
    private async sendMessageToPrivateChat(
        socket: Socket,
        body: any
    ): Promise<void> {
        const privateMessage = new WSPrivateMessage(body);
        const { userId: senderId } = getWSUserData(socket);
        await this.savePrivateChatMessage(
            senderId, privateMessage
        );
        this.sendPrivateChatMessageList(
            socket, senderId,
            privateMessage.receiverId
        );
        // Notificando que el mensaje fue guardado
        this.io.to(
            WSChatServiceRoom.getCollaboratorChatRoom(privateMessage.receiverId)
        ).emit(WSChatServiceEvents.Server.NotifySentMessage, WSChatTab.Private);
        this.sendPrivateChatNotification(
            privateMessage.receiverId
        );
    }
    private async updateChatViewToProjectTeamMember(
        socket: Socket, 
        collaboratorId: number, senderId: number,
        formattedProjectChatMessages: FormattedProjectChatMessages
    ) {
        if (collaboratorId === senderId) {
            // Enviar a la lista de chats
            socket.emit(
                WSChatServiceEvents.Server.DispatchProjectChatMessages,
                formattedProjectChatMessages
            );
            return;
        }
        // Verificando si se encuentra conectado para el envío
        const isConnected: boolean = this.dataHandler
            .connectedCollaborators
            .isConnectedCollaborator(collaboratorId);
        if (!isConnected) return;
        // Enviando mensajes
        const hasUnreadChats: boolean = await ChatController.collaboratorHasUnreadProjectChats(collaboratorId);
        const collaboratorChatRoom: string = WSChatServiceRoom.getCollaboratorChatRoom(collaboratorId);
        this.io
            .to(collaboratorChatRoom)
            .emit(
                WSChatServiceEvents.Server.NotifyUnreadProjectChats,
                hasUnreadChats
            );
        this.io
            .to(collaboratorChatRoom)
            .emit(
                WSChatServiceEvents.Server.NotifySentMessage,
                WSChatTab.Project
            );
    }
    private async sendMessageToProjectChat(
        socket: Socket,
        body: any
    ): Promise<void> {
        // Validar parametros
        const projectMessage = new WSProjectMessage(body);
        // Obtener Id del collaborador que envia el mensaje
        const { userId: senderId } = getWSUserData(socket);
        // Guardar el mensaje en la BD
        await this.saveProjectChatMessage(
            senderId,
            projectMessage
        );
        const { projectId } = projectMessage;
        // Obtener ids de los colaboradores del proyecto
        const collaborators: CollaboratorProjectChatMessage[] = this.dataHandler
            .projectChatMessagesGroup
            .getFormattedProjectChatMessages(projectId)
            .collaborators;
        // Obtener mensajes de los chat de proyectos
        const formattedProjectChatMessages: FormattedProjectChatMessages =
            this.dataHandler
                .projectChatMessagesGroup
                .getFormattedProjectChatMessages(projectId);
        for (const collaborator of collaborators) {
            this.updateChatViewToProjectTeamMember(
                socket,
                collaborator.id,
                senderId,
                formattedProjectChatMessages
            );
        }
    }
    //#endregion
}