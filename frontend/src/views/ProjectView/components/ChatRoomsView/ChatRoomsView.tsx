import { Container } from "./styles";
import ChatRoom from "./components/ChatRoom/ChatRoom";
import ChatPanel from "./components/ChatPanel/ChatPanel";
import SidebarMenu from "src/views/components/SidebarMenu/SidebarMenu";

const ChatRoomsView = () => {
    return (
        <>
        <SidebarMenu />
        <Container>
            <ChatPanel />
            <ChatRoom />
        </Container>
        </>
    );
};

export default ChatRoomsView;
