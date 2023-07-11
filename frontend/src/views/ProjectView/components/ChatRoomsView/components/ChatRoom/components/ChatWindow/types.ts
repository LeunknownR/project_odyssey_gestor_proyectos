import { ReactNode } from "react";
import { ChatCollaborators, ChatMessages } from "src/entities/chat/entities";

export type ChatWindowProps = {
    messages: ChatMessages[];
    additionalChatInfo: ReactNode;
    collaboratorInfo?: ChatCollaborators[];
};
