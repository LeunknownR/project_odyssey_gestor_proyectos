import { createContext } from "react";
import { ChatViewContextType } from "./types";

const INIT_CHAT_VIEW_CONTEXT: ChatViewContextType = {
    privateChatPreviewList: [],
    projectChatPreviewList: [],
    setPrivateChatPreviewList: () => {},
    setProjectChatPreviewList: () => {},
    dispatchPrivateMessages: () => {},
    dispatchProjectMessages: () => {},
};
const ChatViewContext = createContext(INIT_CHAT_VIEW_CONTEXT);

export default ChatViewContext;
