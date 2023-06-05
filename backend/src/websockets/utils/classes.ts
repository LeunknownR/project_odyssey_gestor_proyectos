import { Socket } from "socket.io";
import { IOServerService, WSEvent } from "./types";

export abstract class WSService {
    //#region Attributes
    protected io: IOServerService;
    //#endregion
    constructor(io: IOServerService) {
        this.io = io;
    }
    //#region Métodos
    public abstract config(): void;
    public abstract init(): void;
    //#endregion
};
export abstract class WSServiceEventHandler {
    protected io: IOServerService;
    constructor(io: IOServerService) {
        this.io = io;
    }
    public abstract listen(socket: Socket): void;
    protected configSocket(socket: Socket, wsEventList: WSEvent[]) {
        for (const { name, handler } of wsEventList) 
            socket.on(name, body => {
                try {
                    handler(socket, body);
                }
                catch (err) {
                    console.log(err);
                }
            });
    }
}