import { createContext } from "react";
import { ChatViewContextType } from "./types";

const INIT_CHAT_VIEW_CONTEXT: ChatViewContextType = {
    preloader: {
        hide: () => {},
        show: () => {},
        value: {
            hidden: true,
            message: ""
        }
    },
    privateChatPreviewList: [],
    projectChatPreviewList: [],
    setPrivateChatPreviewList: () => {},
    setProjectChatPreviewList: () => {},
    currentPrivateChat: null,
    currentProjectChat: null,
    setCurrentPrivateChat: () => {},
    setCurrentProjectChat: () => {},
    setFormattedPrivateChatMessages: () => {},
    setFormattedProjectChatMessages: () => {}
};
const ChatViewContext = createContext(INIT_CHAT_VIEW_CONTEXT);

export default ChatViewContext;
