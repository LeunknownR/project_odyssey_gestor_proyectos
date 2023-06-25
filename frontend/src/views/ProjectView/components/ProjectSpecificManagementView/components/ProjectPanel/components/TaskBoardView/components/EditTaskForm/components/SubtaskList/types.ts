import { ProjectTask } from "src/entities/projectTasks/entities";

export type SubtaskListProps = {
    currentProjectTask: ProjectTask;
    scrollToMenuBottom: (floor: number | undefined) => void;
};
