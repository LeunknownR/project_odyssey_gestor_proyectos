import { createContext } from "react";
import { MasterRouterContextFormat } from "./types";

const INIT_MASTER_ROUTER_CONTEXT: MasterRouterContextFormat = {
    currentUserHandler: {
        currentUser: null,
        fillCurrentUser: () => {}
    },
    chatServiceHandler: {
        hasUnreadPrivateChats: false,
        hasUnreadProjectChats: false,
        socketIoChatService: null
    },
    mainMenuButtonHandler: {
        buttons: [], 
        addButton: () => {}, 
        removeButton: () => {},
        changeClassNameButton: () => {}
    },
    openProfileConfigModal: () => {},
    openEndedSessionModal: () => {}
};
const MasterRouterContext = createContext(INIT_MASTER_ROUTER_CONTEXT);

export default MasterRouterContext;
