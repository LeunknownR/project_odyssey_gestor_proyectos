import ChatRoom from "../ChatRoom/ChatRoom";
import ChatHeader from "../ChatRoom/components/ChatHeader/ChatHeader";
import ChatWindow from "../ChatRoom/components/ChatWindow/ChatWindow";
import MessageBox from "../ChatRoom/components/MessageBox/MessageBox";
import useChatViewContext from "../../utils/context/useChatViewContext";
import WSChatServiceEvents from "src/services/websockets/services/chats/events";
import ProjectChatImage from "../ChatPanel/components/ProjectPreviewChatList/ProjectChatImage";
import { getUserId } from "src/storage/user.local";
import useMasterRouterContext from "src/routes/utils/context/useMasterRouterContext";

const ProjectChatRoom = () => {
    const { socketIoChatService } = useMasterRouterContext().chatServiceHandler;
    const { 
        currentProjectChatHandler, 
        projectChatMessagesHandler 
    } = useChatViewContext();
    const { value: currentChat } = currentProjectChatHandler;
    const { formattedMessages, clearMessages }  = projectChatMessagesHandler;
    if (!formattedMessages || !currentChat) return null;
    const closeChat = (): void => {
        clearMessages();
        currentProjectChatHandler.clear();
    }
    const { project } = currentChat;
    const sendMessage = (messageText: string): void => {
        const message = {
            projectId: project.id,
            content: messageText
        };
        socketIoChatService?.emit(
            WSChatServiceEvents.Collaborator.SendMessageToProjectChat,
            message
        );
    }
    const getProjectCollaborators = (): string => {
        const { collaborators } = formattedMessages
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
                    title={currentProjectChatHandler.value?.project.name || ""}
                    subtitle={getProjectCollaborators()}
                    portrait={<ProjectChatImage/>}
                    closeChat={closeChat}/>
                <ChatWindow
                    messages={formattedMessages.messages}
                    collaboratorInfo={formattedMessages.collaborators}
                    additionalChatInfo={<span>Coordina con tu equipo</span>}/>
                <MessageBox emitMessageEvent={sendMessage}/>
                </>
            }
        />
    );
};

export default ProjectChatRoom;
