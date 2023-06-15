import { ProjectState } from "src/entities/project/enums";
import { ProjectTask } from "src/entities/projectTasks/entities";

export type StatusSectionProps = {
    sectionName: string;
    state: ProjectState;
    taskListInfo: ProjectTask[];
    openTaskMenu: (taskInfo: ProjectTask) => void;
};
