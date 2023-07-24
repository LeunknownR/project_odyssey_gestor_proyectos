import { Socket } from "socket.io";
import { IOServerService, WSEvent, WSServiceEventHandler } from "../../../utils/common";
import WSProjectTaskServiceDataHandler from "../dataHandlers";
import { WSProjectTaskWithNewState, WSNewProjectTask, WSProjectTaskComment, WSProjectTaskMainInformation, WSUserDataProjectTaskService, WSNewProjectSubtask, WSProjectSubtaskToBeUpdated, WSProjectSubtaskToBeSwitchedCheckStatus } from "../utils/entities";
import { parseToWSProjectTaskWithNewState, parseToWSTaskIdToBeDeleted, parseToWSNewProjectTask, parseToWSProjectTaskComment, parseToWSProjectTaskMainInformation, parseToWSNewProjectSubtask, parseToWSProjectSubtaskToBeUpdated, parseToWSProjectSubtaskToBeSwitchedCheckStatus, parseToWSSubtaskIdToBeDeleted } from "../utils/parsers";
import ProjectTaskController from "../../../../controllers/projectTaskController/projectTasks.controller";
import { WSProjectTaskServiceRoomHandler, getUserDataProjectTaskServiceBySocket } from "../utils/helpers";
import WSProjectTaskServiceEvents from "../events";
import ProjectTaskBoard from "../../../../entities/projectTask/ProjectTaskBoard";

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
                name: WSProjectTaskServiceEvents.Collaborator.UpdateSubtask,
                handler: this.updateSubtask.bind(this)
            },
            {
                name: WSProjectTaskServiceEvents.Collaborator.SwitchCheckStatusSubtask,
                handler: this.switchCheckStatusSubtask.bind(this)
            },
            {
                name: WSProjectTaskServiceEvents.Collaborator.DeleteSubtask,
                handler: this.deleteSubtask.bind(this)
            },
            {
                name: WSProjectTaskServiceEvents.Collaborator.CreateSubtask,
                handler: this.createSubtask.bind(this)
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
        const taskBoard: ProjectTaskBoard = await ProjectTaskController.getTaskBoardByProjectId({
            projectId: projectId,
            payload: null,
            collaboratorId: userId
        });
        // Actualizando el tablero en la memoria
        this.dataHandler
            .taskBoardGroup
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
        await ProjectTaskController.createTask({
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
        await ProjectTaskController.updateTaskMainInformation({
            projectId,
            payload: taskMainInformation,
            collaboratorId
        });
        // Refrescando tablero a los colaboradores
        this.refreshTaskBoardByProject(userData);
    }
    private async createSubtask(socket: Socket, body?: any) {
        // Validando datos
        const newSubtask: WSNewProjectSubtask = parseToWSNewProjectSubtask(body);
        // Obteniendo datos de conexión del colaborador
        const userData = getUserDataProjectTaskServiceBySocket(socket);
        const {
            userId: collaboratorId,
            projectId
        } = userData;
        // Realizando query para crear una tarea
        await ProjectTaskController.createSubtask({
            collaboratorId, 
            projectId, 
            payload: newSubtask
        });
        this.refreshTaskBoardByProject(userData);
    }
    private async updateSubtask(socket: Socket, body?: any) {
        // Validando y formateando formulario
        const subtaskToBeUpdated: WSProjectSubtaskToBeUpdated = parseToWSProjectSubtaskToBeUpdated(body);
        // Obteniendo datos de conexión del colaborador
        const userData = getUserDataProjectTaskServiceBySocket(socket);
        const {
            userId: collaboratorId,
            projectId
        } = userData;
        // Realizando query para actualizar una tarea
        await ProjectTaskController.updateSubtask({
            projectId,
            payload: subtaskToBeUpdated,
            collaboratorId
        });
        // Refrescando tablero a los colaboradores
        this.refreshTaskBoardByProject(userData);
    }
    private async switchCheckStatusSubtask(socket: Socket, body?: any) {
        // Validando y formateando formulario
        const subtaskToBeSwitchedCheckStatus: WSProjectSubtaskToBeSwitchedCheckStatus = parseToWSProjectSubtaskToBeSwitchedCheckStatus(body);
        // Obteniendo datos de conexión del colaborador
        const userData = getUserDataProjectTaskServiceBySocket(socket);
        const {
            userId: collaboratorId,
            projectId
        } = userData;
        // Realizando query para cambiar el estado de una tarea
        await ProjectTaskController.switchCheckStatusSubtask({
            projectId, 
            payload: subtaskToBeSwitchedCheckStatus, 
            collaboratorId
        });
        // Refrescando tablero a los colaboradores
        this.refreshTaskBoardByProject(userData);
    }
    private async deleteSubtask(socket: Socket, body?: any) {
        // Validando y formateando formulario
        const subtaskIdToBeDeleted: number = parseToWSSubtaskIdToBeDeleted(body);
        // Obteniendo datos de conexión del colaborador
        const userData = getUserDataProjectTaskServiceBySocket(socket);
        const {
            userId: collaboratorId,
            projectId
        } = userData;
        // Realizando query para eliminar una tarea
        await ProjectTaskController.deleteSubtask({
            projectId, 
            payload: subtaskIdToBeDeleted, 
            collaboratorId
        });
        // Refrescando tablero a los colaboradores
        this.refreshTaskBoardByProject(userData);
    }
    private async changeTaskState(socket: Socket, body?: any) {
        // Validando y formateando formulario
        const projectTaskWithNewState: WSProjectTaskWithNewState = parseToWSProjectTaskWithNewState(body);
        // Obteniendo datos de conexión del colaborador
        const userData = getUserDataProjectTaskServiceBySocket(socket);
        const {
            userId: collaboratorId,
            projectId
        } = userData;
        // Realizando query para cambiar el estado de una tarea
        await ProjectTaskController.changeTaskState({
            projectId, 
            payload: projectTaskWithNewState, 
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
        await ProjectTaskController.deleteTask({
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
        await ProjectTaskController.commentInTask({
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