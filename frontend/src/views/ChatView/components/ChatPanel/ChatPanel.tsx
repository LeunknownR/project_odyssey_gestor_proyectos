import { useState, useEffect, ChangeEvent } from "react";
import WSChatTab from "src/services/websockets/services/chats/utils/enums";
import ChatTabs from "./components/ChatTabs/ChatTabs";
import { Container } from "./styles";
import {
    PrivateChatPreview,
    ProjectChatPreview,
} from "src/entities/chat/entities";
import WSChatServiceEvents from "src/services/websockets/services/chats/events";
import PrivatePreviewChatList from "./components/PrivatePreviewChatList";
import { ChatListByTab, ChatPanelProps } from "./types";
import ProjectPreviewChatList from "./components/ProjectPreviewChatList";
import useChatViewContext from "../../utils/context/useChatViewContext";
import useMasterRouterContext from "src/routes/utils/context/useMasterRouterContext";
import InputFinder from "src/components/InputFinder";
import useMainContext from "src/utils/contexts/main-context/useMainContext";

const ChatPanel = ({ onNotifyCollaboratorConnectionState }: ChatPanelProps) => {
    //#region States
    const [timeoutToSearchChatId, setTimeoutToSearchChatId] = useState<
        NodeJS.Timeout | undefined
    >();
    //#endregion
    //#region Hooks
    const { socketIoChatService } = useMasterRouterContext().chatServiceHandler;
    const { preloader } = useMainContext();
    const {
        searchChatPayloadHandler,
        currentPrivateChatHandler,
        currentProjectChatHandler,
        privateChatMessagesHandler,
        projectChatMessagesHandler,
    } = useChatViewContext();
    const { privateChatPreviewList, projectChatPreviewList } =
        searchChatPayloadHandler.chatPreviewGroup;
    //#endregion
    //#region Effects
    useEffect(() => {
        privateChatMessagesHandler.onDispatchMessages();
        projectChatMessagesHandler.onDispatchMessages();
        return () => {
            socketIoChatService?.off(
                WSChatServiceEvents.Server.DispatchPrivateChatMessages
            );
            socketIoChatService?.off(
                WSChatServiceEvents.Server.DispatchProjectChatMessages
            );
        };
    }, []);
    //#endregion
    const getPrivateChatMessages = (
        privateChatPreview: PrivateChatPreview
    ): void => {
        if (
            privateChatPreview.collaborator.id ===
            currentPrivateChatHandler.value?.collaborator.id
        )
            return;
        preloader.show(null);
        socketIoChatService?.emit(
            WSChatServiceEvents.Collaborator.GetPrivateChatMessages,
            privateChatPreview.collaborator.id
        );
        onNotifyCollaboratorConnectionState();
        currentPrivateChatHandler.fill(privateChatPreview);
        currentProjectChatHandler.clear();
    };
    const getProjectChatMessages = (
        projectChatPreview: ProjectChatPreview
    ): void => {
        if (
            projectChatPreview.project.id ===
            currentProjectChatHandler.value?.project.id
        )
            return;
        preloader.show(null);
        socketIoChatService?.emit(
            WSChatServiceEvents.Collaborator.GetProjectChatMessages,
            projectChatPreview.project.id
        );
        currentPrivateChatHandler.clear();
        currentProjectChatHandler.fill(projectChatPreview);
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
                searchedChat: value,
            });
        }, 350);
        setTimeoutToSearchChatId(newTimeoutToSearchChatId);
    };
    const clearSearchedChat = (): void => {
        searchChatPayloadHandler.change("searchedChat", "");
        searchChatPayloadHandler.emit({
            ...searchChatPayloadHandler.value,
            searchedChat: "",
        });
    };
    //#endregion
    const listenPrivateChatPreview = (): void => {
        searchChatPayloadHandler.change("chatTab", WSChatTab.Private);
    };
    const listenProjectChatPreview = (): void => {
        searchChatPayloadHandler.change("chatTab", WSChatTab.Project);
    };
    const { chatTab, searchedChat } = searchChatPayloadHandler.value;
    const previewChatList: ChatListByTab = {
        [WSChatTab.Private]: (
            <PrivatePreviewChatList
                chatPreviewList={privateChatPreviewList}
                getChatMessages={getPrivateChatMessages}
            />
        ),
        [WSChatTab.Project]: (
            <ProjectPreviewChatList
                chatPreviewList={projectChatPreviewList}
                getChatMessages={getProjectChatMessages}
            />
        ),
    };
    return (
        <Container direction="column" gap="25px">
            <InputFinder
                searchInput={searchChat}
                searchedInput={searchedChat}
                clearSearchedInput={clearSearchedChat}
            />
            <ChatTabs
                showPrivateChatPreview={listenPrivateChatPreview}
                showProjectChatPreview={listenProjectChatPreview}
                currentTab={chatTab}
            />
            {previewChatList[chatTab]}
        </Container>
    );
};

export default ChatPanel;
