import { ReactNode } from "react";
import WSChatTab from "src/services/websockets/services/chats/utils/enums";

export type ChatListByTab = Record<WSChatTab, ReactNode>;
