import { ProjectTask, ProjectTaskState } from "src/entities/projectTask/entities";
import { DraggingTaskCardHook } from "./utils/hooks/types";
import { MutableRefObject } from "react";

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
    containerRef: MutableRefObject<HTMLLIElement | null>;
    draggingTaskCard: DraggingTaskCardHook;
    canEditCurrentTask: boolean;
};