import { CollaboratorUser } from "../collaborator/entities";

export type PrivateChatPreviewCollaborator = Omit<CollaboratorUser, "email">;
export type ProjectChatPreviewProject = {
    id: number;
    name: string;
};