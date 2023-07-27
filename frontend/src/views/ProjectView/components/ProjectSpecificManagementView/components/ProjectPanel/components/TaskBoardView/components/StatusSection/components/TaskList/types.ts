import { ProjectState } from "src/entities/project/enums";
import { ProjectTask } from "src/entities/projectTask/entities";

export type TaskListProps = {
    taskListInfo: ProjectTask[];
    openTaskMenu: (taskInfo: ProjectTask, state: ProjectState) => void;
    state: ProjectState;
};
