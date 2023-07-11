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
import AdditionalPrivateChatInfo from "./components/AdditionalPrivateChatInfo";

const PrivateChatRoom = ({
    formattedPrivateChatMessages,
}: PrivateChatRoomProps) => {
    const [isOnline, setIsOnline] = useState(false);
    const { socketIoChatService } = useChatServiceContext();
    const {
        currentPrivateChat,
        setCurrentPrivateChat,
        setFormattedPrivateChatMessages,
    } = useChatViewContext();
    useEffect(() => {
        window.addEventListener("beforeunload", leaveChat);
        return () => window.removeEventListener("beforeunload", leaveChat);
    }, []);
    useEffect(() => {
        if (!currentPrivateChat) return;
        socketIoChatService?.on(
            WSChatServiceEvents.Server.NotifyCollaboratorOnlineState,
            (isOnline: boolean) => {
                setIsOnline(isOnline);
            }
        );
        leaveChat();
    }, [currentPrivateChat]);
    const leaveChat = (): void => {
        socketIoChatService?.emit(
            WSChatServiceEvents.Collaborator.LeavePrivateChat,
            currentPrivateChat?.collaborator.id
        );
    };
    const closeChat = (): void => {
        if (!currentPrivateChat) return;
        leaveChat();
        setFormattedPrivateChatMessages(null);
        setCurrentPrivateChat(null);
    };
    const sendMessage = (messageText: string): void => {
        const message = {
            receiverId: currentPrivateChat?.collaborator.id,
            content: messageText,
        };
        socketIoChatService?.emit(
            WSChatServiceEvents.Collaborator.SendMessageToPrivateChat,
            message
        );
    };
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
                    closeChat={closeChat}
                />
                <ChatWindow
                    messages={
                        formattedPrivateChatMessages.messages
                    }
                    additionalChatInfo={
                        <AdditionalPrivateChatInfo
                            collaboratorRelationList={
                                formattedPrivateChatMessages.collaboratorRelationList
                            }
                        />
                    }
                />
                <MessageBox emitMessageEvent={sendMessage} />
                </>
            }
        />
    );
};

export default PrivateChatRoom;
