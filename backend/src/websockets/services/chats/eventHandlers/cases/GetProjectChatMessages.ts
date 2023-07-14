import { Socket } from "socket.io";
import { IOServerService } from "../../../../utils/common";
import WSChatServiceDataHandler from "../../dataHandlers";
import { getWSUserData } from "../../../../utils/helpers";
import { IntegerId } from "../../../../../utils/entities/integerId";
import ChatController from "../../../../../controllers/chatController/chat.controller";
import FormattedProjectChatMessages from "../../../../../entities/chats/chatMessage/formattedProjectChatMessage";
import WSChatServiceEvents from "../../events";

export default class GetProjectChatMessages {
    //#region Attributes
    private dataHandler: WSChatServiceDataHandler;
    private socket: Socket;
    private collaboratorId: number;
    private projectId: number;
    //#endregion
    constructor(
        dataHandler: WSChatServiceDataHandler, 
        socket: Socket, body: any
    ) {
        this.dataHandler = dataHandler;
        this.socket = socket;
        this.collaboratorId = getWSUserData(socket).userId;
        this.projectId = new IntegerId(body).value;
    }
    //#region Methods
    async getProjectChatMessages(): Promise<void> {
        const { socket, collaboratorId, projectId, dataHandler } = this;
        let formattedProjectChatMessages: FormattedProjectChatMessages = this.dataHandler
            .projectChatMessagesGroup
            .getFormattedProjectChatMessages(projectId);
        // Marcar como visto mensajes
        await ChatController.markProjectChatMessagesAsSeen(
            collaboratorId,
            projectId
        );
        // Verificar si no existen mensajes de este chat
        if (!formattedProjectChatMessages) {
            // Obtener los mensajes a través de una db query
            formattedProjectChatMessages = await ChatController.getProjectChatMessages(projectId);
            // Guardando nuevo chat messages en memoria
            this.dataHandler
                .projectChatMessagesGroup
                .setFormattedProjectChatMessages(projectId, formattedProjectChatMessages);
        }
        // Enviar preview list al colaborador
        socket.emit(
            WSChatServiceEvents.Server.DispatchProjectChatMessages,
            formattedProjectChatMessages
        );
        this.dataHandler
            .openProjectChats
            .addCollaboratorToProjectChat(
                projectId, collaboratorId
            );
        this.notifyUnreadPrivateChats();
    }
    private async notifyUnreadPrivateChats() {
        // Notificando de chats privados sin leer al colaborador
        const hasUnreadChats: boolean = await ChatController.collaboratorHasUnreadProjectChats(this.collaboratorId);
        this.socket.emit(
            WSChatServiceEvents.Server.NotifyUnreadProjectChats,
            hasUnreadChats
        );
    }
    //#endregion
}