import { useState } from "react";
import { Socket, io } from "socket.io-client";
import { WebsocketHook } from "./types";
import { HOST_WS } from "src/config/constants";
import {
    currentUserLocalStorage,
    tokenLocalStorage,
} from "src/storage/user.local";
import { User } from "src/entities/user/types";
import { WSServiceDataConnection } from "src/services/websockets/types";

function useWebsocket<P>(
    wsServiceDataConnection: WSServiceDataConnection<P>,
    params?: P
): WebsocketHook {
    const [socketIo, setSocketIo] = useState<Socket | null>(null);
    const getExtraHeaders = (): Record<string, string> => {
        const currentUser: User = currentUserLocalStorage.get();
        let extraHeaders: Record<string, string> = {
            authorization: `Bearer ${tokenLocalStorage.get()}`,
            "user-id": String(currentUser.id)
        };
        if (params)
            extraHeaders = {
                ...extraHeaders,
                ...wsServiceDataConnection.getHeaders(params),
            };
        return extraHeaders;
    }
    const connect = (): Socket => {
        const socket = io(`${HOST_WS}${wsServiceDataConnection.servicePath}`, {
            extraHeaders: getExtraHeaders(),
            closeOnBeforeunload: false,
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
        disconnect,
    };
}

export default useWebsocket;
