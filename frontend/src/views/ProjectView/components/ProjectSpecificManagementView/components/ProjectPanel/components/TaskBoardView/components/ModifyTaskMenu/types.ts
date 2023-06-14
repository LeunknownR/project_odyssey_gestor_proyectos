import { ProjectTask } from "src/entities/projectTasks/entities";

export type ModifyTaskMenuProps = {
    currentProjectTask: ProjectTask | null;
    isTaskMenuOpen: boolean;
    openTaskMenu: (e: React.FocusEvent<HTMLDivElement>) => void;
    closeTaskMenu: (e: React.FocusEvent<HTMLDivElement>) => void;
}
export type ProjectTaskForm = {
    id?: number;
    responsibleId?: number | null;
    name: string;
    description: string | null;
    deadline: number;
    priorityId: number | null;
    [key: string]: any;
}