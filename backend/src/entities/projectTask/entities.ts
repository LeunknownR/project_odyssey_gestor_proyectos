import CollaboratorUserBase from "../collaborator/CollaboratorUserBase";

export enum ProjectTaskState {
    Pending = "P",
    OnProgress = "O",
    Finalized = "F"
}
export type ProjectTaskCollaboratorUser = Omit<CollaboratorUserBase, "email">;
export type ProjectSubtask = {
    id: number;
    name: string;
    checked: boolean;
};
export type ProjectCommentTask = {
    id: number;
    content: string;
    datetime: number;
    collaborator: ProjectTaskCollaboratorUser
}
export type ProjectTask = {
    id: number;
    name: string;
    description: string;
    responsible: ProjectTaskCollaboratorUser | null;
    priorityId: number | null;
    deadline: number;
    subtasks: ProjectSubtask[];
    comments: ProjectCommentTask[];
};
export type ProjectTaskBoard = {
    pending: ProjectTask[];
    onProgress: ProjectTask[];
    finalized: ProjectTask[];
    [projectTaskState: string]: ProjectTask[];
};