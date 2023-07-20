import { Server, Socket } from "socket.io";
import { WSUserDataProjectTaskService } from "./utils/entities";
import { WSProjectTaskServiceRoomHandler, getUserDataProjectTaskServiceBySocket } from "./utils/helpers";
import WSServicePaths from "../../utils/services";
import { rejectConnection } from "../../utils/helpers";
import { checkWSCollaboratorToken } from "../../utils/authentication";
import WSErrorMessages from "../../utils/errorMessages";
import WSProjectTaskServiceCollaboratorEventHandler from "./eventHandlers/eventHandler.collaborator";
import WSProjectTaskServiceDataHandler from "./dataHandlers";
import { ProjectTaskBoard } from "../../../entities/projectTask/entities"
import ProjectTaskController from "../../../controllers/projectTaskController/projectTasks.controller";
import { WSNext, WSService } from "../../utils/common";
import WSProjectTaskServiceEvents from "./events";

export default class WSProjectTaskService extends WSService {
    //#region Attributes
    private dataHandler: WSProjectTaskServiceDataHandler;
    private collaboratorEventHandler: WSProjectTaskServiceCollaboratorEventHandler;
    //#endregion
    constructor(io: Server) {
        super(io.of(WSServicePaths.ProjectTask));
        this.dataHandler = new WSProjectTaskServiceDataHandler();
        this.collaboratorEventHandler = new WSProjectTaskServiceCollaboratorEventHandler(
            this.io,
            this.dataHandler
        );
    }
    //#region Methods
    private async configCollaborator(socket: Socket, next: WSNext) {
        // Obteniendo datos de conexión
        let userDataBySocket: WSUserDataProjectTaskService = null;
        try {
            userDataBySocket = getUserDataProjectTaskServiceBySocket(socket);
        }
        catch (err) {
            rejectConnection(socket, next, err);
            return;
        }
        // Agregando a los colaboradores conectados al proyecto correspondiente
        this.dataHandler
            .projectTaskBoardConnectedCollaborators
            .addCollaborator(userDataBySocket);
        const { userId: collaboratorId, projectId } = userDataBySocket;
        // Uniendo al socket del colaborador a la sala de sockets de proyecto
        socket.join(WSProjectTaskServiceRoomHandler.getProjectRoom(projectId));
        let taskBoard: ProjectTaskBoard = null;
        // Verificando si es el primer colaborador en entrar al tablero de tareas del proyecto
        const countConnectedCollaborators: number = this.dataHandler.projectTaskBoardConnectedCollaborators.getCountConnectedCollaborators(projectId);
        if (countConnectedCollaborators === 1) {
            // Consultando tablero de la bd
            taskBoard = await ProjectTaskController.getTaskBoardByProjectId({
                collaboratorId,
                payload: null,
                projectId
            });
            // Actualizar la memoria
            this.dataHandler
                .taskBoardGroup
                .setTaskBoardProject(projectId, taskBoard);
        }
        else {
            taskBoard = this.dataHandler
                .taskBoardGroup
                .getTaskBoardByProject(userDataBySocket.projectId);
        }
        // Enviándole la lista de tareas actual
        socket.emit(
            WSProjectTaskServiceEvents.Server.DispatchTaskBoard, 
            taskBoard
        );
    }
    private async connectCollaborator(socket: Socket, next: WSNext) {
        // Autenticando token para la conexión
        const checked = await checkWSCollaboratorToken(socket);
        if (!checked) {
            rejectConnection(socket, next, WSErrorMessages.Unauthorized);
            return;
        }
        this.configCollaborator(socket, next);
        next();
    }
    private disconnectCollaborator(socket: Socket) {
        const userDataBySocket = getUserDataProjectTaskServiceBySocket(socket);
        const {
            projectTaskBoardConnectedCollaborators,
            taskBoardGroup
        } = this.dataHandler;
        // Eliminándolo de los colaboradores conectados en el tablero tareas del proyecto
        projectTaskBoardConnectedCollaborators
            .removeCollaborator(userDataBySocket);
        // Verificando si ya no hay colaboradores conectados en el tablero del proyecto para eliminarlo de la lista de tableros
        const { projectId } = userDataBySocket;
        socket.leave(WSProjectTaskServiceRoomHandler.getProjectRoom(projectId));
        const countConnectedCollaborators: number = projectTaskBoardConnectedCollaborators.getCountConnectedCollaborators(projectId);
        if (countConnectedCollaborators !== 0) 
            return;
        taskBoardGroup.removeTaskBoardByProjectId(projectId);
    }
    //#region Main
    config() {
        this.io.use((socket, next) => {
            try {
                this.connectCollaborator(socket, next);
            }
            catch (err) {
                console.log(err);
            }
        });
    }
    async init() {
        this.io.on("connection", socket => {
            this.collaboratorEventHandler.listen(socket);
            socket.on("disconnect", () => {
                try {
                    this.disconnectCollaborator(socket);
                }
                catch (err) {
                    console.log(err);
                }
            });
        });
    }
    //#endregion
    //#endregion
}