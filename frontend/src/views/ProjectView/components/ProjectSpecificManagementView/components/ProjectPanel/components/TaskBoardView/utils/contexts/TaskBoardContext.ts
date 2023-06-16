import { createContext } from "react";
import { InitTaskBoardContext } from "./types";

const initTaskBoardContext: InitTaskBoardContext = {
    socketIo: null,
    projectId: 0,
    isTaskMenuOpen: false,
    modifyMenuRef: null,
    preloader: {
        hide: () => {},
        show: () => {},
        value: {
            hidden: true,
            message: ""
        }
    },
    // checkExpirationTimeToken: {
    //     init: () => undefined,
    //     clear: () => {}
    // }
};
const TaskBoardContext = createContext(initTaskBoardContext);

export default TaskBoardContext;
