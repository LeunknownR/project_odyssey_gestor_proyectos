import { useState } from "react";
import { PrivateChatPreview } from "src/entities/chat/entities";
import { CurrentPrivateChatHandler } from "../types";

const useCurrentPrivateChat = (): CurrentPrivateChatHandler => {
    const [currentChat, setCurrentChat] = useState<PrivateChatPreview | null>(null);
    const fillCurrentChat = (newCurrentChat: PrivateChatPreview) => {
        setCurrentChat(newCurrentChat);
    }
    const clearCurrentChat = (): void => {
        setCurrentChat(null);
    }
    return {
        value: currentChat,
        fill: fillCurrentChat,
        clear: clearCurrentChat
    };
}

export default useCurrentPrivateChat;