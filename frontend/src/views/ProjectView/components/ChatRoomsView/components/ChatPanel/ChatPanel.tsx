import ChatFinder from "./components/ChatFinder/ChatFinder";
import ChatTabs from "./components/ChatTabs/ChatTabs";
import { Container } from "./styles";

const ChatPanel = () => {
    return (
        <Container direction="column" gap="30px">
            <ChatFinder />
            <ChatTabs />
        </Container>
    );
};

export default ChatPanel;
