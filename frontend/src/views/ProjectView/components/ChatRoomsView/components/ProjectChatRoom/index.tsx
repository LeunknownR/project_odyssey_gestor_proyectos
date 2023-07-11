import { useEffect } from "react";
import ChatRoom from "../ChatRoom/ChatRoom";
import ChatHeader from "../ChatRoom/components/ChatHeader/ChatHeader";
import ChatWindow from "../ChatRoom/components/ChatWindow/ChatWindow";
import MessageBox from "../ChatRoom/components/MessageBox/MessageBox";
import { ProjectChatRoomProps } from "./types";
import useChatServiceContext from "src/routes/components/ChatService/utils/contexts/useChatServiceContext";
import useChatViewContext from "../../utils/context/useChatViewContext";
import WSChatServiceEvents from "src/services/websockets/services/chats/events";
import ProjectChatImage from "../ChatPanel/components/ProjectPreviewChatList/ProjectChatImage";
import { getUserId } from "src/storage/user.local";

const ProjectChatRoom = ({
    formattedProjectChatMessages,
}: ProjectChatRoomProps) => {
    const { socketIoChatService } = useChatServiceContext();
    const { currentProjectChat, setCurrentProjectChat, setFormattedProjectChatMessages } = useChatViewContext();
    useEffect(() => {
        window.addEventListener("beforeunload", leaveChat);
        return () => window.removeEventListener("beforeunload", leaveChat);
    }, []);
    useEffect(() => {
        leaveChat();
    }, [currentProjectChat]);
    const leaveChat = (): void => {
        socketIoChatService?.emit(
            WSChatServiceEvents.Collaborator.LeaveProjectChat,
            currentProjectChat?.project.id
        );
    }
    if (!currentProjectChat) return null;
    const closeChat = (): void => {
        leaveChat();
        setFormattedProjectChatMessages(null);
        setCurrentProjectChat(null);
    }
    const sendMessage = (messageText: string): void => {
        const message = {
            projectId: currentProjectChat?.project.id,
            content: messageText
        }
        socketIoChatService?.emit(
            WSChatServiceEvents.Collaborator.SendMessageToProjectChat,
            message
        );
    }
    const { project } = currentProjectChat;
    const getProjectCollaborators = (): string => {
        const { collaborators } = formattedProjectChatMessages
        const formattedCollaborators = collaborators
            .map(({firstName, id}) => {
                if (id === getUserId()) 
                    return null;
                return firstName;
            })
            .filter(Boolean).concat("Tú").join(", ");
        return formattedCollaborators;
    };
    return (
        <ChatRoom
            render={
                <>
                <ChatHeader
                    title={project.name}
                    subtitle={getProjectCollaborators()}
                    portrait={<ProjectChatImage />}
                    closeChat={closeChat}/>
                <ChatWindow
                    messages={formattedProjectChatMessages.messages}
                    collaboratorInfo={formattedProjectChatMessages.collaborators}
                    additionalChatInfo={<span>Coordina con tu equipo</span>}/>
                <MessageBox emitMessageEvent={sendMessage}/>
                </>
            }
        />
    );
};

export default ProjectChatRoom;
