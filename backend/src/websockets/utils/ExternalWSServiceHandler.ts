import WSServiceHandler from "..";
import ChatController from "../../controllers/chatController/chat.controller";
import ProjectController from "../../controllers/projectController/project.controller";
import ProjectTaskController from "../../controllers/projectTaskController/projectTasks.controller";
import ProjectTaskBoard from "../../entities/projectTask/ProjectTaskBoard";
import WSChatServiceEvents from "../services/chats/events";
import { WSChatServiceRoom } from "../services/chats/utils/helpers";
import WSNotificationServiceEvents from "../services/notifications/events";
import WSProjectTaskServiceEvents from "../services/projectTasks/events";
import { WSProjectTaskServiceRoomHandler } from "../services/projectTasks/utils/helpers";

export default class ExternalWSServiceHandler {
    //#region Attributes
    private serviceHandler: WSServiceHandler;
    //#endregion
    constructor(serviceHandler: WSServiceHandler) {
        this.serviceHandler = serviceHandler;
    }
    //#region Methods
    closeCollaboratorSessions(collaboratorId: number): void {
        const { server, dataHandler } = this.serviceHandler.notificationService;
        const collaboratorSocketIdList: string[] = dataHandler.connectedCollaborators.getSocketIdListByUserId(collaboratorId);
        collaboratorSocketIdList.forEach(socketId => {
            server.sockets.get(socketId)
                .emit(WSNotificationServiceEvents.Server.CloseCollaboratorSession, null);    
        });
    }
    async updateProjectTaskWhereIsCollaborator(collaboratorId: number): Promise<void> {
        const { server, dataHandler } = this.serviceHandler.projectTaskService;
        const projectIds: number[] = await ProjectController.getProjectIdsByCollaborator(collaboratorId);
        // Para cada proyecto
        for (const projectId of projectIds) {
            // Verificando si existía el proyecto en memoria
            if (!dataHandler.taskBoardGroup.existsTaskBoardProject(projectId)) 
                continue;
            // Consultando tablero desde la bd
            const taskBoard: ProjectTaskBoard = await ProjectTaskController.getTaskBoardByProjectId({
                collaboratorId,
                projectId,
                payload: null
            });
            // Guardando el tablero en memoria
            dataHandler.taskBoardGroup.setTaskBoardProject(projectId, taskBoard);
            // Emitiendo actualización del tablero a la sala de tablero de proyecto
            const projectRoom: string = WSProjectTaskServiceRoomHandler.getProjectRoom(projectId);
            server.to(projectRoom)
                .emit(
                    WSProjectTaskServiceEvents.Server.DispatchTaskBoard,
                    taskBoard
                );
        }
    }
    async updateProjectChatByProjectId(projectId: number): Promise<void> {
        const { server, dataHandler } = this.serviceHandler.chatService;
        const formattedProjectChatMessages = await ChatController.getProjectChatMessages(projectId);
        // Actualizando memoria
        dataHandler
            .projectChatMessagesGroup
            .setFormattedProjectChatMessages(projectId, formattedProjectChatMessages);
        // Enviando mensajes actualizados a los colaboradores conectados que están en el proyecto
        formattedProjectChatMessages.collaborators.forEach(({ id }) => {
            const isConnected: boolean = dataHandler
                .connectedCollaborators
                .isConnectedCollaborator(id);
            if (!isConnected) return;
            server
                .to(WSChatServiceRoom.getCollaboratorChatRoom(id))
                .emit(
                    WSChatServiceEvents.Server.DispatchProjectChatMessages,
                    formattedProjectChatMessages
                );
        });
    }
    //#endregion
}