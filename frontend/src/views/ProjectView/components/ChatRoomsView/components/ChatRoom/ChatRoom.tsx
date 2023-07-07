/* eslint-disable no-constant-condition */
import Message from "./components/ChatWindow/components/Message/Message";
import ChatHeader from "./components/ChatHeader/ChatHeader";
import ChatWindow from "./components/ChatWindow/ChatWindow";
import MessageBox from "./components/MessageBox/MessageBox";
import { Container } from "./styles";

const ChatRoom = () => {
    return (
        <Container direction="column" justify="center">
            <ChatHeader />
            <ChatWindow />
            {/* <Content>
                <ChatBubble />
            </Content> */}
            <MessageBox />
        </Container>
    );
};

export default ChatRoom;
