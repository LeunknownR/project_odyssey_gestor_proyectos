import CollaboratorUserBase from "../collaborator/CollaboratorUserBase";

export enum ProjectTaskState {
    Pending = "P",
    OnProgress = "O",
    Finalized = "F"
}
export type ProjectTaskCollaboratorUser = Omit<CollaboratorUserBase, "email">;
export type ProjectTaskResponsible = ProjectTaskCollaboratorUser & {
    active: boolean;
};