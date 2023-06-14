import { ProjectTask, ProjectTaskState } from "src/entities/projectTasks/entities";

export type ProjectTaskStateSectionProps = {
    sectionName: string;
    status: string;
    taskListInfo: ProjectTask[];
    openTaskMenu: (taskInfo: ProjectTask) => void;
    changeProjectTaskState: (taskId: number, taskState: ProjectTaskState) => void;
};
