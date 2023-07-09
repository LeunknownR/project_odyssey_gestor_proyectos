import { createContext } from "react";
import { ChatServiceContextType } from "./types";

const INIT_CHAT_SERVICE_CONTEXT: ChatServiceContextType = {
    socketIoChatService: null,
    hasUnreadPrivateChats: false,
    hasUnreadProjectChats: false,
};
const ChatServiceContext = createContext(INIT_CHAT_SERVICE_CONTEXT);

export default ChatServiceContext;
