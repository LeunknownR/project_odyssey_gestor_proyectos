import { useRef, useState, useEffect } from "react";
import { SearchChatPayload } from "../../components/ChatPanel/types";
import { INIT_SEARCH_CHAT_PAYLOAD } from "../constants";
import { ChangeSearchChatPayload, SearchChatPayloadHook } from "../types";
import { PrivateChatPreview, ProjectChatPreview } from "src/entities/chat/entities";
import WSChatTab from "src/services/websockets/services/chats/utils/enums";
import useChatServiceContext from "src/routes/components/ChatService/utils/contexts/useChatServiceContext";
import WSChatServiceEvents from "src/services/websockets/services/chats/events";
import { PreloaderHook } from "src/components/Preloader/types";

const useSearchChatPayload = (
    preloader: PreloaderHook,
    currentPrivateChat: PrivateChatPreview | null,
    currentProjectChat: ProjectChatPreview | null
): SearchChatPayloadHook => {
    const { socketIoChatService } = useChatServiceContext();
    //#region States
    const [searchChatPayload, setSearchChatPayload] = useState<SearchChatPayload>({ 
        ...INIT_SEARCH_CHAT_PAYLOAD 
    });
    const [privateChatPreviewList, setPrivateChatPreviewList] = useState<PrivateChatPreview[]>([]);
    const [projectChatPreviewList, setProjectChatPreviewList] = useState<ProjectChatPreview[]>([]);
    //#endregion
    //#region Refs
    const privateChatCollaboratorIdRef = useRef<number>();
    const projectChatIdRef = useRef<number>();
    const searchChatPayloadRef = useRef<SearchChatPayload>();
    //#endregion
    //#region Effects
    useEffect(() => {
        searchChatPayloadRef.current = searchChatPayload;
    }, [searchChatPayload]);
    useEffect(() => {
        onNotifySentMessage();
        return () => offNotifySentMessage();
    }, []);
    useEffect(() => {
        privateChatCollaboratorIdRef.current = currentPrivateChat?.collaborator.id;
    }, [currentPrivateChat]);
    useEffect(() => {
        projectChatIdRef.current = currentProjectChat?.project.id
    }, [currentProjectChat]);
    useEffect(() => {
        emitSearchChatEvent();
    }, [searchChatPayload]);
    useEffect(() => {
        switch (searchChatPayload.chatTab) {
            case WSChatTab.Private:
                onPrivateChatPreview();
                break;
            case WSChatTab.Project:
                onProjectChatPreview();
                break;
        }
    }, [searchChatPayload.chatTab]);
    //#endregion
    //#region Functions
    const changeValue: ChangeSearchChatPayload = (field, value) => {
        setSearchChatPayload(prev => ({
            ...prev,
            [field]: value
        }));
    };
    const onNotifySentMessage = (): void => {
        socketIoChatService?.on(WSChatServiceEvents.Server.NotifySentMessage, notifySentMessage);
    }
    const offNotifySentMessage = (): void => {
        socketIoChatService?.off(WSChatServiceEvents.Server.NotifySentMessage);
    }
    const notifySentMessage = (chatTab: WSChatTab): void => {
        emitSearchChatEvent();
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
    };
    const emitSearchChatEvent = (payload?: SearchChatPayload): void => {
        socketIoChatService?.emit(
            WSChatServiceEvents.Collaborator.SearchChat,
            payload || searchChatPayloadRef.current
        );
    };
    const onPrivateChatPreview = (): void => {
        socketIoChatService?.off(
            WSChatServiceEvents.Server.DispatchProjectChatPreview
        );
        socketIoChatService?.on(
            WSChatServiceEvents.Server.DispatchPrivateChatPreview,
            showPrivateChatPreview
        );
    };
    const onProjectChatPreview = (): void => {
        socketIoChatService?.off(
            WSChatServiceEvents.Server.DispatchPrivateChatPreview
        );
        socketIoChatService?.on(
            WSChatServiceEvents.Server.DispatchProjectChatPreview,
            showProjectChatPreview
        );
    };
    const showPrivateChatPreview = (privateChatPreviewList: PrivateChatPreview[]): void => {
        setPrivateChatPreviewList(privateChatPreviewList);
        preloader.hide();
    };
    const showProjectChatPreview = (projectChatPreviewList: ProjectChatPreview[]): void => {
        setProjectChatPreviewList(projectChatPreviewList);
        preloader.hide();
    };
    //#endregion
    return {
        value: searchChatPayload,
        change: changeValue,
        emit: emitSearchChatEvent,
        chatPreviewGroup: {
            privateChatPreviewList,
            projectChatPreviewList
        }
    };
}

export default useSearchChatPayload;