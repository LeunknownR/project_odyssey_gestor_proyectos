import { CollaboratorUser } from "../../../../entities/collaborator/types";
import { WSUserData } from "../../../utils/types";

export type WSUserDataProjectTaskService = WSUserData & {
    projectId: number;
};
export type WSCollaboratorUser = Omit<CollaboratorUser, "email">;
export type WSSubtask = {
    id: number;
    name: string;
    checked: boolean;
};
export type WSCommentTask = {
    id: number;
    content: string;
    datetime: number;
    collaborator: WSCollaboratorUser
}
export type WSTask = {
    id: number;
    name: string;
    description: string | null;
    checked: boolean;
    responsable: WSCollaboratorUser;
    priorityId: number | null;
    deadline: number;
    subtasks: WSSubtask[];
    comments: WSCommentTask[];
};
export type WSTaskListByState = {
    pending: WSTask[];
    onProgress: WSTask[];
    finalized: WSTask[];
};