import useWebsocket from "src/utils/hooks/useWebsocket";
import { ChatServiceTypes } from "./types";
import ChatServiceContext from "./utils/contexts/ChatServiceContext";
import { wsChatServiceDataConnection } from "src/services/websockets/connections";
import { currentUserLocalStorage } from "src/storage/user.local";
import { useEffect, useState } from "react";
import { Socket } from "socket.io-client";
import WSChatServiceEvents from "src/services/websockets/services/chats/events";
import { DBRoles } from "src/config/roles";

const ChatService = ({ children }: ChatServiceTypes) => {
    //#region States
    const [hasUnreadPrivateChats, setHasUnreadPrivateChats] =
        useState<boolean>(false);
    const [hasUnreadProjectChats, setHasUnreadProjectChats] =
        useState<boolean>(false);
    //#endregion
    const socketHandler = useWebsocket(wsChatServiceDataConnection);
    useEffect(() => {
        const currentUser = currentUserLocalStorage.get();
        initService(currentUser.role.id);
    }, []);
    const initService = (roleId: string): void => {
        if (roleId !== DBRoles.Collaborator) return;
        const socketIoValue: Socket = socketHandler.connect();
        socketIoValue.on(
            WSChatServiceEvents.Server.NotifyUnreadPrivateChats,
            notifyUnreadPrivateChats
        );
        socketIoValue.on(
            WSChatServiceEvents.Server.NotifyUnreadProjectChats,
            notifyUnreadProjectChats
        );
    };
    const notifyUnreadPrivateChats = (hasUnreadChats: boolean): void => {
        setHasUnreadPrivateChats(hasUnreadChats);
    }
    const notifyUnreadProjectChats = (hasUnreadChats: boolean): void => {
        setHasUnreadProjectChats(hasUnreadChats);
    }
    return (
        <ChatServiceContext.Provider
            value={{
                socketIoChatService: socketHandler.socketIo,
                hasUnreadPrivateChats,
                hasUnreadProjectChats,
            }}>
            {socketHandler.socketIo && children}
        </ChatServiceContext.Provider>
    );
};

export default ChatService;
