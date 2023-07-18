import { Socket } from "socket.io-client";

export type ChatServiceHandler = {
    socketIoChatService: Socket | null;
    hasUnreadPrivateChats: boolean;
    hasUnreadProjectChats: boolean;
};