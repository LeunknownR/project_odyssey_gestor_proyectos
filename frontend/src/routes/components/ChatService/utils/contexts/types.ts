import { Socket } from "socket.io-client";

export type ChatServiceContextType = {
    socketIoChatService: Socket | null;
    hasUnreadPrivateChats: boolean;
    hasUnreadProjectChats: boolean;
};