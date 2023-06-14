import { ProjectTask } from "src/entities/projectTasks/entities";

export type TaskListProps = {
    taskListInfo: ProjectTask[];
    openTaskMenu: (taskInfo: ProjectTask) => void;
    status: string;
};
