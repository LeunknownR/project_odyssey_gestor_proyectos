import { ProjectTask, ProjectTaskState } from "src/entities/projectTasks/entities";
import { DraggingTaskCardHook } from "./utils/hooks/types";

export type TaskCardProps = {
    task: ProjectTask;
    state: ProjectTaskState;
    confirmWasDraggingTaskCard: () => void;
};
export type ShadowProps = {
    height?: number;
};
export type ContainerProps = {
    top?: number;
    left?: number;
    width?: number;
};
export type TaskCardContentProps = TaskCardProps & {
    draggingTaskCard: DraggingTaskCardHook;
    canEditing: boolean;
};