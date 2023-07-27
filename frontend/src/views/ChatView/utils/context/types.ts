import { 
    CurrentPrivateChatHandler, 
    CurrentProjectChatHandler, 
    PrivateChatMessagesHook, 
    ProjectChatMessagesHook, 
    SearchChatPayloadHook 
} from "../types";

export type ChatViewContextFormat = {
    searchChatPayloadHandler: SearchChatPayloadHook;
    currentPrivateChatHandler: CurrentPrivateChatHandler;
    currentProjectChatHandler: CurrentProjectChatHandler;
    privateChatMessagesHandler: PrivateChatMessagesHook;
    projectChatMessagesHandler: ProjectChatMessagesHook;
    isMobileChatOpen: boolean;
};