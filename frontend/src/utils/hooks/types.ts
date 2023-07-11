import { Socket } from "socket.io-client";
import { WSHeaders } from "src/services/websockets/types";

export type DeviceSizeHook = {
    isMobile: boolean;
};
export type WebsocketHook = {
    socketIo: Socket | null;
    connect: (headers?: WSHeaders) => Socket;
    disconnect: () => void;
};
export type CheckExpirationTimeTokenHook = {
    clear: () => void;
    init: () => NodeJS.Timeout | undefined;
};
export type ClassNameHook = {
    value: string;
    add: (className: string) => void;
    remove: (className: string) => void;
    contains: (className: string) => boolean;
};