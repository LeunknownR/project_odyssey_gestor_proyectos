import WSChatTab from "src/services/websockets/services/chats/utils/enums";
import { SearchChatPayload } from "../components/ChatPanel/types";

export const INIT_SEARCH_CHAT_PAYLOAD: SearchChatPayload = {
    chatTab: WSChatTab.Private,
    searchedChat: ""
};