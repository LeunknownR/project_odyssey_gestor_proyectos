import { PreloaderHook } from "src/components/Preloader/types";
import {
    FormattedPrivateChatMessages,
    FormattedProjectChatMessages,
    PrivateChatPreview,
    ProjectChatPreview,
} from "src/entities/chat/entities";

export type ChatViewContextType = {
    preloader: PreloaderHook;
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
};
