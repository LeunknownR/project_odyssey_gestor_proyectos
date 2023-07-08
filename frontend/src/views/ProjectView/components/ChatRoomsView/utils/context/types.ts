import {
    FormattedPrivateChatMessages,
    PrivateChatPreview,
    ProjectChatPreview,
} from "src/entities/chat/entities";

export type ChatViewContextType = {
    privateChatPreviewList: PrivateChatPreview[];
    projectChatPreviewList: ProjectChatPreview[];
    setPrivateChatPreviewList: (arg: PrivateChatPreview[]) => void;
    setProjectChatPreviewList: (arg: ProjectChatPreview[]) => void;
    dispatchPrivateMessages: () => void;
    dispatchProjectMessages: () => void;
};
