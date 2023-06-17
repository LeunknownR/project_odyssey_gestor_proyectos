import { ProjectState } from "src/entities/project/enums";
import { ProjectTask } from "src/entities/projectTasks/entities";

export type TaskCardProps = {
    taskInfo: ProjectTask;
    openTaskMenu: (taskInfo: ProjectTask, state: ProjectState) => void;
    state: ProjectState;
};
export type ShadowProps = {
    height?: number;
};
export type ContainerProps = {
    top?: number;
    left?: number;
    width?: number;
}