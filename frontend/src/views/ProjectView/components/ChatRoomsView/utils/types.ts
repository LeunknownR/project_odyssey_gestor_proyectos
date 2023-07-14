import { FormattedPrivateChatMessages, FormattedProjectChatMessages, PrivateChatPreview, ProjectChatPreview } from "src/entities/chat/entities";
import { SearchChatPayload } from "../components/ChatPanel/types";

export type FormChangeHandler<F> = <K extends keyof F>(field: K, value: F[K]) => void;
export type ChangeSearchChatPayload = FormChangeHandler<SearchChatPayload>;
export type ChatPreviewGroup = {
    privateChatPreviewList: PrivateChatPreview[];
    projectChatPreviewList: ProjectChatPreview[];
};
export type SearchChatPayloadHook = {
    value: SearchChatPayload;
    change: ChangeSearchChatPayload;
    emit: (payload?: SearchChatPayload) => void;
    chatPreviewGroup: ChatPreviewGroup;
};
export type PrivateChatMessagesHook = {
    formattedMessages: FormattedPrivateChatMessages | null;
    onDispatchMessages: () => void;
    clearMessages: () => void;
};
export type ProjectChatMessagesHook = {
    formattedMessages: FormattedProjectChatMessages | null;
    onDispatchMessages: () => void;
    clearMessages: () => void;
};