import { Server, Socket } from "socket.io";
import { ExtendedError } from "socket.io/dist/namespace";
import { WSUserDataProjectTaskService } from "./utils/entities";
import { getUserDataProjectTaskServiceBySocket } from "./utils/helpers";
import WSServices from "../../utils/services";
import { IOServerService, WSService } from "../../utils/types";
import { rejectConnection } from "../../utils/helpers";
import { checkWSCollaboratorToken } from "../../utils/authentication";
import WSErrorMessages from "../../utils/errorMessages";
import WSProjectTaskServiceCollaboratorEventHandler from "./eventHandlers/eventHandlers.collaborator";
import WSProjectTaskServiceDataHandler from "./handlerData";

export default class WSProjectTaskService implements WSService {
    //#region Attributes
    private io: IOServerService;
    private dataHandler: WSProjectTaskServiceDataHandler;
    private collaboratorEventHandler: WSProjectTaskServiceCollaboratorEventHandler;
    //#endregion
    constructor(io: Server) {
        this.io = io.of(WSServices.ProjectTask);
        this.dataHandler = new WSProjectTaskServiceDataHandler();
        this.collaboratorEventHandler = new WSProjectTaskServiceCollaboratorEventHandler(
            this.io,
            this.dataHandler
        );
    }
    //#region Methods
    private configCollaboratorUser(socket: Socket, next: (err?: ExtendedError) => void) {
        let userDataBySocket: WSUserDataProjectTaskService = null;
        try {
            userDataBySocket = getUserDataProjectTaskServiceBySocket(socket);
        }
        catch (err) {
            rejectConnection(socket, next, err);
            return;
        }
        this.dataHandler.addCollaboratorInProject(userDataBySocket); 
    }
    private async connectUser(socket: Socket, next: (err?: ExtendedError) => void) {
        // Autenticando token para la conexión
        const checked = await checkWSCollaboratorToken(socket);
        if (checked) {
            this.configCollaboratorUser(socket, next);
            next();
            return;
        }
        rejectConnection(socket, next, WSErrorMessages.Unauthorized);
    }
    private disconnectUser(socket: Socket) {
        const userDataBySocket = getUserDataProjectTaskServiceBySocket(socket);
        this.dataHandler.removeCollaboratorInProject(userDataBySocket);
    }
    //#region Main
    public config() {
        this.io.use((socket, next) => this.connectUser(socket, next));
    }
    public async init() {
        this.io.on("connection", socket => {
            this.collaboratorEventHandler.listen(socket);
            socket.on("disconnect", () => this.disconnectUser(socket));
        });
    }
    //#endregion
    //#endregion
}