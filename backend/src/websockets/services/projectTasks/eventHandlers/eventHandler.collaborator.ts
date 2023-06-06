import { Socket } from "socket.io";
import { IOServerService, WSEvent } from "../../../utils/types";
import { WSProjectTaskServiceCollaboratorEvents, WSProjectTaskServiceServerEvents } from "../events";
import WSProjectTaskServiceDataHandler from "../handlerData";
import { WSServiceEventHandler } from "../../../utils/classes";
import { WSNewProjectTask } from "../utils/entities";
import { parseToWSNewProjectTask } from "../utils/parsers";
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
            }
        ];
        this.configSocket(socket, wsEventList);
    }
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
            collaboratorId, projectId, newTask
        });
        // Obtener tablero de la bd
        const taskBoard: ProjectTaskBoard = await ProjectTasksController.getTaskBoardByProjectId(projectId);
        // Actualizando el tablero en la memoria
        this.dataHandler
            .taskBoardsHandler
            .addTaskBoardProject(projectId, taskBoard);
        // Actualizando el tablero a todos los colaboradores del proyecto
        const projectRoom: string = WSProjectTaskServiceRoomHandler.getProjectRoom(projectId);
        this.io
            .to(projectRoom)
            .emit(
                WSProjectTaskServiceServerEvents.DispatchTaskBoard,
                taskBoard
            );
    }
    // ProjectTasksController.updateTask(userId, taskToBeUpdated); 
    //#endregion
    //#endregion
}