import useWebsocket from "src/utils/hooks/useWebsocket";
import { ChatServiceTypes } from "./types";
import ChatServiceContext from "./utils/contexts/ChatServiceContext";
import { wsChatServiceDataConnection } from "src/services/websockets/connections";
import { getUserId } from "src/storage/user.local";
import { useEffect, useState } from "react";
import { Socket } from "socket.io-client";
import WSChatServiceEvents from "src/services/websockets/services/chats/events";
import useUserRole from "src/storage/hooks/useUserRole";
import { DBRoles } from "src/config/roles";

const ChatService = ({ children }: ChatServiceTypes) => {
    const [hasUnreadPrivateChats, setHasUnreadPrivateChats] =
        useState<boolean>(false);
    const [hasUnreadProjectChats, setHasUnreadProjectChats] =
        useState<boolean>(false);
    const userRole = useUserRole();
    const socketHandler = useWebsocket<number>(
        wsChatServiceDataConnection,
        getUserId()
    );
    useEffect(() => {
        initService();
    }, []);
    const initService = () => {
        if (userRole === DBRoles.GeneralAdmin) return;
        const socketIoValue: Socket = socketHandler.connect();
        socketIoValue.on(
            WSChatServiceEvents.Server.NotifyUnreadPrivateChats,
            (hasUnreadPrivateChats: boolean) => {
                setHasUnreadPrivateChats(hasUnreadPrivateChats);
            }
        );
        socketIoValue.on(
            WSChatServiceEvents.Server.NotifyUnreadProjectChats,
            (hasUnreadProjectChats: boolean) => {
                setHasUnreadProjectChats(hasUnreadProjectChats);
            }
        );
    };
    return (
        <ChatServiceContext.Provider
            value={{
                socketIoChatService: socketHandler.socketIo,
                hasUnreadPrivateChats,
                hasUnreadProjectChats,
            }}
        >
            {children}
        </ChatServiceContext.Provider>
    );
};

export default ChatService;
