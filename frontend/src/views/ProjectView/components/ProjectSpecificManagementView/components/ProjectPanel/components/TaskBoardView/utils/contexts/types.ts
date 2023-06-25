import { RefObject } from "react";
import { Socket } from "socket.io-client";
import { PreloaderHook } from "src/components/Preloader/types";
import { DBProjectRoles } from "src/config/roles";
import { ProjectTask, ProjectTaskState } from "src/entities/projectTasks/entities";
import { WSProjectTaskWithNewState } from "src/services/websockets/services/projectTasks/utils/entities";

export type TaskToBeChangedState = WSProjectTaskWithNewState;
export type TaskToBeChangedStateHandler = {
    value: TaskToBeChangedState | null;
    fill: (value: TaskToBeChangedState | null) => void;
};
export type TaskBoardContextType = {
    socketIo: Socket | null;
    projectId: number;
    isEditTaskFormOpen: boolean;
    projectRoleId: DBProjectRoles;
    currentProjectTask: ProjectTask | null;
    fillCurrentProjectTask: (task: ProjectTask, state: ProjectTaskState) => void;
    hideEditTaskForm: () => void;
    currentProjectTaskState: ProjectTaskState | null;
    modifyMenuRef: RefObject<HTMLElement> | null;
    preloader: PreloaderHook;
    canEditTask: boolean;
    taskToBeChangedStateHandler: TaskToBeChangedStateHandler;
};