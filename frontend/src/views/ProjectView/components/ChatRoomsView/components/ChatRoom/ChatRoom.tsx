/* eslint-disable no-constant-condition */
import ChatHeader from "./components/ChatHeader/ChatHeader";
import ChatWindow from "./components/ChatWindow/ChatWindow";
import MessageBox from "./components/MessageBox/MessageBox";
import { Container } from "./styles";

const ChatRoom = () => {
    return (
        <Container direction="column" justify="center">
            <ChatHeader />
            <ChatWindow />
            <MessageBox />
        </Container>
    );
};

export default ChatRoom;
