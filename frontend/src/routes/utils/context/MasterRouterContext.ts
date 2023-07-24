import { createContext } from "react";
import { MasterRouterContextType } from "./types";

const INIT_MASTER_ROUTER_CONTEXT: MasterRouterContextType = {
    chatServiceHandler: {
        hasUnreadPrivateChats: false,
        hasUnreadProjectChats: false,
        socketIoChatService: null
    },
    mainMenuButtonHandler: {
        buttons: [],
        addButton: () => {},
        changeClassNameButton: () => {}
    },
    openProfileConfigModal: () => {},
};
const MasterRouterContext = createContext(INIT_MASTER_ROUTER_CONTEXT);

export default MasterRouterContext;
