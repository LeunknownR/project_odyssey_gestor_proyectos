import { ProjectTask } from "src/entities/projectTask/entities";

export type SubtaskListProps = {
    currentProjectTask: ProjectTask;
    scrollToMenuBottom: (floor: number | undefined) => void;
};
