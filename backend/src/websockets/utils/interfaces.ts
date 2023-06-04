import { Socket } from "socket.io";

export interface WSService {
    config(): void;
    init(): void;
};
export interface IWSServiceEventHandler {
    listen(socket: Socket): void;
}