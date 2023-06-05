import { Server, Socket } from "socket.io";
import { ExtendedError } from "socket.io/dist/namespace";
import { WSUserDataProjectTaskService } from "./utils/entities";
import { getUserDataProjectTaskServiceBySocket } from "./utils/helpers";
import WSServices from "../../utils/services";
import { rejectConnection } from "../../utils/helpers";
import { checkWSCollaboratorToken } from "../../utils/authentication";
import WSErrorMessages from "../../utils/errorMessages";
import WSProjectTaskServiceCollaboratorEventHandler from "./eventHandlers/eventHandlers.collaborator";
import WSProjectTaskServiceDataHandler from "./handlerData";
import { WSService } from "../../utils/classes";
import { WSProjectTaskServiceServerEvents } from "./events";
import { ProjectTaskBoard } from "../../../entities/projectTasks/entities"

export default class WSProjectTaskService extends WSService {
    //#region Attributes
    private dataHandler: WSProjectTaskServiceDataHandler;
    private collaboratorEventHandler: WSProjectTaskServiceCollaboratorEventHandler;
    //#endregion
    constructor(io: Server) {
        super(io.of(WSServices.ProjectTask));
        this.dataHandler = new WSProjectTaskServiceDataHandler();
        this.collaboratorEventHandler = new WSProjectTaskServiceCollaboratorEventHandler(
            this.io,
            this.dataHandler
        );
    }
    //#region Methods
    private connectCollaboratorUser(socket: Socket, next: (err?: ExtendedError) => void) {
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
            .connectedCollaboratorsInProjectHandler
            .addCollaborator(userDataBySocket);
        const { projectId } = userDataBySocket;
        // Verificando si es el primer colaborador en entrar al tablero de tareas del proyecto
        if (this.dataHandler.connectedCollaboratorsInProjectHandler.getCountConnectedCollaborators(projectId) === 1) {
            // 
        }
        // Enviándole la lista de tareas actual
        const taskBoard: ProjectTaskBoard = this.dataHandler
            .taskBoardsHandler
            .getTaskBoardByProject(userDataBySocket.projectId);
        socket.emit(
            WSProjectTaskServiceServerEvents.ListTasks, 
            taskBoard
        );
    }
    private disconnectCollaboratorUser(socket: Socket) {
        const userDataBySocket = getUserDataProjectTaskServiceBySocket(socket);
        const {
            connectedCollaboratorsInProjectHandler,
            taskBoardsHandler: taskListByStateHandler
        } = this.dataHandler;
        // Eliminándolo de los colaboradores conectados en el tablero tareas del proyecto
        connectedCollaboratorsInProjectHandler
            .removeCollaborator(userDataBySocket);
        // Verificando si ya no hay colaboradores conectados en el tablero del proyecto para eliminarlo de la lista de tableros
        const { projectId } = userDataBySocket;
        if (connectedCollaboratorsInProjectHandler.getCountConnectedCollaborators(projectId) !== 0) return;
        taskListByStateHandler.removeTaskBoardByProjectId(projectId);
    }
    private async connectUser(socket: Socket, next: (err?: ExtendedError) => void) {
        // Autenticando token para la conexión
        const checked = await checkWSCollaboratorToken(socket);
        if (checked) {
            this.connectCollaboratorUser(socket, next);
            next();
            return;
        }
        rejectConnection(socket, next, WSErrorMessages.Unauthorized);
    }
    //#region Main
    public config() {
        this.io.use((socket, next) => this.connectUser(socket, next));
    }
    public async init() {
        this.io.on("connection", socket => {
            this.collaboratorEventHandler.listen(socket);
            socket.on("disconnect", () => this.disconnectCollaboratorUser(socket));
        });
    }
    //#endregion
    //#endregion
}