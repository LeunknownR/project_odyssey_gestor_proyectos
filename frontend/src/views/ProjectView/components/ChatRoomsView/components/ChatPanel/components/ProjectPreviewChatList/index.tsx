import { LastMessage, ProjectChatPreview } from "src/entities/chat/entities";
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
    const getIsLastMessageSeen = (lastMessage: LastMessage | null): boolean => {
        if (!lastMessage) return true;
        return lastMessage.seen;
    };
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
                                isLastMessageSeen={getIsLastMessageSeen(lastMessage)}/>}
                        title={project.name}
                        datetime={lastMessage?.datetime || null}
                        message={
                            lastMessage
                                ? `${lastMessage?.senderFirstName}: ${lastMessage?.message}`
                                : null}
                        onClick={() => getChatMessages(projectChatPreview)}
                        active={project.id === currentProjectChat?.project.id}/>
                );
            }}
        />
    );
};

export default ProjectPreviewChatList;
