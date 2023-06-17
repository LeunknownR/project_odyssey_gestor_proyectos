import { ProjectTask, ProjectTaskState } from "src/entities/projectTasks/entities";

export type TaskListProps = {
    taskListInfo: ProjectTask[];
    state: ProjectTaskState;
};
