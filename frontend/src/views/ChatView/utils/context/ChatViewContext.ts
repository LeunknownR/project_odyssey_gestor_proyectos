import { createContext } from "react";
import { ChatViewContextFormat } from "./types";
import { INIT_SEARCH_CHAT_PAYLOAD } from "../constants";

const INIT_CHAT_VIEW_CONTEXT: ChatViewContextFormat = {
    searchChatPayloadHandler: {
        change: () => {},
        emit: () => {},
        value: { ...INIT_SEARCH_CHAT_PAYLOAD },
        chatPreviewGroup: {
            privateChatPreviewList: [],
            projectChatPreviewList: []
        }
    },
    currentPrivateChatHandler: {
        clear: () => {},
        fill: () => {},
        value: {
            collaborator: {
                id: 0,
                name: "",
                surname: "",
                urlPhoto: null
            },
            lastMessage: null
        }
    },
    currentProjectChatHandler: {
        clear: () => {},
        fill: () => {},
        value: {
            project: {
                id: 0,
                name: ""
            },
            lastMessage: null
        }
    },
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
