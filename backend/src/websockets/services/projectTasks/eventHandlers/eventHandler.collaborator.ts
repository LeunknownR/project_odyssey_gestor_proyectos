import { Socket } from "socket.io";
import { IOServerService, WSEvent } from "../../../utils/types";
import { WSProjectTaskServiceCollaboratorEvents, WSProjectTaskServiceServerEvents } from "../events";
import WSProjectTaskServiceDataHandler from "../handlerData";
import { WSServiceEventHandler } from "../../../utils/classes";
import { WSNewProjectTask, WSTaskToBeUpdated } from "../utils/entities";
import { parseToWSNewProjectTask, parseToWSUpdateProjectTask } from "../utils/parsers";
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
            }
        ];
        this.configSocket(socket, wsEventList);
    }
    //#region Helpers
    private setTaskBoardByProject(projectId: number, taskBoard: ProjectTaskBoard) {
        this.dataHandler
            .taskBoardsHandler
            .setTaskBoardProject(projectId, taskBoard);
    }
    private refreshTaskBoardByProject(projectId: number, taskBoard: ProjectTaskBoard) {
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
            collaboratorId, projectId, task: newTask
        });
        // Obtener tablero de la bd
        const taskBoard: ProjectTaskBoard = await ProjectTasksController.getTaskBoardByProjectId(projectId);
        // Actualizando el tablero en la memoria
        this.setTaskBoardByProject(projectId, taskBoard);
        // Actualizando el tablero a todos los colaboradores del proyecto
        this.refreshTaskBoardByProject(projectId, taskBoard);
    }
    //Actualizar tarea
    private async updateTask(socket: Socket, body?: any) {
        //Validando 
        const taskToBeUpdated: WSTaskToBeUpdated = parseToWSUpdateProjectTask(body);
        //Obteniendo
        const {
            userId: collaboratorId,
            projectId
        } = getUserDataProjectTaskServiceBySocket(socket);
        // Realizando query para actualizar una tarea
        await ProjectTasksController.updateTask({
            projectId, task: taskToBeUpdated, collaboratorId
        });
        // Obtener tablero de la bd
        const taskBoard: ProjectTaskBoard = await ProjectTasksController.getTaskBoardByProjectId(projectId);
        // Actualizando el tablero en la memoria
        this.setTaskBoardByProject(projectId, taskBoard);
        // Actualizando el tablero a todos los colaboradores del proyecto
        this.refreshTaskBoardByProject(projectId, taskBoard);
    }
    //#endregion
    //#endregion
}