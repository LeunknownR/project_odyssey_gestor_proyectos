import { useState } from "react";
import { FormattedProjectChatMessages } from "src/entities/chat/entities";
import WSChatServiceEvents from "src/services/websockets/services/chats/events";
import { ProjectChatMessagesHook, SearchChatPayloadHook } from "../types";
import useMasterRouterContext from "src/routes/utils/context/useMasterRouterContext";
import useMainContext from "src/utils/contexts/main-context/useMainContext";

const useProjectChatMessages = (
    searchChatPayloadHandler: SearchChatPayloadHook
): ProjectChatMessagesHook => {
    const { preloader } = useMainContext();
    const { socketIoChatService } = useMasterRouterContext().chatServiceHandler;
    const [formattedMessages, setFormattedProjectChatMessages] = useState<FormattedProjectChatMessages | null>(null);
    const onDispatchMessages = (): void => {
        socketIoChatService?.on(
            WSChatServiceEvents.Server.DispatchProjectChatMessages,
            (formattedProjectChatMessages: FormattedProjectChatMessages) => {
                setFormattedProjectChatMessages(formattedProjectChatMessages);
                searchChatPayloadHandler.emit();
                preloader.hide();
            });
    };
    const clearMessages = (): void => {
        setFormattedProjectChatMessages(null);
    };
    return {
        formattedMessages, clearMessages,
        onDispatchMessages
    };
}

export default useProjectChatMessages;