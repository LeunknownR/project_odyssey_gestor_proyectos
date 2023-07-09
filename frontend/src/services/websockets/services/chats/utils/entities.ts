import { ChatCollaboratorUser, LastMessage } from "src/entities/chat/entities";
import WSChatTab from "./enums";

export type WSSearchProjectChatPreviewPayload = {
    collaborator: ChatCollaboratorUser;
    lastMessage: LastMessage;
};
export type WSSearchChatPreviewPayload = {
    searchedChat: string;
    chatTab: WSChatTab;
}