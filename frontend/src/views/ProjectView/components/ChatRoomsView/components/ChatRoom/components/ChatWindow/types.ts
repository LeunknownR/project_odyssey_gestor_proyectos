import { ReactNode } from "react";
import { ChatMessages } from "src/entities/chat/entities"

export type ChatWindowProps = {
    formattedMessages: ChatMessages[];
    additionalChatInfo: ReactNode;
}