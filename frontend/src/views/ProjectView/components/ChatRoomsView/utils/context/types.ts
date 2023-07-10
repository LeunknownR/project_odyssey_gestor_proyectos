import {
    FormattedPrivateChatMessages,
    FormattedProjectChatMessages,
    PrivateChatPreview,
    ProjectChatPreview,
} from "src/entities/chat/entities";

export type ChatViewContextType = {
    privateChatPreviewList: PrivateChatPreview[];
    projectChatPreviewList: ProjectChatPreview[];
    setPrivateChatPreviewList: (previewChatList: PrivateChatPreview[]) => void;
    setProjectChatPreviewList: (previewChatList: ProjectChatPreview[]) => void;
    currentPrivateChat: PrivateChatPreview | null;
    currentProjectChat: ProjectChatPreview | null;
    setCurrentPrivateChat: (previewChat: PrivateChatPreview | null) => void;
    setCurrentProjectChat: (previewChat: ProjectChatPreview | null) => void;
    setFormattedPrivateChatMessages: (messages: FormattedPrivateChatMessages | null) => void;
    setFormattedProjectChatMessages: (messages: FormattedProjectChatMessages | null) => void;
    onDispatchPrivateChatMessages: (refreshPreviewChatList: () => void) => void;
    onDispatchProjectChatMessages: (refreshPreviewChatList: () => void) => void;
};
