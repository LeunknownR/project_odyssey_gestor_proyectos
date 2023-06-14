import { ProjectTask } from "src/entities/projectTasks/entities";

export type StatusSectionProps = {
    sectionName: string;
    status: string;
    taskListInfo: ProjectTask[];
    openTaskMenu: (taskInfo: ProjectTask) => void;
};
