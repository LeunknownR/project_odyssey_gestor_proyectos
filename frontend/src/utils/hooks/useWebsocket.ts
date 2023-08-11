import { useState } from "react";
import { Socket, io } from "socket.io-client";
import { WebsocketHook } from "./types";
import { HOST_WS } from "src/config/constants";
import {
    currentUserLocalStorage,
    tokenLocalStorage,
} from "src/storage/user.local";
import { SessionUser } from "src/entities/user/types";
import { WSHeaders } from "src/services/websockets/types";
import WSServicePaths from "src/services/websockets/services";

function useWebsocket(
    servicePath: WSServicePaths
): WebsocketHook {
    const [socketIo, setSocketIo] = useState<Socket | null>(null);
    const connect = (headers?: WSHeaders): Socket => {
        const currentUser: SessionUser = currentUserLocalStorage.get();
        const socket = io(`${HOST_WS}${servicePath}`, {
            extraHeaders: {
                authorization: `Bearer ${tokenLocalStorage.get()}`,
                "x-user-id": String(currentUser?.id),
                ...headers
            },
            forceNew: true,
            closeOnBeforeunload: false
        });
        setSocketIo(socket);
        return socket;
    };
    const disconnect = () => {
        socketIo?.disconnect();
        setSocketIo(null);
    };
    return {
        socketIo: socketIo || null,
        connect,
        disconnect
    };
}

export default useWebsocket;
