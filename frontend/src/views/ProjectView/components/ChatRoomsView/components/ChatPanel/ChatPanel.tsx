import { useState, useEffect, ChangeEvent } from "react";
import WSChatTab from "src/services/websockets/services/chats/utils/enums";
import ChatFinder from "./components/ChatFinder/ChatFinder";
import ChatTabs from "./components/ChatTabs/ChatTabs";
import { Container } from "./styles";
import {
    PrivateChatPreview,
    ProjectChatPreview,
} from "src/entities/chat/entities";
import useChatServiceContext from "src/routes/components/ChatService/utils/contexts/useChatServiceContext";
import WSChatServiceEvents from "src/services/websockets/services/chats/events";
import PrivatePreviewChatList from "./components/PrivatePreviewChatList";
import { ChatListByTab } from "./types";
import ProjectPreviewChatList from "./components/ProjectPreviewChatList";
import useChatViewContext from "../../utils/context/useChatViewContext";

const ChatPanel = () => {
    //#region States
    const [timeoutToSearchChatId, setTimeoutToSearchChatId] = useState<NodeJS.Timeout | undefined>();
    //#endregion
    //#region Hooks
    const { 
        socketIoChatService
    } = useChatServiceContext();
    const {
        preloader, searchChatPayloadHandler,
        currentPrivateChat,
        currentProjectChat,
        setCurrentPrivateChat,
        setCurrentProjectChat,
        privateChatMessagesHandler,
        projectChatMessagesHandler,
        isMobileChatOpen
    } = useChatViewContext();
    const { 
        privateChatPreviewList, 
        projectChatPreviewList 
    } = searchChatPayloadHandler.chatPreviewGroup;
    //#endregion
    //#region Effects
    useEffect(() => {
        privateChatMessagesHandler.onDispatchMessages();
        projectChatMessagesHandler.onDispatchMessages();
        return () => {
            socketIoChatService?.off(WSChatServiceEvents.Server.DispatchPrivateChatMessages);
            socketIoChatService?.off(WSChatServiceEvents.Server.DispatchProjectChatMessages);
        };
    }, []);
    //#endregion
    const getPrivateChatMessages = (
        privateChatPreview: PrivateChatPreview
    ): void => {
        if (privateChatPreview.collaborator.id === currentPrivateChat?.collaborator.id) return;
        preloader.show(null);
        socketIoChatService?.emit(
            WSChatServiceEvents.Collaborator.GetPrivateChatMessages,
            privateChatPreview.collaborator.id
        );
        setCurrentPrivateChat(privateChatPreview);
        setCurrentProjectChat(null);
    };
    const getProjectChatMessages = (projectChatPreview: ProjectChatPreview): void => {
        if (projectChatPreview.project.id === currentProjectChat?.project.id) return;
        
        preloader.show(null);
        socketIoChatService?.emit(
            WSChatServiceEvents.Collaborator.GetProjectChatMessages,
            projectChatPreview.project.id
        );
        setCurrentProjectChat(projectChatPreview);
        setCurrentPrivateChat(null);
    };
    //#region Funciones relacionadas con el Buscador de chat
    const searchChat = ({
        target: { value },
    }: ChangeEvent<HTMLInputElement>): void => {
        searchChatPayloadHandler.change("searchedChat", value);
        clearTimeout(timeoutToSearchChatId);
        const newTimeoutToSearchChatId: NodeJS.Timeout = setTimeout(() => {
            searchChatPayloadHandler.emit({
                ...searchChatPayloadHandler.value, 
                searchedChat: value
            });
        }, 350);
        setTimeoutToSearchChatId(newTimeoutToSearchChatId);
    };
    const cleanSearchedChat = (): void => {
        searchChatPayloadHandler.change("searchedChat", "");
        searchChatPayloadHandler.emit({ 
            ...searchChatPayloadHandler.value, 
            searchedChat: "" 
        });
    };
    //#endregion
    const previewChatList: ChatListByTab = {
        [WSChatTab.Private]: (
            <PrivatePreviewChatList
                chatPreviewList={privateChatPreviewList}
                getChatMessages={getPrivateChatMessages}/>
        ),
        [WSChatTab.Project]: (
            <ProjectPreviewChatList
                chatPreviewList={projectChatPreviewList}
                getChatMessages={getProjectChatMessages}/>
        ),
    };
    const listenPrivateChatPreview = (): void => {
        searchChatPayloadHandler.change("chatTab", WSChatTab.Private);
    }
    const listenProjectChatPreview = (): void => {
        searchChatPayloadHandler.change("chatTab", WSChatTab.Project);
    }
    const { chatTab, searchedChat } = searchChatPayloadHandler.value;
    return (
        <Container direction="column" gap="25px">
            <ChatFinder 
                searchChat={searchChat} 
                searchedChat={searchedChat} 
                cleanSearchedChat={cleanSearchedChat}/>
            <ChatTabs
                showPrivateChatPreview={listenPrivateChatPreview}
                showProjectChatPreview={listenProjectChatPreview}
                currentTab={chatTab}/>
            {previewChatList[chatTab]}
        </Container>
    );
};

export default ChatPanel;
