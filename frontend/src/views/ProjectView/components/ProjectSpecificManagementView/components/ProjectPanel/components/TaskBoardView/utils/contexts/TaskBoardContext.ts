import { createContext } from "react";
import { TaskBoardContextType } from "./types";
import { DBProjectRoles } from "src/config/roles";

const INIT_TASK_BOARD_CONTEXT: TaskBoardContextType = {
    socketIo: null,
    projectId: 0,
    isEditTaskFormOpen: false,
    projectRoleId: DBProjectRoles.ProjectMember,
    currentProjectTask: null,
    fillCurrentProjectTask: () => {},
    hideEditTaskForm: () => {},
    currentProjectTaskState: null,
    editTaskFormRef: null,
    preloader: {
        hide: () => {},
        show: () => {},
        value: {
            hidden: true,
            message: ""
        }
    },
    taskToBeChangedStateHandler: {
        value: null,
        fill: () => {}
    },
    canEditTask: false,
    getCanBeEditedTask: () => false
};
const TaskBoardContext = createContext(INIT_TASK_BOARD_CONTEXT);

export default TaskBoardContext;
