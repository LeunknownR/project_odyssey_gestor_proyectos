import { ProjectState } from "src/entities/project/enums";
import { ProjectTask } from "src/entities/projectTask/entities";

export type TaskCardProps = {
    taskInfo: ProjectTask;
    openTaskMenu: (taskInfo: ProjectTask, state: ProjectState) => void;
    state: ProjectState;
}
export type EmptyProps = {
    height: string;
};
export type ContainerProps = {
    top: string;
    left: string;
}