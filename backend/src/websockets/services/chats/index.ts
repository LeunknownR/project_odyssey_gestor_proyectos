import { Server, Socket } from "socket.io";
import { WSNext, WSService, WSUserData } from "../../utils/common";
import WSServicePaths from "../../utils/services";
import WSChatServiceDataHandler from "./dataHandlers";
import WSChatServiceCollaboratorEventHandler from "./eventHandlers/eventHandler.collaborator";
import { getWSUserData, rejectConnection } from "../../utils/helpers";
import { checkWSCollaboratorToken } from "../../utils/authentication";
import WSErrorMessages from "../../utils/errorMessages";
import { WSChatServiceRoom } from "./utils/helpers";
import WSChatServiceEvents from "./events";
import ChatController from "../../../controllers/chatController/chat.controller";

export default class WSChatService extends WSService {
    //#region Attributes
    private dataHandler: WSChatServiceDataHandler;
    private collaboratorEventHandler: WSChatServiceCollaboratorEventHandler;
    //#endregion
    constructor(io: Server) {
        super(io.of(WSServicePaths.Chat));
        this.dataHandler = new WSChatServiceDataHandler();
        this.collaboratorEventHandler = new WSChatServiceCollaboratorEventHandler(
            this.io,
            this.dataHandler
        );
    }
    //#region Methods
    private notifyOnlineStateCollaborator(isOnline: boolean): void {
        this.dataHandler.connectedCollaborators.forEach(({ id }) => {
            this.io
                .to(WSChatServiceRoom.getCollaboratorChatRoom(id))
                .emit(WSChatServiceEvents.Server.NotifyCollaboratorOnlineState, isOnline);
        });
    }
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
        this.notifyOnlineStateCollaborator(true);
        // Ingresando al colaborador a su sala de chat privado
        socket.join(
            WSChatServiceRoom.getCollaboratorChatRoom(collaboratorId)
        );
        // Notificando de chats privados sin leer al receptor
        const hasUnreadPrivateChats: boolean = await ChatController.collaboratorHasUnreadPrivateChats(collaboratorId);
        socket.emit(
            WSChatServiceEvents.Server.NotifyUnreadPrivateChats,
            hasUnreadPrivateChats
        );
        // Notificando de chats de proyectos sin leer al receptor
        const hasUnreadProjectChats: boolean = await ChatController.collaboratorHasUnreadProjectChats(collaboratorId);
        socket.emit(
            WSChatServiceEvents.Server.NotifyUnreadProjectChats,
            hasUnreadProjectChats
        );
    }
    private async connectCollaborator(socket: Socket,  next: WSNext) {
        // Autenticando token para la conexión
        const checked = await checkWSCollaboratorToken(socket);
        if (!checked) {
            rejectConnection(socket, next, WSErrorMessages.Unauthorized);
            return;
        }
        this.configCollaborator(socket, next);
        next();
    }
    private async disconnectCollaborator(socket: Socket) {
        const { userId: collaboratorId } = getWSUserData(socket);
        // Eliminando colaborador de la lista de collaboradores conectados al servicio de chat
        this.dataHandler
            .connectedCollaborators
            .removeCollaborator(socket.id);
        this.notifyOnlineStateCollaborator(false);
        // Sacando de la sala de chat privado
        socket.leave(
            WSChatServiceRoom.getCollaboratorChatRoom(collaboratorId)
        );
    }
    //#region Main
    config(): void {
        this.io.use((socket, next) => {
            try {
                this.connectCollaborator(socket, next);
            }
            catch (err) {
                console.log(err);
            }
        });
    }
    init(): void {
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