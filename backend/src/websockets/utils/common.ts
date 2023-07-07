import { Namespace, Socket } from "socket.io";
import { ExtendedError } from "socket.io/dist/namespace";
import { DefaultEventsMap } from "socket.io/dist/typed-events";

export type IOServerService = Namespace<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>;
export type WSUserData = {
    userId: number;
};
type WSEventHandler = (socket: Socket, body?: any) => void | Promise<void>;
export type WSEvent<E> = {
    name: E;
    handler: WSEventHandler;
};
export type WSNext = (err?: ExtendedError) => void;
export abstract class WSService {
    //#region Attributes
    protected io: IOServerService;
    //#endregion
    constructor(io: IOServerService) {
        this.io = io;
    }
    //#region Métodos
    abstract config(): void;
    abstract init(): void;
    //#endregion
};
export abstract class WSServiceEventHandler<E> {
    //#region Attributes
    protected io: IOServerService;
    //#endregion
    constructor(io: IOServerService) {
        this.io = io;
    }
    public abstract listen(socket: Socket): void;
    private async withErrorHandler(handler: WSEventHandler, socket: Socket, body?: any): Promise<void> {
        try {
            await handler(socket, body);
        }
        catch (err) {
            console.log(err);
        }
    }
    protected configSocket(socket: Socket, wsEventList: WSEvent<E>[]) {
        for (const { name, handler } of wsEventList) 
            socket.on(String(name), body => {
                this.withErrorHandler(handler, socket, body);
            });
    }
}