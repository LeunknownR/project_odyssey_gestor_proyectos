import { Socket } from "socket.io-client";
import { DBRoles } from "src/config/roles";
import { SessionUser } from "src/entities/user/types";
import { MainMenuButtonHandler } from "src/views/components/MainMenu/utils/hooks/types";

export type ChatServiceHandler = {
    socketIoChatService: Socket | null;
    hasUnreadPrivateChats: boolean;
    hasUnreadProjectChats: boolean;
};
export type InitMainMenuButtonHandler ={
    menuButtonsHandler: MainMenuButtonHandler;
    addMenuButtons: (role: DBRoles) => void;
};
export type CurrentUserHandler = {
    currentUser: SessionUser | null;
    fillCurrentUser: (currentUser: SessionUser) => void;
};
export type InitMasterRouterHandler = {
    chatServiceHandler: ChatServiceHandler;
    currentUserHandler: CurrentUserHandler;
};