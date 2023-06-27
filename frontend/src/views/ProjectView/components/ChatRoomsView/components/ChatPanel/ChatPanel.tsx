import ChatFinder from "./components/ChatFinder/ChatFinder";
import ChatList from "./components/ChatList/ChatList";
import ChatTabs from "./components/ChatTabs/ChatTabs";
import { Container } from "./styles";

const ChatPanel = () => {
    return (
        <Container direction="column" gap="25px">
            <ChatFinder />
            <ChatTabs isNewChat/>
            <ChatList />
        </Container>
    );
};

export default ChatPanel;
