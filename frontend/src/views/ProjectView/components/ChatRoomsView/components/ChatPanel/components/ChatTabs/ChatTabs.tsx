import WSChatTab from "src/services/websockets/services/chats/utils/enums";
import { Container, Tab } from "./styles";
import { ChatTabsProps } from "./types";
import useChatServiceContext from "src/routes/components/ChatService/utils/contexts/useChatServiceContext";

const ChatTabs = ({
    showPrivateChatPreview,
    showProjectChatPreview,
    currentTab,
}: ChatTabsProps) => {
    const { hasUnreadPrivateChats, hasUnreadProjectChats } = useChatServiceContext();
    const getClassNamePrivate = () => {
        const classList: string[] = [];
        hasUnreadPrivateChats && classList.push("has-unread-chat");
        currentTab === WSChatTab.Private && classList.push("active");
        return classList.join(" ");
    };
    const getClassNameProject = () => {
        const classList: string[] = [];
        hasUnreadProjectChats && classList.push("has-unread-chat");
        currentTab === WSChatTab.Project && classList.push("active");
        return classList.join(" ");
    };
    return (
        <Container>
            <Tab
                className={getClassNamePrivate()}
                onClick={showPrivateChatPreview}>
                Privados
            </Tab>
            <Tab
                className={getClassNameProject()}
                onClick={showProjectChatPreview}>
                Proyectos
            </Tab>
        </Container>
    );
};

export default ChatTabs;
