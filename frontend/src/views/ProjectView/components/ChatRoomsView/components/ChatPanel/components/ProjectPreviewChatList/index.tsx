import { LastMessage, ProjectChatPreview, ProjectLastMessage } from "src/entities/chat/entities";
import PreviewChatList from "../ChatList/PreviewChatList";
import ChatPreview from "../ChatList/components/ChatPreview/ChatPreview";
import { ProjectPreviewChatListProps } from "./types";
import ProjectChatImage from "./ProjectChatImage";
import useChatViewContext from "../../../../utils/context/useChatViewContext";

const ProjectPreviewChatList = ({
    chatPreviewList, getChatMessages
}: ProjectPreviewChatListProps) => {
    const {
        currentProjectChat
    } = useChatViewContext();
    const isUnreadChat = (lastMessage: ProjectLastMessage | null): boolean => {
        if (!lastMessage) return false;
        return !lastMessage.seen;
    };
    const getFormattedMessage = (lastMessage: ProjectLastMessage | null): string | null => {
        return lastMessage
            ? `${lastMessage.senderFirstName}: ${lastMessage.message}`
            : null;
    }
    return (
        <PreviewChatList<ProjectChatPreview>
            previewChatList={chatPreviewList}
            renderItem={projectChatPreview => {
                const { project, lastMessage } = projectChatPreview;
                return (
                    <ChatPreview
                        key={project.id}
                        portrait={
                            <ProjectChatImage
                                isUnreadChat={isUnreadChat(lastMessage)}/>}
                        title={project.name}
                        datetime={lastMessage?.datetime || null}
                        message={getFormattedMessage(lastMessage)}
                        onClick={() => getChatMessages(projectChatPreview)}
                        active={project.id === currentProjectChat?.project.id}/>
                );
            }}
        />
    );
};

export default ProjectPreviewChatList;
