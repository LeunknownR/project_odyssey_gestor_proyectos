import { Socket } from "socket.io";
import { IOServerService, WSEvent } from "../../../utils/types";
import { WSProjectTaskServiceCollaboratorEvents } from "../events";
import WSProjectTaskServiceDataHandler from "../handlerData";
import { WSServiceEventHandler } from "../../../utils/classes";

export default class WSProjectTaskServiceCollaboratorEventHandler extends WSServiceEventHandler {
    //#region Attributes
    private dataHandler: WSProjectTaskServiceDataHandler;
    //#endregion
    constructor(io: IOServerService, dataHandler: WSProjectTaskServiceDataHandler) {
        super(io);
        this.dataHandler = dataHandler;
        // this.dataHandler = dataHandler;
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
    //#region Actions
    private createTask(socket: Socket, newTask: string) {
        
    }
    //#endregion
    //#endregion
}