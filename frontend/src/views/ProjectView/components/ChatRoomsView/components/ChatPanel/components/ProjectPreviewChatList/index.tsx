import { LastMessage, ProjectChatPreview } from "src/entities/chat/entities";
import PreviewChatList from "../ChatList/PreviewChatList";
import ChatPreview from "../ChatList/components/ChatPreview/ChatPreview";
import { ProjectPreviewChatListProps } from "./types";
import ProjectChatImage from "./ProjectChatImage";
import useChatServiceContext from "src/routes/components/ChatService/utils/contexts/useChatServiceContext";
import WSChatServiceEvents from "src/services/websockets/services/chats/events";
import useChatViewContext from "../../../../utils/context/useChatViewContext";

const ProjectPreviewChatList = ({
    projectChatPreviewList,
}: ProjectPreviewChatListProps) => {
    const { socketIoChatService } = useChatServiceContext();
    const {
        dispatchProjectMessages,
        currentProjectChat,
        setCurrentProjectChat,
        setCurrentPrivateChat,
    } = useChatViewContext();
    const getIsLastMessageSeen = (lastMessage: LastMessage | null): boolean => {
        if (!lastMessage) return true;
        return lastMessage.seen;
    };
    const getPrivateChatMessages = (
        projectChatPreview: ProjectChatPreview
    ): void => {
        socketIoChatService?.emit(
            WSChatServiceEvents.Collaborator.GetProjectChatMessages,
            projectChatPreview.project.id
        );
        setCurrentProjectChat(projectChatPreview);
        setCurrentPrivateChat(null);
        dispatchProjectMessages();
    };
    return (
        <PreviewChatList<ProjectChatPreview>
            previewChatList={projectChatPreviewList}
            renderItem={projectChatPreview => {
                const { project, lastMessage } = projectChatPreview;
                return (
                    <ChatPreview
                        key={project.id}
                        portrait={
                            <ProjectChatImage
                                isLastMessageSeen={getIsLastMessageSeen(
                                    lastMessage
                                )}
                            />
                        }
                        title={project.name}
                        datetime={lastMessage?.datetime || null}
                        message={
                            lastMessage
                                ? `${lastMessage?.senderFirstName}: ${lastMessage?.message}`
                                : null
                        }
                        onClick={() =>
                            getPrivateChatMessages(projectChatPreview)
                        }
                        active={project.id === currentProjectChat?.project.id}
                    />
                );
            }}
        />
    );
};

export default ProjectPreviewChatList;
