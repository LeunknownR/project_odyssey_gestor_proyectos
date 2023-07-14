import { LastMessage, PrivateChatPreview } from "src/entities/chat/entities";
import PreviewChatList from "../ChatList/PreviewChatList";
import ChatPreview from "../ChatList/components/ChatPreview/ChatPreview";
import UserImage from "src/views/components/UserImage/UserImage";
import { PrivatePreviewChatListProps } from "./types";
import { getUserId } from "src/storage/user.local";
import { ImageWrapper } from "./styles";
import useChatViewContext from "../../../../utils/context/useChatViewContext";
import NoChats from "../NoChats";

const PrivatePreviewChatList = ({
    chatPreviewList, getChatMessages
}: PrivatePreviewChatListProps) => {
    const {
        currentPrivateChat
    } = useChatViewContext();
    const getFormattedMessage = (
        lastMessage: LastMessage | null
    ): string | null => {
        if (!lastMessage) return null;
        return lastMessage.senderId === getUserId()
            ? `Tú: ${lastMessage.message}`
            : lastMessage.message;
    };
    const isUnreadChat = (lastMessage: LastMessage | null): boolean => {
        if (!lastMessage) return false;
        return !lastMessage.seen && lastMessage.senderId !== getUserId();
    };
    return (
        <>
        {chatPreviewList.length > 0 ?
        <PreviewChatList<PrivateChatPreview>
            previewChatList={chatPreviewList}
            renderItem={privateChatPreview => {
                const { collaborator, lastMessage } = privateChatPreview;
                return (
                    <ChatPreview
                        key={collaborator.id}
                        portrait={
                            <ImageWrapper
                                className={isUnreadChat(lastMessage) ? "has-unread-chat" : ""}>
                                <UserImage
                                    className="medium"
                                    name={collaborator.name}
                                    surname={collaborator.surname}
                                    urlPhoto={collaborator.urlPhoto}/>
                            </ImageWrapper>}
                        title={`${collaborator.name} ${collaborator.surname}`}
                        datetime={lastMessage?.datetime || null}
                        message={getFormattedMessage(lastMessage)}
                        onClick={() => getChatMessages(privateChatPreview)}
                        active={collaborator.id === currentPrivateChat?.collaborator.id}/>
                );
            }}
        /> : <NoChats />}
        </>
    );
};

export default PrivatePreviewChatList;
