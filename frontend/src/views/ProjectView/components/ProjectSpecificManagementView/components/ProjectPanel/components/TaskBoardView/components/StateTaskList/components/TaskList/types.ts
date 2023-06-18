import { ProjectTask, ProjectTaskState } from "src/entities/projectTasks/entities";

export type TaskListProps = {
    taskList: ProjectTask[];
    state: ProjectTaskState;
};
