import { MainMenuButtonHandler } from "src/views/components/MainMenu/utils/hooks/types";
import { ChatServiceHandler, CurrentUserHandler } from "../hooks/types";

export type MasterRouterContextFormat = {
    currentUserHandler: CurrentUserHandler;
    chatServiceHandler: ChatServiceHandler;
    mainMenuButtonHandler: MainMenuButtonHandler;
    openProfileConfigModal: () => void;
};