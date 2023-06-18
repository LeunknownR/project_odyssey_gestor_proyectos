import { RefObject } from "react";
import { Socket } from "socket.io-client";
import { PreloaderHook } from "src/components/Preloader/types";
import { ProjectTask, ProjectTaskState } from "src/entities/projectTasks/entities";
import { WSProjectTaskWithNewState } from "src/services/websockets/services/projectTasks/utils/entities";

export type TaskToBeChangedState = WSProjectTaskWithNewState;
export type TaskToBeChanged = {
    value: TaskToBeChangedState | null;
    fill: (value: TaskToBeChangedState | null) => void;
};
export type TaskBoardContextType = {
    socketIo: Socket | null;
    projectId: number;
    isTaskMenuOpen: boolean;
    fillCurrentProjectTask: (task: ProjectTask, state: ProjectTaskState) => void;
    modifyMenuRef: RefObject<HTMLElement> | null;
    preloader: PreloaderHook;
    isTaskResponsible: boolean;
    taskToBeChanged: TaskToBeChanged;
};