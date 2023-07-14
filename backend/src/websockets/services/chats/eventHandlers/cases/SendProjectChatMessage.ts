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
import { CollaboratorProjectChatMessage, FormattedPrivateChatMessages } from "../../../../../entities/chats/entities";
import WSChatTab from "../../utils/enums";
import WSProjectMessage from "../../utils/entities/projectMessage";
import FormattedProjectChatMessages from "../../../../../entities/chats/chatMessage/formattedProjectChatMessage";
import ProjectChatMessage from "../../../../../entities/chats/chatMessage/projectChatMessage";

export default class SendProjectChatMessage {
    //#region Attributes
    private io: IOServerService;
    private dataHandler: WSChatServiceDataHandler;
    private socket: Socket;
    private senderId: number;
    private projectMessage: WSProjectMessage;
    //#endregion
    constructor(
        io: IOServerService, 
        dataHandler: WSChatServiceDataHandler,
        socket: Socket, body: any
    ) {
        this.projectMessage = new WSProjectMessage(body);
        this.io = io;
        this.socket = socket;
        this.senderId = getWSUserData(this.socket).userId;
        this.dataHandler = dataHandler;
    }
    //#region Attributes
    async sendMessage(): Promise<void> {
        const { projectMessage } = this;
        // Guardar el mensaje en la BD
        await this.saveMessage();
        const { projectId } = projectMessage;
        // Obtener ids de los colaboradores del proyecto
        const { collaborators } = this.dataHandler
            .projectChatMessagesGroup
            .getFormattedProjectChatMessages(projectId);
        // Obtener mensajes de los chat de proyectos
        const formattedProjectChatMessages: FormattedProjectChatMessages =
            this.dataHandler
                .projectChatMessagesGroup
                .getFormattedProjectChatMessages(projectId);
        for (const collaborator of collaborators) {
            this.sendMessageList(
                collaborator.id,
                formattedProjectChatMessages
            );
        }
    }
    private async saveMessage(): Promise<void> {
        const { senderId, projectMessage } = this;
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
    private async sendMessageList(
        collaboratorId: number, 
        formattedProjectChatMessages: FormattedProjectChatMessages
    ) {
        const { io, senderId } = this;
        if (collaboratorId === senderId) {
            // Enviar a la lista de chats
            this.socket.emit(
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
        io.to(collaboratorChatRoom)
            .emit(
                WSChatServiceEvents.Server.NotifyUnreadProjectChats,
                hasUnreadChats
            );
        io.to(collaboratorChatRoom)
            .emit(
                WSChatServiceEvents.Server.NotifySentMessage,
                WSChatTab.Project
            );
    }
    //#endregion
}