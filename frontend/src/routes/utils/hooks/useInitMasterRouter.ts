import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AbsolutePaths } from "src/config/absolutePaths";
import { SessionUser } from "src/entities/user/types";
import WSServicePaths from "src/services/websockets/services";
import { clearStorage } from "src/storage";
import { currentUserLocalStorage } from "src/storage/user.local";
import useWebsocket from "src/utils/hooks/useWebsocket";
import { InitMainMenuButtonHandler, InitMasterRouterHandler } from "./types";
import useChatService from "./useChatService";
import { DBRoles } from "src/config/roles";

const useInitMasterRouter = (
    initMainMenuButtonHandler: InitMainMenuButtonHandler,
    fillRoutes: (roleId: DBRoles) => void
): InitMasterRouterHandler => {
    const navigate = useNavigate();
    const [currentUser, setCurrentUser] = useState<SessionUser | null>(null);
    const notificationService = useWebsocket(WSServicePaths.Notifications);
    const chatServiceHandler = useChatService(initMainMenuButtonHandler.menuButtonsHandler);
    useEffect(() => {
        const currentUser = currentUserLocalStorage.get();
        if (!currentUser) {
            toLogin();
            return;
        }
        try { 
            init(currentUser);
        } 
        catch (err) {
            toLogin();
        }
        return end;
    }, []);
    const toLogin = (): void => {
        clearStorage();
        navigate(AbsolutePaths.Login);
    };
    const end = (): void => {
        notificationService.disconnect();
    }
    const init = (currentUser: SessionUser) => {
        setCurrentUser(currentUser);
        const { role } = currentUser;
        fillRoutes(role.id); 
        initMainMenuButtonHandler.addMenuButtons(role.id);
        notificationService.connect();
    }
    const fillCurrentUser = (currentUser: SessionUser): void => {
        setCurrentUser(currentUser);
    }
    return {
        chatServiceHandler,
        currentUserHandler: {
            currentUser, fillCurrentUser
        }
    };
}

export default useInitMasterRouter;