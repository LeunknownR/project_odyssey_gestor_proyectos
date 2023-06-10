import { useState } from "react";
import { Socket } from "socket.io-client";
import { WebsocketHook } from "./types";

const useWebsocket = (
    connectToWSService: (fill: (socket: Socket) => void) => boolean
): WebsocketHook => {
    const [socketIo, setSocketIo] = useState<Socket | null>(null);
    const connect = (): Promise<Socket> => {
        return new Promise<Socket>(res => {
            connectToWSService(value => {
                setSocketIo(value);
                res(value);
            });
        });
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
