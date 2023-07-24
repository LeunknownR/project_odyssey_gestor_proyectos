import { ProjectTask, ProjectTaskState } from "src/entities/projectTask/entities";

export type TaskListProps = {
    taskList: ProjectTask[];
    state: ProjectTaskState;
    wasDraggingTaskCardRef: React.MutableRefObject<boolean>;
};