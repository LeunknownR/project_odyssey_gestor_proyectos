import ChatBubble from "./components/ChatBubble/ChatBubble";
import ChatHeader from "./components/ChatHeader/ChatHeader";
import ChatInputField from "./components/ChatInputField/ChatInputField";
import NoChatSelected from "./components/NoChatSelected/NoChatSelected";
import { Content, ChatContentContainer, Container } from "./styles";

const ChatRoom = () => {
    return (
        <Container>
            <ChatHeader />
            <Content>
                <ChatContentContainer>
                    <ChatBubble />
                </ChatContentContainer>
            </Content>
            <ChatInputField />
        </Container>
    );
};

export default ChatRoom;
