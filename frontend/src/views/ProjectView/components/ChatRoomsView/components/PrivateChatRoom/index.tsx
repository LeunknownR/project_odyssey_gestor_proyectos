import { useState, useEffect } from "react";
import ChatRoom from "../ChatRoom/ChatRoom";
import { PrivateChatRoomProps } from "./types";
import ChatHeader from "../ChatRoom/components/ChatHeader/ChatHeader";
import ChatWindow from "../ChatRoom/components/ChatWindow/ChatWindow";
import MessageBox from "../ChatRoom/components/MessageBox/MessageBox";
import UserImage from "src/views/components/UserImage/UserImage";
import useChatViewContext from "../../utils/context/useChatViewContext";
import useChatServiceContext from "src/routes/components/ChatService/utils/contexts/useChatServiceContext";
import WSChatServiceEvents from "src/services/websockets/services/chats/events";

const PrivateChatRoom = ({
    formattedPrivateChatMessages,
}: PrivateChatRoomProps) => {
    const [isOnline, setIsOnline] = useState(false);
    const { socketIoChatService } = useChatServiceContext();
    const { currentPrivateChat } = useChatViewContext();
    useEffect(() => {
        socketIoChatService?.on(
            WSChatServiceEvents.Server.NotifyCollaboratorOnlineState,
            (isOnline: boolean) => {
                setIsOnline(isOnline);
            }
        );
    }, [currentPrivateChat]);
    if (!currentPrivateChat) return null;
    const { collaborator } = currentPrivateChat;
    return (
        <ChatRoom
            render={
                <>
                <ChatHeader
                    title={`${collaborator.name} ${collaborator.surname}`}
                    subtitle={isOnline ? "Conectado(a)" : "Desconectado(a)"}
                    portrait={
                        <UserImage
                            name={collaborator.name}
                            surname={collaborator.surname}
                            urlPhoto={collaborator.urlPhoto}
                            className="medium"
                        />
                    }
                />
                <ChatWindow
                    formattedMessages={
                        formattedPrivateChatMessages.messages
                    }
                />
                <MessageBox />
                </>
            }
        />
    );
};

export default PrivateChatRoom;
