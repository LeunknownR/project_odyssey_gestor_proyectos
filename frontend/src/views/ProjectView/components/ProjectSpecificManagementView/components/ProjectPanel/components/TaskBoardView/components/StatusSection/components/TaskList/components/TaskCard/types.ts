import { ProjectState } from "src/entities/project/enums";
import { ProjectTask } from "src/entities/projectTasks/entities";
import { DraggingTaskCardHook } from "./utils/hooks/types";

export type TaskCardProps = {
    taskInfo: ProjectTask;
    openTaskMenu: (taskInfo: ProjectTask, state: ProjectState) => void;
    state: ProjectState;
};
export type TaskCardContentProps = TaskCardProps & {
    draggingTaskCard: DraggingTaskCardHook;
};
export type ShadowProps = {
    height?: number;
};
export type ContainerProps = {
    top?: number;
    left?: number;
    width?: number;
}