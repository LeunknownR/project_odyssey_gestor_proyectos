import { Socket } from "socket.io";
import { IOServerService, WSEvent } from "../../../utils/types";
import { WSProjectTaskServiceCollaboratorEvents, WSProjectTaskServiceServerEvents } from "../events";
import WSProjectTaskServiceDataHandler from "../handlerData";
import { WSServiceEventHandler } from "../../../utils/classes";
import { WSNewProjectTask, WSProjectTaskComment, WSProjectTaskToBeUpdated } from "../utils/entities";
import { parseToWSNewProjectTask, parseToWSProjectTaskComment, parseToWSProjectTaskToBeUpdated } from "../utils/parsers";
import ProjectTasksController from "../../../../controllers/projectTaskController/projectTasks.controller";
import { WSProjectTaskServiceRoomHandler, getUserDataProjectTaskServiceBySocket } from "../utils/helpers";
import { ProjectTaskBoard } from "../../../../entities/projectTasks/entities";
import { WSProjectTaskEvent } from "../utils/types";

export default class WSProjectTaskServiceCollaboratorEventHandler extends WSServiceEventHandler<WSProjectTaskServiceCollaboratorEvents> {
    //#region Attributes
    private dataHandler: WSProjectTaskServiceDataHandler;
    //#endregion
    constructor(io: IOServerService, dataHandler: WSProjectTaskServiceDataHandler) {
        super(io);
        this.dataHandler = dataHandler;
    }
    //#region Methods
    public listen(socket: Socket) {
        const wsEventList: WSProjectTaskEvent[] = [
            {
                name: WSProjectTaskServiceCollaboratorEvents.CreateTask,
                handler: this.createTask
            },
            {
                name: WSProjectTaskServiceCollaboratorEvents.UpdateTask,
                handler: this.updateTask
            },
            {
                name: WSProjectTaskServiceCollaboratorEvents.CommentInTask,
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
                WSProjectTaskServiceServerEvents.DispatchTaskBoard,
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
        this.refreshTaskBoardByProject(projectId);
    }
    private async updateTask(socket: Socket, body?: any) {
        //Validando 
        const taskToBeUpdated: WSProjectTaskToBeUpdated = parseToWSProjectTaskToBeUpdated(body);
        //Obteniendo
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
        this.refreshTaskBoardByProject(projectId);
    }
    //#endregion
    //#endregion
}