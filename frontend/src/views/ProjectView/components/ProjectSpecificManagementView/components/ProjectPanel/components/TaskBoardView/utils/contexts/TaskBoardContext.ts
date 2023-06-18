import { createContext } from "react";
import { TaskBoardContextType } from "./types";

const INIT_TASK_BOARD_CONTEXT: TaskBoardContextType = {
    socketIo: null,
    projectId: 0,
    isTaskMenuOpen: false,
    fillCurrentProjectTask: () => {},
    modifyMenuRef: null,
    preloader: {
        hide: () => {},
        show: () => {},
        value: {
            hidden: true,
            message: ""
        }
    },
    taskToBeChanged: {
        value: null,
        fill: () => {}
    },
    isTaskResponsible: false,
    // checkExpirationTimeToken: {
    //     init: () => undefined,
    //     clear: () => {}
    // }
};
const TaskBoardContext = createContext(INIT_TASK_BOARD_CONTEXT);

export default TaskBoardContext;
