import { ProjectTask, ProjectTaskState } from "src/entities/projectTasks/entities";

export type TaskListProps = {
    taskList: ProjectTask[];
    state: ProjectTaskState;
    wasDraggingTaskCardRef: React.MutableRefObject<boolean>;
};