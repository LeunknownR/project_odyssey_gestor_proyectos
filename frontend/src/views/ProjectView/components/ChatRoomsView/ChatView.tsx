import { useState, ReactNode, useEffect } from "react";
import { Container } from "./styles";
import ChatPanel from "./components/ChatPanel/ChatPanel";
import SidebarMenu from "src/views/components/SidebarMenu/SidebarMenu";
import UnselectedChat from "./components/ChatRoom/components/NoChatSelected/UnselectedChat";
import {
    FormattedPrivateChatMessages,
    FormattedProjectChatMessages,
    PrivateChatPreview,
    ProjectChatPreview,
} from "src/entities/chat/entities";
import ChatViewContext from "./utils/context/ChatViewContext";
import PrivateChatRoom from "./components/PrivateChatRoom";
import WSChatServiceEvents from "src/services/websockets/services/chats/events";
import useChatServiceContext from "src/routes/components/ChatService/utils/contexts/useChatServiceContext";
import ProjectChatRoom from "./components/ProjectChatRoom";

const ChatView = () => {
    //#region States
    const [privateChatPreviewList, setPrivateChatPreviewList] = useState<
        PrivateChatPreview[]
    >([]);
    const [projectChatPreviewList, setProjectChatPreviewList] = useState<
        ProjectChatPreview[]
    >([]);
    const [currentPrivateChat, setCurrentPrivateChat] = useState<PrivateChatPreview | null>(null);
    const [currentProjectChat, setCurrentProjectChat] = useState<ProjectChatPreview | null>(null);
    const [formattedPrivateChatMessages, setFormattedPrivateChatMessages] =
        useState<FormattedPrivateChatMessages | null>(null);
    const [formattedProjectChatMessages, setFormattedProjectChatMessages] =
        useState<FormattedProjectChatMessages | null>(null);
    //#endregion
    const { socketIoChatService } = useChatServiceContext();
    const dispatchPrivateMessages = () => {
        socketIoChatService?.off(WSChatServiceEvents.Server.DispatchProjectChatMessages);
        socketIoChatService?.on(
            WSChatServiceEvents.Server.DispatchPrivateChatMessages,
            (formattedPrivateChatMessages: FormattedPrivateChatMessages) => {
                setFormattedPrivateChatMessages(formattedPrivateChatMessages);
            }
        );
        setFormattedProjectChatMessages(null);
    };
    const dispatchProjectMessages = () => {
        socketIoChatService?.off(WSChatServiceEvents.Server.DispatchPrivateChatMessages);
        socketIoChatService?.on(
            WSChatServiceEvents.Server.DispatchProjectChatMessages,
            (formattedProjectChatMessages: FormattedProjectChatMessages) => {
                setFormattedProjectChatMessages(formattedProjectChatMessages);
            }
        );
        setFormattedPrivateChatMessages(null);
    };
    //GNOMO refactorizar 👇
    const renderChatRoom = (): ReactNode => {
        if (formattedPrivateChatMessages) 
            return <PrivateChatRoom formattedPrivateChatMessages={formattedPrivateChatMessages} />
        if (formattedProjectChatMessages)
            return <ProjectChatRoom formattedProjectChatMessages={formattedProjectChatMessages} />
        return null;
    };
    return (
        <>
        <SidebarMenu />
        <Container>
            <ChatViewContext.Provider
                value={{
                    privateChatPreviewList,
                    projectChatPreviewList,
                    setPrivateChatPreviewList,
                    setProjectChatPreviewList,
                    currentPrivateChat,
                    currentProjectChat,
                    setCurrentPrivateChat,
                    setCurrentProjectChat,
                    setFormattedPrivateChatMessages,
                    setFormattedProjectChatMessages,
                    dispatchPrivateMessages,
                    dispatchProjectMessages,
                }}>
                <ChatPanel />
                {renderChatRoom() ? renderChatRoom() : <UnselectedChat />}
            </ChatViewContext.Provider>
        </Container>
        </>
    );
};

export default ChatView;
