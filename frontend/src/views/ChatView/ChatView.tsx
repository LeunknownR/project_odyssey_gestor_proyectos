import { useState, ReactNode, useEffect } from "react";
import { ChatRoomWrapper, Container } from "./styles";
import ChatPanel from "./components/ChatPanel/ChatPanel";
import UnselectedChat from "./components/ChatRoom/components/UnselectedChat/UnselectedChat";
import ChatViewContext from "./utils/context/ChatViewContext";
import PrivateChatRoom from "./components/PrivateChatRoom";
import ProjectChatRoom from "./components/ProjectChatRoom";
import useSearchChatPayload from "./utils/hooks/useSearchChatPayload";
import useProjectChatMessages from "./utils/hooks/useProjectChatMessages";
import usePrivateChatMessages from "./utils/hooks/usePrivateChatMessages";
import useCurrentPrivateChat from "./utils/hooks/useCurrentPrivateChat";
import useCurrentProjectChat from "./utils/hooks/useCurrentProjectChat";
import useMasterRouterContext from "src/routes/utils/context/useMasterRouterContext";
import WSChatServiceEvents from "src/services/websockets/services/chats/events";

const View = () => {
    //#region States
    const [isMobileChatOpen, setMobileIsChatOpen] = useState(false);
    const [isOnlineCollaboratorChat, setIsOnlineCollaboratorChat] = useState(false);
    //#endregion
    const currentPrivateChatHandler = useCurrentPrivateChat();
    const currentProjectChatHandler = useCurrentProjectChat();
    const { chatServiceHandler } = useMasterRouterContext();
    const searchChatPayloadHandler = useSearchChatPayload(
        currentPrivateChatHandler.value,
        currentProjectChatHandler.value
    );
    const privateChatMessagesHandler = usePrivateChatMessages(
        searchChatPayloadHandler
    );
    const projectChatMessagesHandler = useProjectChatMessages(
        searchChatPayloadHandler
    );
    useEffect(() => {
        setMobileIsChatOpen(Boolean(currentPrivateChatHandler.value || currentProjectChatHandler.value))
    }, [currentPrivateChatHandler.value, currentProjectChatHandler.value]);
    const onNotifyCollaboratorConnectionState = (): void => {
        chatServiceHandler.socketIoChatService?.off(WSChatServiceEvents.Server.NotifyCollaboratorOnlineState);
        chatServiceHandler.socketIoChatService?.on(
            WSChatServiceEvents.Server.NotifyCollaboratorOnlineState,
            (isOnline: boolean) => setIsOnlineCollaboratorChat(isOnline)
        );
    }
    const renderChatRoom = (): ReactNode => {
        if (currentPrivateChatHandler.value && privateChatMessagesHandler.formattedMessages) 
            return <PrivateChatRoom isOnlineCollaboratorChat={isOnlineCollaboratorChat}/>;
        if (currentProjectChatHandler.value && projectChatMessagesHandler.formattedMessages)
            return <ProjectChatRoom/>;
        return <UnselectedChat />;
    };
    //#endregion
    return (
        <Container>
            <ChatViewContext.Provider
                value={{
                    searchChatPayloadHandler,
                    currentPrivateChatHandler,
                    currentProjectChatHandler,
                    projectChatMessagesHandler,
                    privateChatMessagesHandler,
                    isMobileChatOpen
                }}>
                <ChatPanel onNotifyCollaboratorConnectionState={onNotifyCollaboratorConnectionState}/>
                <ChatRoomWrapper className={isMobileChatOpen ? "open" : ""}>
                    {renderChatRoom()}
                </ChatRoomWrapper>
            </ChatViewContext.Provider>
        </Container>
    );
}
const ChatView = () => {
    const { chatServiceHandler } = useMasterRouterContext();
    if (!chatServiceHandler.socketIoChatService) return null;
    return (
        <View/>
    );
};

export default ChatView;
