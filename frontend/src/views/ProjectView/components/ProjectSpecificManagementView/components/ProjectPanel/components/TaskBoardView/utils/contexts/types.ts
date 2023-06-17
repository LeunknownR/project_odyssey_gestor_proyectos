import { RefObject } from "react";
import { Socket } from "socket.io-client";
import { PreloaderHook } from "src/components/Preloader/types";
import { ProjectTask, ProjectTaskState } from "src/entities/projectTasks/entities";
import { WSProjectTaskToBeChangedState } from "src/services/websockets/services/projectTasks/utils/entities";

export type TaskBoardToBeChanged = {
    value: WSProjectTaskToBeChangedState | null;
    fill: (value: WSProjectTaskToBeChangedState) => void;
};
export type TaskBoardContextType = {
    socketIo: Socket | null;
    projectId: number;
    isTaskMenuOpen: boolean;
    fillCurrentProjectTask: (task: ProjectTask, state: ProjectTaskState) => void;
    modifyMenuRef: RefObject<HTMLElement> | null;
    preloader: PreloaderHook;
    isTaskResponsible: boolean;
    taskBoardToBeChanged: TaskBoardToBeChanged;
};