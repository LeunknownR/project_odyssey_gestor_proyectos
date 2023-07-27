import { ProjectState } from "src/entities/project/enums";
import { ProjectTask, ProjectTaskBoard } from "src/entities/projectTask/entities";

export type BoardProps = {
    projectTaskBoard: ProjectTaskBoard;
    openTaskMenu: (taskInfo: ProjectTask, state: ProjectState) => void
}