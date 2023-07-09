import UserImage from "src/views/components/UserImage/UserImage";
import ChatRoom from "../ChatRoom/ChatRoom";
import ChatHeader from "../ChatRoom/components/ChatHeader/ChatHeader";
import ChatWindow from "../ChatRoom/components/ChatWindow/ChatWindow";
import MessageBox from "../ChatRoom/components/MessageBox/MessageBox";
import { ProjectChatRoomProps } from "./types";

const ProjectChatRoom = ({
    formattedProjectChatMessages,
}: ProjectChatRoomProps) => {
    return (
        <ChatRoom
            render={
                <>
                <ChatHeader
                    title="Paco"
                    subtitle="hola"
                    portrait={
                        <UserImage
                            name="Paco"
                            surname="Marquez"
                            urlPhoto={null}
                            className="medium"
                        />
                    }
                />
                <ChatWindow
                    formattedMessages={
                        formattedProjectChatMessages.messages
                    }
                />
                <MessageBox />
                </>
            }
        />
    );
};

export default ProjectChatRoom;
