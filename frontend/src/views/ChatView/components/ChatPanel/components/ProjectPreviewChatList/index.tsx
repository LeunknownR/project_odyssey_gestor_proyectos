import { ProjectChatPreview, ProjectLastMessage } from "src/entities/chat/entities";
import PreviewChatList from "../ChatList/PreviewChatList";
import ChatPreview from "../ChatList/components/ChatPreview/ChatPreview";
import { ProjectPreviewChatListProps } from "./types";
import ProjectChatImage from "./ProjectChatImage";
import useChatViewContext from "../../../../utils/context/useChatViewContext";
import NoChats from "../NoChats";
import { getUserId } from "src/storage/user.local";

const ProjectPreviewChatList = ({
    chatPreviewList, getChatMessages
}: ProjectPreviewChatListProps) => {
    const {
        currentProjectChatHandler
    } = useChatViewContext();
    const { value: currentChat } = currentProjectChatHandler;
    const isUnreadChat = (lastMessage: ProjectLastMessage | null): boolean => {
        if (!lastMessage) return false;
        return !lastMessage.seen;
    };
    const getFormattedMessage = (lastMessage: ProjectLastMessage | null): string | null => {
        if (!lastMessage) return null;
        return lastMessage.senderId === getUserId()
            ? lastMessage.message
            : `${lastMessage.senderFirstName}: ${lastMessage.message}`;
    };
    return (
        <>
        {chatPreviewList.length > 0 ? <PreviewChatList<ProjectChatPreview>
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
                        active={project.id === currentChat?.project?.id}/>
                );
            }}
        /> : <NoChats />}
        </>
        
    );
};

export default ProjectPreviewChatList;
