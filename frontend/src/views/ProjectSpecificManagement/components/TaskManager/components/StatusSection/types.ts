import { ProjectTask } from "src/entities/projectTasks/entities";

export type StatusSectionProps = {
    status: string;
    taskListInfo: ProjectTask[];
    openTaskMenu: (taskInfo: ProjectTask) => void;
};
