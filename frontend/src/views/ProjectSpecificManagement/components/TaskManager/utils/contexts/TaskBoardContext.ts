import { createContext } from "react";
import { InitTaskBoardContext } from "./types";

const initTaskBoardContext: InitTaskBoardContext = {
    socketIo: null,
    projectId: 0,
    // checkExpirationTimeToken: {
    //     init: () => undefined,
    //     clear: () => {}
    // }
};
const TaskBoardContext = createContext(initTaskBoardContext);

export default TaskBoardContext;
