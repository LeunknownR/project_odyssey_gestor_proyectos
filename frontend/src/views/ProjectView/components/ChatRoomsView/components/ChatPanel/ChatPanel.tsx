import { useState, useEffect, ChangeEvent, useRef } from "react";
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
import { ChatListByTab, ChatPanelProps, SearchChatPayload } from "./types";
import ProjectPreviewChatList from "./components/ProjectPreviewChatList";
import useChatViewContext from "../../utils/context/useChatViewContext";

const ChatPanel = ({
    onDispatchPrivateChatMessages,
    onDispatchProjectChatMessages
}: ChatPanelProps) => {
    //#region States
    const [chatTab, setChatTab] = useState<WSChatTab>(WSChatTab.Private);
    const [searchedChat, setSearchedChat] = useState("");
    const [timeoutToSearchChatId, setTimeoutToSearchChatId] = useState<NodeJS.Timeout | undefined>();
    //#endregion
    const searchedChatPayloadRef = useRef<SearchChatPayload>();
    //#region Hooks
    const { 
        socketIoChatService
    } = useChatServiceContext();
    const {
        preloader,
        privateChatPreviewList,
        projectChatPreviewList,
        currentPrivateChat,
        currentProjectChat,
        setCurrentPrivateChat,
        setCurrentProjectChat,
        setPrivateChatPreviewList,
        setProjectChatPreviewList
    } = useChatViewContext();
    //#endregion
    const privateChatCollaboratorIdRef = useRef<number>();
    const projectChatIdRef = useRef<number>();
    useEffect(() => {
        privateChatCollaboratorIdRef.current = currentPrivateChat?.collaborator.id;
    }, [currentPrivateChat]);
    useEffect(() => {
        projectChatIdRef.current = currentProjectChat?.project.id
    }, [currentProjectChat]);
    //#region Effects
    useEffect(() => {
        preloader.show(null);
        showPrivateChatPreview();
        onNotifySentMessage();
        onDispatchPrivateChatMessages(refreshPreviewChatList);
        onDispatchProjectChatMessages(refreshPreviewChatList);
        return () => {
            socketIoChatService?.off(WSChatServiceEvents.Server.DispatchPrivateChatMessages);
            socketIoChatService?.off(WSChatServiceEvents.Server.DispatchProjectChatMessages);
        };
    }, []);
    useEffect(() => {
        searchedChatPayloadRef.current = {
            chatTab, searchedChat
        };
    }, [chatTab, searchedChat]);
    useEffect(() => {
        socketIoChatService?.emit(WSChatServiceEvents.Collaborator.SearchChat, {
            searchedChat,
            chatTab
        });
    }, [chatTab]);
    //#endregion
    const onNotifySentMessage = (): void => {
        socketIoChatService?.on(WSChatServiceEvents.Server.NotifySentMessage, (chatTab: WSChatTab) => {
            switch (chatTab) {
                case WSChatTab.Private:
                    if (!privateChatCollaboratorIdRef.current) 
                        break;
                    socketIoChatService?.emit(
                        WSChatServiceEvents.Collaborator.GetPrivateChatMessages,
                        privateChatCollaboratorIdRef.current
                    );
                    return;
                case WSChatTab.Project:
                    if (!projectChatIdRef.current) 
                        break;
                    socketIoChatService?.emit(
                        WSChatServiceEvents.Collaborator.GetProjectChatMessages,
                        projectChatIdRef.current
                    );
                    return;
            }
            emitSearchChatEvent(searchedChatPayloadRef.current);
        });
    }
    const showPrivateChatPreview = (): void => {
        socketIoChatService?.off(
            WSChatServiceEvents.Server.DispatchProjectChatPreview
        );
        socketIoChatService?.on(
            WSChatServiceEvents.Server.DispatchPrivateChatPreview,
            handlerShowPrivateChatPreview
        );
        setChatTab(WSChatTab.Private);
    };
    const handlerShowPrivateChatPreview = (privateChatPreview: PrivateChatPreview[]): void => {
        setPrivateChatPreviewList(privateChatPreview);
        preloader.hide();
    };
    const showProjectChatPreview = (): void => {
        socketIoChatService?.off(
            WSChatServiceEvents.Server.DispatchPrivateChatPreview
        );
        socketIoChatService?.on(
            WSChatServiceEvents.Server.DispatchProjectChatPreview,
            handlerShowProjectChatPreview
        );
        setChatTab(WSChatTab.Project);
    };
    const handlerShowProjectChatPreview = (projectChatPreview: ProjectChatPreview[]): void => {
        setProjectChatPreviewList(projectChatPreview);
        preloader.hide();
    };
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
        setSearchedChat(value);
        clearTimeout(timeoutToSearchChatId);
        const newTimeoutToSearchChatId: NodeJS.Timeout = setTimeout(() => {
            emitSearchChatEvent({
                chatTab, searchedChat: value
            });
        }, 350);
        setTimeoutToSearchChatId(newTimeoutToSearchChatId);
    };
    const emitSearchChatEvent = (payload?: SearchChatPayload): void => {
        if (!payload) return;
        preloader.show(null);
        socketIoChatService?.emit(
            WSChatServiceEvents.Collaborator.SearchChat,
            payload
        );
    }
    const refreshPreviewChatList = (): void => {
        emitSearchChatEvent(searchedChatPayloadRef.current);
    }
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
    return (
        <Container direction="column" gap="25px">
            <ChatFinder searchChat={searchChat} searchedChat={searchedChat} />
            <ChatTabs
                showPrivateChatPreview={showPrivateChatPreview}
                showProjectChatPreview={showProjectChatPreview}
                currentTab={chatTab}
            />
            {previewChatList[chatTab]}
        </Container>
    );
};

export default ChatPanel;
