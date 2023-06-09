import { Socket } from "socket.io";
import { IOServerService, WSEvent, WSServiceEventHandler } from "../../../utils/common";
import WSProjectTaskServiceDataHandler from "../handlerData";
import { WSProjectTaskToBeChangedState, WSNewProjectTask, WSProjectTaskComment, WSProjectTaskToBeUpdated } from "../utils/entities";
import { parseToWSProjectTaskToBeChangedState, parseToWSTaskIdToBeDeleted, parseToWSNewProjectTask, parseToWSProjectTaskComment, parseToWSProjectTaskToBeUpdated } from "../utils/parsers";
import ProjectTasksController from "../../../../controllers/projectTaskController/projectTasks.controller";
import { WSProjectTaskServiceRoomHandler, getUserDataProjectTaskServiceBySocket } from "../utils/helpers";
import { ProjectTaskBoard } from "../../../../entities/projectTasks/entities";
import WSProjectTaskServiceEvents from "../events";

export default class WSProjectTaskServiceCollaboratorEventHandler extends WSServiceEventHandler<WSProjectTaskServiceEvents.Collaborator> {
    //#region Attributes
    private dataHandler: WSProjectTaskServiceDataHandler;
    //#endregion
    constructor(io: IOServerService, dataHandler: WSProjectTaskServiceDataHandler) {
        super(io);
        this.dataHandler = dataHandler;
    }
    //#region Methods
    public listen(socket: Socket) {
        const wsEventList: WSEvent<WSProjectTaskServiceEvents.Collaborator>[] = [
            {
                name: WSProjectTaskServiceEvents.Collaborator.CreateTask,
                handler: this.createTask
            },
            {
                name: WSProjectTaskServiceEvents.Collaborator.UpdateTask,
                handler: this.updateTask
            },
            {
                name: WSProjectTaskServiceEvents.Collaborator.ChangeTaskState,
                handler: this.changeTaskState
            },
            {
                name: WSProjectTaskServiceEvents.Collaborator.DeleteTask,
                handler: this.deleteTask
            },
            {
                name: WSProjectTaskServiceEvents.Collaborator.CommentInTask,
                handler: this.commentInTask
            }
        ];
        this.configSocket(socket, wsEventList);
    }
    //#region Helpers
    private async refreshTaskBoardByProject(projectId: number) {
        // Obtener tablero de la bd
        const taskBoard: ProjectTaskBoard = await ProjectTasksController.getTaskBoardByProjectId(projectId);
        // Actualizando el tablero en la memoria
        this.dataHandler
            .taskBoardsHandler
            .setTaskBoardProject(projectId, taskBoard);
        // Refrescar el tablero a todos los colaboradores del proyecto
        const projectRoom: string = WSProjectTaskServiceRoomHandler.getProjectRoom(projectId);
        this.io
            .to(projectRoom)
            .emit(
                WSProjectTaskServiceEvents.Server.DispatchTaskBoard,
                taskBoard
            );
    }
    //#endregion
    //#region Actions
    private async createTask(socket: Socket, body?: any) {
        // Validando datos
        const newTask: WSNewProjectTask = parseToWSNewProjectTask(body);
        // Obteniendo datos de conexión del colaborador
        const {
            userId: collaboratorId,
            projectId
        } = getUserDataProjectTaskServiceBySocket(socket);
        // Realizando query para crear una tarea
        await ProjectTasksController.createTask({
            collaboratorId, projectId, payload: newTask
        });
        //
        this.refreshTaskBoardByProject(projectId);
    }
    private async updateTask(socket: Socket, body?: any) {
        // Validando y formateando formulario
        const taskToBeUpdated: WSProjectTaskToBeUpdated = parseToWSProjectTaskToBeUpdated(body);
        // Obteniendo datos de conexión del colaborador
        const {
            userId: collaboratorId,
            projectId
        } = getUserDataProjectTaskServiceBySocket(socket);
        // Realizando query para actualizar una tarea
        await ProjectTasksController.updateTask({
            projectId,
            payload: taskToBeUpdated,
            collaboratorId
        });
        //
        this.refreshTaskBoardByProject(projectId);
    }
    private async changeTaskState(socket: Socket, body?: any) {
        // Validando y formateando formulario
        const projectTaskToBeChangedState: WSProjectTaskToBeChangedState = parseToWSProjectTaskToBeChangedState(body);
        // Obteniendo datos de conexión del colaborador
        const {
            userId: collaboratorId,
            projectId
        } = getUserDataProjectTaskServiceBySocket(socket);
        // Realizando query para cambiar el estado de una tarea
        await ProjectTasksController.changeTaskState({
            projectId, 
            payload: projectTaskToBeChangedState, 
            collaboratorId
        });
        // Refrescando tabler a los colaboradores
        this.refreshTaskBoardByProject(projectId);
    }
    private async deleteTask(socket: Socket, body?: any) {
        // Validando y formateando formulario
        const taskIdToBeDeleted: number = parseToWSTaskIdToBeDeleted(body);
        // Obteniendo datos de conexión del colaborador
        const {
            userId: collaboratorId,
            projectId
        } = getUserDataProjectTaskServiceBySocket(socket);
        // Realizando query para eliminar una tarea
        await ProjectTasksController.deleteTask({
            projectId, 
            payload: taskIdToBeDeleted, 
            collaboratorId
        });
        // Refrescando tabler a los colaboradores
        this.refreshTaskBoardByProject(projectId);
    }
    private async commentInTask(socket: Socket, body?: any) {
        // Validando y formateando formulario
        const taskComment: WSProjectTaskComment = parseToWSProjectTaskComment(body);
        // Obteniendo datos de conexión del colaborador
        const {
            userId: collaboratorId,
            projectId
        } = getUserDataProjectTaskServiceBySocket(socket);
        // Realizando query para comentar en una tarea
        await ProjectTasksController.commentInTask({
            projectId,
            payload: taskComment,
            collaboratorId
        });
        // Refrescando tabler a los colaboradores
        this.refreshTaskBoardByProject(projectId);
    }
    //#endregion
    //#endregion
}