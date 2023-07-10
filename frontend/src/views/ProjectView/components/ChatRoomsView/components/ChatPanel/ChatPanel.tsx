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
import { ChatListByTab, SearchChatPayload } from "./types";
import ProjectPreviewChatList from "./components/ProjectPreviewChatList";
import useChatViewContext from "../../utils/context/useChatViewContext";

const ChatPanel = () => {
    //#region States
    const [chatTab, setChatTab] = useState<WSChatTab>(WSChatTab.Private);
    const [searchedChat, setSearchedChat] = useState("");
    const [timeoutToSearchChatId, setTimeoutToSearchChatId] = useState<
        NodeJS.Timeout | undefined
    >();
    const searchedChatRef = useRef<SearchChatPayload>();
    //#endregion
    //#region Hooks
    const { socketIoChatService } = useChatServiceContext();
    const {
        privateChatPreviewList,
        projectChatPreviewList,
        setPrivateChatPreviewList,
        setProjectChatPreviewList
    } = useChatViewContext();
    //#endregion
    //#region Effects
    useEffect(() => {
        searchedChatRef.current = {
            chatTab, searchedChat
        };
    }, [chatTab, searchedChat]);
    useEffect(() => {
        showPrivateChatPreview();
        socketIoChatService?.on(WSChatServiceEvents.Server.NotifySentMessage, () => {
            if (!searchedChatRef.current)
                return;
            emitSearchChatEvent(searchedChatRef.current);
        });
    }, []);
    useEffect(() => {
        socketIoChatService?.emit(WSChatServiceEvents.Collaborator.SearchChat, {
            searchedChat,
            chatTab,
        });
    }, [chatTab]);
    //#endregion
    const showPrivateChatPreview = () => {
        socketIoChatService?.off(
            WSChatServiceEvents.Server.DispatchProjectChatPreview
        );
        socketIoChatService?.on(
            WSChatServiceEvents.Server.DispatchPrivateChatPreview,
            handlerShowPrivateChatPreview
        );
        setChatTab(WSChatTab.Private);
    };
    const handlerShowPrivateChatPreview = (
        privateChatPreview: PrivateChatPreview[]
    ) => {
        setPrivateChatPreviewList(privateChatPreview);
    };
    const showProjectChatPreview = () => {
        socketIoChatService?.off(
            WSChatServiceEvents.Server.DispatchPrivateChatPreview
        );
        socketIoChatService?.on(
            WSChatServiceEvents.Server.DispatchProjectChatPreview,
            handlerShowProjectChatPreview
        );
        setChatTab(WSChatTab.Project);
    };
    const handlerShowProjectChatPreview = (
        projectChatPreview: ProjectChatPreview[]
    ) => {
        setProjectChatPreviewList(projectChatPreview);
    };
    //#region Funciones relacionadas con el Buscador de chat
    const searchChat = ({
        target: { value },
    }: ChangeEvent<HTMLInputElement>) => {
        setSearchedChat(value);
        clearTimeout(timeoutToSearchChatId);
        const newTimeoutToSearchChatId: NodeJS.Timeout = setTimeout(() => {
            emitSearchChatEvent({
                chatTab, searchedChat
            });
        }, 350);
        setTimeoutToSearchChatId(newTimeoutToSearchChatId);
    };
    const emitSearchChatEvent = (payload: SearchChatPayload): void => {
        socketIoChatService?.emit(
            WSChatServiceEvents.Collaborator.SearchChat,
            payload
        );
        // searchedChatRef
    }
    //#endregion
    const previewChatList: ChatListByTab = {
        [WSChatTab.Private]: (
            <PrivatePreviewChatList
                privateChatPreviewList={privateChatPreviewList}
            />
        ),
        [WSChatTab.Project]: (
            <ProjectPreviewChatList
                projectChatPreviewList={projectChatPreviewList}
            />
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
