import { PreloaderHook } from "src/components/Preloader/types";
import {
    PrivateChatPreview,
    ProjectChatPreview,
} from "src/entities/chat/entities";
import { PrivateChatMessagesHook, ProjectChatMessagesHook, SearchChatPayloadHook } from "../types";

export type ChatViewContextType = {
    preloader: PreloaderHook;
    searchChatPayloadHandler: SearchChatPayloadHook;
    currentPrivateChat: PrivateChatPreview | null;
    currentProjectChat: ProjectChatPreview | null;
    setCurrentPrivateChat: (previewChat: PrivateChatPreview | null) => void;
    setCurrentProjectChat: (previewChat: ProjectChatPreview | null) => void;
    privateChatMessagesHandler: PrivateChatMessagesHook;
    projectChatMessagesHandler: ProjectChatMessagesHook;
    isMobileChatOpen: boolean;
};