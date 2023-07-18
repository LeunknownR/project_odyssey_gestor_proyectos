import { CurrentPrivateChatHandler, PrivateChatMessagesHook } from "../../utils/types";

export type PrivateChatRoomProps = {
    currentChatHandler: CurrentPrivateChatHandler;
    chatMessagesHandler: PrivateChatMessagesHook;
};
