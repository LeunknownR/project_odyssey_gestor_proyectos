import { CommentTypes } from "../ModifyTaskMenu/components/CommentList/types";
import { SubtaskTypes } from "../ModifyTaskMenu/components/SubtaskList/types";
import { ProjectTaskCollaboratorUser } from "src/entities/projectTasks/entities";

export type StatusSectionProps = {
    status: string;
    taskListInfo: TaskInfoTypes[];
}
export type TaskInfoTypes = {
    id: number;
    name: string;
    description: string | null;
    checked: boolean;
    responsible: ProjectTaskCollaboratorUser;
    priorityId: number | null;
    deadline: number;
    subtasks: SubtaskTypes[];
    comments: CommentTypes[];
}