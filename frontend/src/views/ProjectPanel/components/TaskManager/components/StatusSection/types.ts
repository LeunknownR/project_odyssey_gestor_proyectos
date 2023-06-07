import { CollaboratorUser } from "src/entities/collaborator/entities";
import { CommentTypes } from "../ModifyTaskMenu/components/CommentList/types";
import { SubtaskTypes } from "../ModifyTaskMenu/components/SubtaskList/types";

export type StatusSectionProps = {
    status: string;
    taskListInfo: TaskInfoTypes[];
}
export type TaskInfoTypes = {
    id: number;
    name: string;
    description: string | null;
    checked: boolean;
    responsible: Omit<CollaboratorUser, "email">;
    priorityId: number | null;
    deadline: number;
    subtasks: SubtaskTypes[];
    comments: CommentTypes[];
}