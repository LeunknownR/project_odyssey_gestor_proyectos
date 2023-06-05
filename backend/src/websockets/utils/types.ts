import { Namespace, Socket } from "socket.io";
import { DefaultEventsMap } from "socket.io/dist/typed-events";

export type IOServerService = Namespace<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>
export type WSUserData = {
    userId: number
};
export type WSEvent = {
    name: string,
    handler: (socket: Socket, body?: any) => void
};