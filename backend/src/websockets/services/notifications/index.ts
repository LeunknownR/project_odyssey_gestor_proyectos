import { Server, Socket } from "socket.io";
import { WSNext, WSService, WSUserData } from "../../utils/common";
import WSServicePaths from "../../utils/services";
import WSNotificationServiceDataHandler from "./dataHandlers";
import { getWSUserData, rejectConnection } from "../../utils/helpers";
import { checkWSCollaboratorToken } from "../../utils/authentication";
import WSErrorMessages from "../../utils/errorMessages";

export default class WSNotificationService extends WSService {
    //#region Attributes
    readonly dataHandler: WSNotificationServiceDataHandler;
    //#endregion
    constructor(io: Server) {
        super(io.of(WSServicePaths.Notifications));
        this.dataHandler = new WSNotificationServiceDataHandler();
    }
    //#region Methods
    private async configCollaborator(socket: Socket, next: WSNext) {
        // Obteniendo datos de conexión
        let userDataBySocket: WSUserData = null;
        try {
            userDataBySocket = getWSUserData(socket);
        }
        catch (err) {
            rejectConnection(socket, next, err);
            return;
        }
        const { userId: collaboratorId } = userDataBySocket;
        // Agregando a la lista de collaboradores conectados al servicio de chat
        this.dataHandler
            .connectedCollaborators
            .addCollaborator({
                socketId: socket.id,
                id: collaboratorId
            });
    }
    private async connectCollaborator(socket: Socket,  next: WSNext) {
        // Autenticando token para la conexión
        const checked: boolean = await checkWSCollaboratorToken(socket);
        if (!checked) {
            rejectConnection(socket, next, WSErrorMessages.Unauthorized);
            return;
        }
        this.configCollaborator(socket, next);
        next();
    }
    private async disconnectCollaborator(socket: Socket) {
        // Eliminando colaborador de la lista de collaboradores conectados al servicio
        this.dataHandler
            .connectedCollaborators
            .removeCollaborator(socket.id);
    }
    //#region Main
    config(): void {
        this.server.use((socket, next) => {
            try {
                this.connectCollaborator(socket, next);
            }
            catch (err) {
                console.log(err);
            }
        });
    }
    init(): void {
        this.server.on("connection", socket => {
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