import { ProjectTask } from "src/entities/projectTasks/entities";

export type TaskCardProps = {
    taskInfo: ProjectTask;
    openTaskMenu: (taskInfo: ProjectTask) => void;
}