import useWebsocket from "src/utils/hooks/useWebsocket";
import { ChatServiceTypes } from "./types";
import ChatServiceContext from "./utils/contexts/ChatServiceContext";
import { useEffect, useState } from "react";
import { Socket } from "socket.io-client";
import WSChatServiceEvents from "src/services/websockets/services/chats/events";
import { DBRoles } from "src/config/roles";
import WSServicePaths from "src/services/websockets/services";
import useUserRole from "src/storage/hooks/useUserRole";

const ChatService = ({ children }: ChatServiceTypes) => {
    //#region States
    const [hasUnreadPrivateChats, setHasUnreadPrivateChats] = useState<boolean>(false);
    const [hasUnreadProjectChats, setHasUnreadProjectChats] = useState<boolean>(false);
    //#endregion
    const socketHandler = useWebsocket(WSServicePaths.Chats);
    const userRole = useUserRole();
    useEffect(() => {
        initService();
    }, [userRole]);
    const initService = (): void => {
        if (userRole !== DBRoles.Collaborator) return;
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
    const ready: boolean = userRole === DBRoles.GeneralAdmin || socketHandler.socketIo !== null;
    return (
        <ChatServiceContext.Provider
            value={{
                socketIoChatService: socketHandler.socketIo,
                hasUnreadPrivateChats,
                hasUnreadProjectChats,
            }}>
            {ready && children}
        </ChatServiceContext.Provider>
    );
};

export default ChatService;
