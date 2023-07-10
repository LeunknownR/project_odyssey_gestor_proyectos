import {
    FormattedPrivateChatMessages,
    FormattedProjectChatMessages,
    PrivateChatPreview,
    ProjectChatPreview,
} from "src/entities/chat/entities";

export type ChatViewContextType = {
    privateChatPreviewList: PrivateChatPreview[];
    projectChatPreviewList: ProjectChatPreview[];
    setPrivateChatPreviewList: (arg: PrivateChatPreview[]) => void;
    setProjectChatPreviewList: (arg: ProjectChatPreview[]) => void;
    currentPrivateChat: PrivateChatPreview | null;
    currentProjectChat: ProjectChatPreview | null;
    setCurrentPrivateChat: (arg: PrivateChatPreview | null) => void;
    setCurrentProjectChat: (arg: ProjectChatPreview | null) => void;
    setFormattedPrivateChatMessages: (arg: FormattedPrivateChatMessages | null) => void;
    setFormattedProjectChatMessages: (arg: FormattedProjectChatMessages | null) => void;
    dispatchPrivateMessages: () => void;
    dispatchProjectMessages: () => void;
};
