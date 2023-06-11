import { useState } from "react";
import { Socket, io } from "socket.io-client";
import { WebsocketHook } from "./types";
import { HOST_WS } from "src/config/constants";
import { currentUserLocalStorage, tokenLocalStorage } from "src/storage/user.local";
import { User } from "src/entities/user/types";
import { WSServiceDataConnection } from "src/services/websockets/types";

function useWebsocket<P>(
    wsServiceDataConnection: WSServiceDataConnection<P>,
    params: P
): WebsocketHook { 
    const [socketIo, setSocketIo] = useState<Socket | null>(null);
    const connect = (): Socket => {
        const currentUser: User = currentUserLocalStorage.get();
        const socket = io(`${HOST_WS}${wsServiceDataConnection.servicePath}`, {
            extraHeaders: {
                "authorization": `Bearer ${tokenLocalStorage.get()}`,
                "user-id": String(currentUser.id),
                ...wsServiceDataConnection.getHeaders(params)
            },
            closeOnBeforeunload: false        
        });
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
};

export default useWebsocket;