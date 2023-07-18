import { useEffect, useState } from "react";
import { ChatServiceHandler } from "./types";
import WSServicePaths from "src/services/websockets/services";
import useUserRole from "src/storage/hooks/useUserRole";
import useWebsocket from "src/utils/hooks/useWebsocket";
import { DBRoles } from "src/config/roles";
import { MainMenuButtonHandler } from "src/views/components/MainMenu/utils/hooks/types";
import { AbsolutePaths } from "src/config/absolutePaths";
import WSChatServiceEvents from "src/services/websockets/services/chats/events";
import { Socket } from "socket.io-client";

const useChatService = (
    mainMenuButtonHandler: MainMenuButtonHandler
): ChatServiceHandler => {
    //#region States
    const [hasUnreadPrivateChats, setHasUnreadPrivateChats] = useState<boolean>(false);
    const [hasUnreadProjectChats, setHasUnreadProjectChats] = useState<boolean>(false);
    //#endregion
    const socketHandler = useWebsocket(WSServicePaths.Chats);
    const userRole = useUserRole();
    useEffect(() => {
        if (userRole !== DBRoles.Collaborator) return;
        mainMenuButtonHandler.addButton({
            id: "CHATS",
            to: AbsolutePaths.Chats,
            icon: "solar:chat-line-linear",
            className: getMainMenuButtonClassName()
        });
        initService();
    }, [userRole]);
    useEffect(() => {
        if (userRole !== DBRoles.Collaborator) return;
        mainMenuButtonHandler.changeClassNameButton("CHATS", getMainMenuButtonClassName());
    }, [hasUnreadProjectChats, hasUnreadPrivateChats]);
    const getMainMenuButtonClassName = (): string => {
        const classList: string[] = [];
        if (hasUnreadPrivateChats || hasUnreadProjectChats)
            classList.push("notified");
        return classList.join(" ");
    }
    const initService = (): void => {
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
    return {
        hasUnreadPrivateChats,
        hasUnreadProjectChats,
        socketIoChatService: socketHandler.socketIo
    };
}

export default useChatService;