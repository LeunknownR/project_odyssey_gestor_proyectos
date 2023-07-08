import ChatRoom from "../ChatRoom/ChatRoom";
import { PrivateChatRoomProps } from "./types";
import ChatHeader from "../ChatRoom/components/ChatHeader/ChatHeader";
import ChatWindow from "../ChatRoom/components/ChatWindow/ChatWindow";
import MessageBox from "../ChatRoom/components/MessageBox/MessageBox";
import UserImage from "src/views/components/UserImage/UserImage";

const PrivateChatRoom = ({
    formattedPrivateChatMessages,
}: PrivateChatRoomProps) => {
    
    return (
        <ChatRoom
            render={
                <>
                <ChatHeader
                    title="Paco"
                    subtitle="hola"
                    portrait={<UserImage name="Paco" surname="Marquez" urlPhoto={null} className="medium"/>}
                />
                <ChatWindow formattedMessages={formattedPrivateChatMessages.messages}/>
                <MessageBox />
                </>
            }
        />
    );
};

export default PrivateChatRoom;
