import { useState } from "react";
import { FormattedPrivateChatMessages } from "src/entities/chat/entities";
import WSChatServiceEvents from "src/services/websockets/services/chats/events";
import { PrivateChatMessagesHook, SearchChatPayloadHook } from "../types";
import useMasterRouterContext from "src/routes/utils/context/useMasterRouterContext";
import useMainContext from "src/utils/contexts/main-context/useMainContext";

const usePrivateChatMessages = (
    searchChatPayloadHandler: SearchChatPayloadHook
): PrivateChatMessagesHook => {
    const { preloader } = useMainContext();
    const { socketIoChatService } = useMasterRouterContext().chatServiceHandler;
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