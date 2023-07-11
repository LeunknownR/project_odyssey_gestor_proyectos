import { useState, ReactNode } from "react";
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
import Preloader from "src/components/Preloader/Preloader";
import usePreloader from "src/components/Preloader/utils/hooks/usePreloader";

const ChatView = () => {
    const preloader = usePreloader();
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
    const onDispatchPrivateChatMessages = (refreshPreviewChatList: () => void): void => {
        socketIoChatService?.on(
            WSChatServiceEvents.Server.DispatchPrivateChatMessages,
            (formattedPrivateChatMessages: FormattedPrivateChatMessages) => {
                setFormattedProjectChatMessages(null);
                setFormattedPrivateChatMessages(formattedPrivateChatMessages);
                refreshPreviewChatList();
                preloader.hide();
            });
    };
    const onDispatchProjectChatMessages = (refreshPreviewChatList: () => void): void => {
        socketIoChatService?.on(
            WSChatServiceEvents.Server.DispatchProjectChatMessages,
            (formattedProjectChatMessages: FormattedProjectChatMessages) => {
                setFormattedPrivateChatMessages(null);
                setFormattedProjectChatMessages(formattedProjectChatMessages);
                refreshPreviewChatList();
                preloader.hide();
            });
    };
    const renderChatRoom = (): ReactNode => {
        if (currentPrivateChat && formattedPrivateChatMessages) 
            return <PrivateChatRoom formattedPrivateChatMessages={formattedPrivateChatMessages} />
        if (currentProjectChat && formattedProjectChatMessages)
            return <ProjectChatRoom formattedProjectChatMessages={formattedProjectChatMessages} />
        return <UnselectedChat />;
    };
    return (
        <>
        <SidebarMenu />
        <Container>
            <ChatViewContext.Provider
                value={{
                    preloader,
                    privateChatPreviewList,
                    projectChatPreviewList,
                    setPrivateChatPreviewList,
                    setProjectChatPreviewList,
                    currentPrivateChat,
                    currentProjectChat,
                    setCurrentPrivateChat,
                    setCurrentProjectChat,
                    setFormattedPrivateChatMessages,
                    setFormattedProjectChatMessages
                }}>
                <ChatPanel 
                    onDispatchPrivateChatMessages={onDispatchPrivateChatMessages}
                    onDispatchProjectChatMessages={onDispatchProjectChatMessages}/>
                {renderChatRoom()}
            </ChatViewContext.Provider>
        </Container>
        <Preloader {...preloader.value}/>
        </>
    );
};

export default ChatView;
