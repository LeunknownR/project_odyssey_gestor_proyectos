import { CollaboratorUser } from "../collaborator/entities";
import { RelationCollaboratorChat } from "./chatMessage/chatCollaboratorRelation";
import PrivateChatMessage from "./chatMessage/privateChatMessage";

export type PrivateChatPreviewCollaborator = Omit<CollaboratorUser, "email">;
export type ProjectChatPreviewProject = {
    id: number;
    name: string;
};
export type CollaboratorProjectChatMessage = {
    id: number;
    firstName: string;
};
export type FormattedPrivateChatMessages = {
    relationCollaboratorChatList: RelationCollaboratorChat[];
    messages: PrivateChatMessage[];
};