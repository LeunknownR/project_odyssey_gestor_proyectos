import { PreloaderHook } from "src/components/Preloader/types";
import { 
    CurrentPrivateChatHandler, 
    CurrentProjectChatHandler, 
    PrivateChatMessagesHook, 
    ProjectChatMessagesHook, 
    SearchChatPayloadHook 
} from "../types";

export type ChatViewContextType = {
    preloader: PreloaderHook;
    searchChatPayloadHandler: SearchChatPayloadHook;
    currentPrivateChatHandler: CurrentPrivateChatHandler;
    currentProjectChatHandler: CurrentProjectChatHandler;
    privateChatMessagesHandler: PrivateChatMessagesHook;
    projectChatMessagesHandler: ProjectChatMessagesHook;
    isMobileChatOpen: boolean;
};