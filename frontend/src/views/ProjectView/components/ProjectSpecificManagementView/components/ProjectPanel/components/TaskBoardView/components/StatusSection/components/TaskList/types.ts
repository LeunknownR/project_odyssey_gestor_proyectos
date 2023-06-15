import { ProjectState } from "src/entities/project/enums";
import { ProjectTask } from "src/entities/projectTasks/entities";

export type TaskListProps = {
    taskListInfo: ProjectTask[];
    openTaskMenu: (taskInfo: ProjectTask) => void;
    state: ProjectState;
};