import { useState } from "react";
import { FormattedPrivateChatMessages } from "src/entities/chat/entities";
import useChatServiceContext from "src/routes/components/ChatService/utils/contexts/useChatServiceContext";
import WSChatServiceEvents from "src/services/websockets/services/chats/events";
import { PrivateChatMessagesHook, SearchChatPayloadHook } from "../types";
import { PreloaderHook } from "src/components/Preloader/types";

const usePrivateChatMessages = (
    preloader: PreloaderHook,
    searchChatPayloadHandler: SearchChatPayloadHook
): PrivateChatMessagesHook => {
    const { socketIoChatService } = useChatServiceContext();
    const [formattedMessages, setFormattedMessages] = useState<FormattedPrivateChatMessages | null>(null);
    const onDispatchMessages = (): void => {
        socketIoChatService?.on(
            WSChatServiceEvents.Server.DispatchPrivateChatMessages,
            (formattedPrivateChatMessages: FormattedPrivateChatMessages) => {
                setFormattedMessages(formattedPrivateChatMessages);
                searchChatPayloadHandler.emit();
                preloader.hide();
            });
    };
    const clearMessages = (): void => {
        setFormattedMessages(null);
    };
    return {
        formattedMessages,
        onDispatchMessages,
        clearMessages
    };
}

export default usePrivateChatMessages;