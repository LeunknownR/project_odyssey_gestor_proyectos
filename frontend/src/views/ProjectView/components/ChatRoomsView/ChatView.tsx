import { useState, ReactNode } from "react";
import { Container } from "./styles";
import ChatPanel from "./components/ChatPanel/ChatPanel";
import SidebarMenu from "src/views/components/SidebarMenu/SidebarMenu";
import UnselectedChat from "./components/ChatRoom/components/NoChatSelected/UnselectedChat";
import {
    PrivateChatPreview,
    ProjectChatPreview,
} from "src/entities/chat/entities";
import ChatViewContext from "./utils/context/ChatViewContext";
import PrivateChatRoom from "./components/PrivateChatRoom";
import ProjectChatRoom from "./components/ProjectChatRoom";
import Preloader from "src/components/Preloader/Preloader";
import usePreloader from "src/components/Preloader/utils/hooks/usePreloader";
import useSearchChatPayload from "./utils/hooks/useSearchChatPayload";
import useProjectChatMessages from "./utils/hooks/useProjectChatMessages";
import usePrivateChatMessages from "./utils/hooks/usePrivateChatMessages";

const ChatView = () => {
    const preloader = usePreloader();
    //#region States
    const [currentPrivateChat, setCurrentPrivateChat] = useState<PrivateChatPreview | null>(null);
    const [currentProjectChat, setCurrentProjectChat] = useState<ProjectChatPreview | null>(null);
    const searchChatPayloadHandler = useSearchChatPayload(
        preloader, currentPrivateChat,
        currentProjectChat
    );
    const privateChatMessagesHandler = usePrivateChatMessages(
        preloader, searchChatPayloadHandler
    );
    const projectChatMessagesHandler = useProjectChatMessages(
        preloader, searchChatPayloadHandler
    );
    const renderChatRoom = (): ReactNode => {
        if (currentPrivateChat && privateChatMessagesHandler.formattedMessages) 
            return <PrivateChatRoom formattedMessages={privateChatMessagesHandler.formattedMessages} />
        if (currentProjectChat && projectChatMessagesHandler.formattedMessages)
            return <ProjectChatRoom formattedMessages={projectChatMessagesHandler.formattedMessages} />
        return <UnselectedChat />;
    };
    //#endregion
    return (
        <>
        <SidebarMenu />
        <Container>
            <ChatViewContext.Provider
                value={{
                    preloader, searchChatPayloadHandler,
                    currentPrivateChat,
                    currentProjectChat,
                    setCurrentPrivateChat,
                    setCurrentProjectChat,
                    projectChatMessagesHandler,
                    privateChatMessagesHandler
                }}>
                <ChatPanel/>
                {renderChatRoom()}
            </ChatViewContext.Provider>
        </Container>
        <Preloader {...preloader.value}/>
        </>
    );
};

export default ChatView;
