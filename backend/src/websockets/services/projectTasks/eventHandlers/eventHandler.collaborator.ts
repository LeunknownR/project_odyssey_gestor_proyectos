import { Socket } from "socket.io";
import { IOServerService, WSEvent, WSServiceEventHandler } from "../../../utils/common";
import WSProjectTaskServiceDataHandler from "../handlerData";
import { WSProjectTaskToBeChangedState, WSNewProjectTask, WSProjectTaskComment, WSProjectTaskMainInformation, WSProjectTaskForm, WSUserDataProjectTaskService } from "../utils/entities";
import { parseToWSProjectTaskToBeChangedState, parseToWSTaskIdToBeDeleted, parseToWSNewProjectTask, parseToWSProjectTaskComment, parseToWSProjectTaskMainInformation } from "../utils/parsers";
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
                handler: this.createTask.bind(this)
            },
            {
                name: WSProjectTaskServiceEvents.Collaborator.UpdateTaskMainInfo,
                handler: this.updateTaskMainInfo.bind(this)
            },
            {
                name: WSProjectTaskServiceEvents.Collaborator.ChangeTaskState,
                handler: this.changeTaskState.bind(this)
            },
            {
                name: WSProjectTaskServiceEvents.Collaborator.DeleteTask,
                handler: this.deleteTask.bind(this)
            },
            {
                name: WSProjectTaskServiceEvents.Collaborator.CommentInTask,
                handler: this.commentInTask.bind(this)
            }
        ];
        this.configSocket(socket, wsEventList);
    }
    //#region Helpers
    private async refreshTaskBoardByProject(userData: WSUserDataProjectTaskService) {
        const { userId, projectId } = userData;
        // Obtener tablero de la bd
        const taskBoard: ProjectTaskBoard = await ProjectTasksController.getTaskBoardByProjectId({
            projectId: projectId,
            payload: null,
            collaboratorId: userId
        });
        // Actualizando el tablero en la memoria
        this.dataHandler
            .taskBoardsHandler
            .setTaskBoardProject(projectId, taskBoard);
        // Refrescando tablero a los colaboradores
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
        const userData = getUserDataProjectTaskServiceBySocket(socket);
        const {
            userId: collaboratorId,
            projectId
        } = userData;
        // Realizando query para crear una tarea
        await ProjectTasksController.createTask({
            collaboratorId, projectId, payload: newTask
        });
        this.refreshTaskBoardByProject(userData);
    }
    private async updateTaskMainInfo(socket: Socket, body?: any) {
        // Validando y formateando formulario
        const taskMainInformation: WSProjectTaskMainInformation = parseToWSProjectTaskMainInformation(body);
        // Obteniendo datos de conexión del colaborador
        const userData = getUserDataProjectTaskServiceBySocket(socket);
        const {
            userId: collaboratorId,
            projectId
        } = userData;
        // Realizando query para actualizar una tarea
        await ProjectTasksController.updateTaskMainInformation({
            projectId,
            payload: taskMainInformation,
            collaboratorId
        });
        // Refrescando tablero a los colaboradores
        this.refreshTaskBoardByProject(userData);
    }
    private async changeTaskState(socket: Socket, body?: any) {
        // Validando y formateando formulario
        const projectTaskToBeChangedState: WSProjectTaskToBeChangedState = parseToWSProjectTaskToBeChangedState(body);
        // Obteniendo datos de conexión del colaborador
        const userData = getUserDataProjectTaskServiceBySocket(socket);
        const {
            userId: collaboratorId,
            projectId
        } = userData;
        // Realizando query para cambiar el estado de una tarea
        await ProjectTasksController.changeTaskState({
            projectId, 
            payload: projectTaskToBeChangedState, 
            collaboratorId
        });
        // Refrescando tablero a los colaboradores
        this.refreshTaskBoardByProject(userData);
    }
    private async deleteTask(socket: Socket, body?: any) {
        // Validando y formateando formulario
        const taskIdToBeDeleted: number = parseToWSTaskIdToBeDeleted(body);
        // Obteniendo datos de conexión del colaborador
        const userData = getUserDataProjectTaskServiceBySocket(socket);
        const {
            userId: collaboratorId,
            projectId
        } = userData;
        // Realizando query para eliminar una tarea
        await ProjectTasksController.deleteTask({
            projectId, 
            payload: taskIdToBeDeleted, 
            collaboratorId
        });
        // Refrescando tablero a los colaboradores
        this.refreshTaskBoardByProject(userData);
    }
    private async commentInTask(socket: Socket, body?: any) {
        // Validando y formateando formulario
        const taskComment: WSProjectTaskComment = parseToWSProjectTaskComment(body);
        // Obteniendo datos de conexión del colaborador
        const userData = getUserDataProjectTaskServiceBySocket(socket);
        const {
            userId: collaboratorId,
            projectId
        } = userData;
        // Realizando query para comentar en una tarea
        await ProjectTasksController.commentInTask({
            projectId,
            payload: taskComment,
            collaboratorId
        });
        // Refrescando tablero a los colaboradores
        this.refreshTaskBoardByProject(userData);
    }
    //#endregion
    //#endregion
}