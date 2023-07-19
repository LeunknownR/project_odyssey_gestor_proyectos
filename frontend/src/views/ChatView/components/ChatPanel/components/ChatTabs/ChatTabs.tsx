import WSChatTab from "src/services/websockets/services/chats/utils/enums";
import { Container, Tab } from "./styles";
import { ChatTabsProps } from "./types";
import useMasterRouterContext from "src/routes/utils/context/useMasterRouterContext";

const ChatTabs = ({
    showPrivateChatPreview,
    showProjectChatPreview,
    currentTab,
}: ChatTabsProps) => {
    const { hasUnreadPrivateChats, hasUnreadProjectChats } = useMasterRouterContext().chatServiceHandler;
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
