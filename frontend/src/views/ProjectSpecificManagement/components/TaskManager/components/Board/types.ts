import { ProjectTask, ProjectTaskBoard } from "src/entities/projectTasks/entities"

export type BoardProps = {
    projectTaskBoard: ProjectTaskBoard;
    openTaskMenu: (taskInfo: ProjectTask) => void
}