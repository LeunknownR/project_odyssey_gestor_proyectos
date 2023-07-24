import { MainMenuButtonHandler } from "src/views/components/MainMenu/utils/hooks/types";
import { ChatServiceHandler } from "../hooks/types";

export type MasterRouterContextType = {
    chatServiceHandler: ChatServiceHandler;
    mainMenuButtonHandler: MainMenuButtonHandler;
    openProfileConfigModal: () => void;
};