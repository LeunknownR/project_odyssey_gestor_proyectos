import { DBProjectRoles } from "src/config/roles";
import { CollaboratorUser } from "../collaborator/entities";

type ProjectChat = {
    id: number;
    name: string;
};
export type LastMessage = {
    datetime: number;
    message: string;
    senderId: number;
    seen: boolean;
};
export type ProjectLastMessage = LastMessage & {
    senderFirstName: string;
}
export type ChatCollaboratorUser = Omit<CollaboratorUser, "email">;
export type PrivateChatPreview = {
    collaborator: ChatCollaboratorUser;
    lastMessage: LastMessage | null;
};
export type ProjectChatPreview = {
    project: ProjectChat;
    lastMessage: ProjectLastMessage | null;
};
export type FormattedPrivateChatMessages = {
    collaboratorRelationList: CollaboratorRelationList[];
    messages: ChatMessages[];
};
export type FormattedProjectChatMessages = {
    collaborators: ChatCollaborators[];
    messages: ChatMessages[];
}
export type CollaboratorRelationList = {
    role: DBProjectRoles;
    projectName: string;
};
export type ChatCollaborators = {
    id: number;
    firstName: string;
}
export type ChatMessages = {
    id: number;
    collaboratorId: number;
    message: string;
    datetime: number;
};
