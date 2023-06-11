import { ProjectTask } from "src/entities/projectTasks/entities";

export type ModifyTaskMenuProps = {
    currentProjectTask: ProjectTask | null;
    isTaskMenuOpen: boolean;
    closeTaskMenu: () => void;
}