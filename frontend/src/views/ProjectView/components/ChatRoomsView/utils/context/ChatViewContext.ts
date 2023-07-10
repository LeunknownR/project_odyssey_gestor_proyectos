import { createContext } from "react";
import { ChatViewContextType } from "./types";

const INIT_CHAT_VIEW_CONTEXT: ChatViewContextType = {
    privateChatPreviewList: [],
    projectChatPreviewList: [],
    setPrivateChatPreviewList: () => {},
    setProjectChatPreviewList: () => {},
    currentPrivateChat: null,
    currentProjectChat: null,
    setCurrentPrivateChat: () => {},
    setCurrentProjectChat: () => {},
    setFormattedPrivateChatMessages: () => {},
    setFormattedProjectChatMessages: () => {},
    onDispatchPrivateChatMessages: () => {},
    onDispatchProjectChatMessages: () => {},
};
const ChatViewContext = createContext(INIT_CHAT_VIEW_CONTEXT);

export default ChatViewContext;
