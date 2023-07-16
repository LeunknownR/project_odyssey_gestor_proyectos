import { createContext } from "react";
import { ChatViewContextType } from "./types";
import { INIT_SEARCH_CHAT_PAYLOAD } from "../constants";

const INIT_CHAT_VIEW_CONTEXT: ChatViewContextType = {
    preloader: {
        hide: () => {},
        show: () => {},
        value: {
            hidden: true,
            message: ""
        }
    },
    searchChatPayloadHandler: {
        change: () => {},
        emit: () => {},
        value: { ...INIT_SEARCH_CHAT_PAYLOAD },
        chatPreviewGroup: {
            privateChatPreviewList: [],
            projectChatPreviewList: []
        }
    },
    currentPrivateChat: null,
    currentProjectChat: null,
    setCurrentPrivateChat: () => {},
    setCurrentProjectChat: () => {},
    privateChatMessagesHandler: {
        clearMessages: () => {},
        onDispatchMessages: () => {},
        formattedMessages: null
    },
    projectChatMessagesHandler: {
        clearMessages: () => {},
        onDispatchMessages: () => {},
        formattedMessages: null
    },
    isMobileChatOpen: false,
};
const ChatViewContext = createContext(INIT_CHAT_VIEW_CONTEXT);

export default ChatViewContext;
