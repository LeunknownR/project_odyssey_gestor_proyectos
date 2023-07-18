import { useState } from "react";
import { ProjectChatPreview } from "src/entities/chat/entities";
import { CurrentProjectChatHandler } from "../types";

const useCurrentProjectChat = (): CurrentProjectChatHandler => {
    const [currentChat, setCurrentChat] = useState<ProjectChatPreview | null>(null);
    const fillCurrentChat = (newCurrentChat: ProjectChatPreview) => {
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

export default useCurrentProjectChat;