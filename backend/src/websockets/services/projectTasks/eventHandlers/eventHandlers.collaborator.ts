import { Socket } from "socket.io";
import { IOServerService, WSEvent } from "../../../utils/types";
import { WSProjectTaskServiceCollaboratorEvents } from "../events";
import WSProjectTaskServiceDataHandler from "../handlerData";

export default class WSProjectTaskServiceCollaboratorEventHandler {
    //#region Attributes
    private io: IOServerService;
    private dataHandler: WSProjectTaskServiceDataHandler;
    //#endregion
    constructor(io: IOServerService, dataHandler: WSProjectTaskServiceDataHandler) {
        this.io = io;
        this.dataHandler = dataHandler;
    }
    //#region Methods
    public listen(socket: Socket) {
        const wsEventList: WSEvent[] = [
            {
                name: WSProjectTaskServiceCollaboratorEvents.CreateTask,
                handler: this.createTask 
            }
        ];
        this.configSocket(socket, wsEventList);
    }
    private configSocket(socket: Socket, wsEventList: WSEvent[]) {
        for (const { name, handler } of wsEventList) 
            socket.on(name, body => handler(socket, body));
    }
    //#region Actions
    private createTask(socket: Socket, newTask: string) {
    }
    //#endregion
    //#endregion
}