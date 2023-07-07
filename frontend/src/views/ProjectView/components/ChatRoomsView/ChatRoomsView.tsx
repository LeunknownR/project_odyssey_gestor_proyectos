/* eslint-disable no-constant-condition */
import { Container } from "./styles";
import ChatRoom from "./components/ChatRoom/ChatRoom";
import ChatPanel from "./components/ChatPanel/ChatPanel";
import SidebarMenu from "src/views/components/SidebarMenu/SidebarMenu";
import UnselectedChat from "./components/ChatRoom/components/NoChatSelected/UnselectedChat";

const ChatRoomsView = () => {
    return (
        <>
        <SidebarMenu />
        <Container>
            <ChatPanel />
            {true ? <ChatRoom /> : <UnselectedChat />}
        </Container>
        </>
    );
};

export default ChatRoomsView;
