import {
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
    setCurrentPrivateChat: (arg: PrivateChatPreview) => void;
    setCurrentProjectChat: (arg: ProjectChatPreview) => void;
    dispatchPrivateMessages: () => void;
    dispatchProjectMessages: () => void;
};
