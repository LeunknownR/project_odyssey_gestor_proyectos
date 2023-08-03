import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AbsolutePaths } from "src/config/absolutePaths";
import { SessionUser } from "src/entities/user/types";
import { clearStorage } from "src/storage";
import { currentUserLocalStorage } from "src/storage/user.local";
import { InitMainMenuButtonHandler, InitMasterRouterHandler } from "./types";
import useChatService from "./useChatService";
import { DBRoles } from "src/config/roles";
import useNotificationService from "./useNotificationService";

const useInitMasterRouter = (
    initMainMenuButtonHandler: InitMainMenuButtonHandler,
    fillRoutes: (roleId: DBRoles) => void,
    openEndedSessionModal: (content: string) => void 
): InitMasterRouterHandler => {
    const navigate = useNavigate();
    const [currentUser, setCurrentUser] = useState<SessionUser | null>(null);
    const chatServiceHandler = useChatService(initMainMenuButtonHandler.menuButtonsHandler);
    useNotificationService(openEndedSessionModal);
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
    }, []);
    const toLogin = (): void => {
        clearStorage();
        navigate(AbsolutePaths.Login);
    };
    const init = (currentUser: SessionUser) => {
        setCurrentUser(currentUser);
        const { role } = currentUser;
        fillRoutes(role.id); 
        initMainMenuButtonHandler.addMenuButtons(role.id);
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