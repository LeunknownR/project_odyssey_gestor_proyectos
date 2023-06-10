import { Socket } from "socket.io-client";

export type DeviceSizeHook = {
    isMobile: boolean;
};
export type WebsocketHook = {
    socketIo: Socket | null;
    connect: () => Promise<Socket>;
    disconnect: () => void;
};
export type CheckExpirationTimeTokenHook = {
    clear: () => void;
    init: () => NodeJS.Timeout | undefined;
};
