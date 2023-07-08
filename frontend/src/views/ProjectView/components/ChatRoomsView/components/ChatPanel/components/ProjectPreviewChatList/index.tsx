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
    const { dispatchProjectMessages } = useChatViewContext();
    const getIsLastMessageSeen = (lastMessage: LastMessage | null): boolean => {
        if (!lastMessage) return true;
        return lastMessage.seen;
    };
    const getPrivateChatMessages = (projectId: number): void => {
        socketIoChatService?.emit(WSChatServiceEvents.Collaborator.GetProjectChatMessages, projectId);
        dispatchProjectMessages()
    }
    return (
        <PreviewChatList<ProjectChatPreview>
            previewChatList={projectChatPreviewList}
            renderItem={({ project, lastMessage }) => (
                <ChatPreview
                    key={project.id}
                    portrait={
                        <ProjectChatImage
                            isLastMessageSeen={
                                getIsLastMessageSeen(lastMessage)
                            }
                        />
                    }
                    title={project.name}
                    datetime={lastMessage?.datetime || null}
                    message={lastMessage?.message || null}
                    onClick={() => getPrivateChatMessages(project.id)}
                />
            )}
        />
    );
};

export default ProjectPreviewChatList;
