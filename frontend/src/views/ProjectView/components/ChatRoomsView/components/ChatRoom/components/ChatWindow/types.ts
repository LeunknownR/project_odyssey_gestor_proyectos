import { ReactNode } from "react";
import { ChatCollaborators, ChatMessages } from "src/entities/chat/entities";

export type ChatWindowProps = {
    formattedMessages: ChatMessages[];
    additionalChatInfo: ReactNode;
    collaboratorInfo?: ChatCollaborators[];
};
