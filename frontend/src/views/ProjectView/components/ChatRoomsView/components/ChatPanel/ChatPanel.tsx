import { useState, useEffect } from "react";
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
import { A } from "./types";
import ProjectPreviewChatList from "./components/ProjectPreviewChatList";

const ChatPanel = () => {
    const [currentTab, setCurrentTab] = useState<WSChatTab>(WSChatTab.Private);
    const [privateChatPreviewList, setPrivateChatPreviewList] = useState<
        PrivateChatPreview[]
    >([]);
    const [projectChatPreviewList, setProjectChatPreviewList] = useState<
        ProjectChatPreview[]
    >([]);
    const { socketIoChatService } = useChatServiceContext();
    useEffect(() => {
        showPrivateChatPreview()
    }, []);
    const showPrivateChatPreview = async () => {
        // socketIoChatService?.off(
        //     WSChatServiceEvents.Server.DispatchProjectChatPreview
        // );
        console.log("1")
        setCurrentTab(WSChatTab.Private);
        socketIoChatService?.on(
            WSChatServiceEvents.Server.DispatchPrivateChatPreview,
            handlerShowPrivateChatPreview
        );
    };
    const handlerShowPrivateChatPreview = (
        privateChatPreview: PrivateChatPreview[]
    ) => {
        setPrivateChatPreviewList(privateChatPreview);
    };
    const showProjectChatPreview = async () => {
        // socketIoChatService?.off(
        //     WSChatServiceEvents.Server.DispatchPrivateChatPreview
        // );
        console.log("2")
        setCurrentTab(WSChatTab.Project);
        socketIoChatService?.on(
            WSChatServiceEvents.Server.DispatchProjectChatPreview,
            handlerShowProjectChatPreview
        );
    };
    const handlerShowProjectChatPreview = (projectChatPreview: ProjectChatPreview[]) => {
        setProjectChatPreviewList(projectChatPreview);
        
    }
    //GNOMO CAMBIAR NOMBRE DE ESE TIPO
    const previewChatList: A = {
        [WSChatTab.Private]: <PrivatePreviewChatList privateChatPreviewList={privateChatPreviewList}/>,
        [WSChatTab.Project]: <ProjectPreviewChatList projectChatPreviewList={projectChatPreviewList}/>
    }
    return (
        <Container direction="column" gap="25px">
            <ChatFinder chatTab={currentTab} />
            <ChatTabs
                showPrivateChatPreview={showPrivateChatPreview}
                showProjectChatPreview={showProjectChatPreview}
                currentTab={currentTab}
            />
            {previewChatList[currentTab]}
        </Container>
    );
};

export default ChatPanel;
