import { LastMessage, PrivateChatPreview } from "src/entities/chat/entities";
import PreviewChatList from "../ChatList/PreviewChatList";
import ChatPreview from "../ChatList/components/ChatPreview/ChatPreview";
import UserImage from "src/views/components/UserImage/UserImage";
import { PrivatePreviewChatListProps } from "./types";
import { getUserId } from "src/storage/user.local";
import { ImageWrapper } from "./styles";
import useChatServiceContext from "src/routes/components/ChatService/utils/contexts/useChatServiceContext";
import WSChatServiceEvents from "src/services/websockets/services/chats/events";
import useChatViewContext from "../../../../utils/context/useChatViewContext";

const PrivatePreviewChatList = ({
    privateChatPreviewList,
}: PrivatePreviewChatListProps) => {
    const { socketIoChatService } = useChatServiceContext();
    const { dispatchPrivateMessages } = useChatViewContext();
    const getFormattedMessage = (
        lastMessage: LastMessage | null
    ): string | null => {
        if (!lastMessage) return null;
        return lastMessage.senderId === getUserId()
            ? `Tú: ${lastMessage.message}`
            : lastMessage.message;
    };
    const getIsChatNotRead = (lastMessage: LastMessage | null): string => {
        if (!lastMessage) return "";
        return lastMessage.seen ? "" : "has-unread-chat";
    };
    const getPrivateChatMessages = (collaboratorChatId: number): void => {
        socketIoChatService?.emit(WSChatServiceEvents.Collaborator.GetPrivateChatMessages, collaboratorChatId);
        dispatchPrivateMessages();
    }
    return (
        <PreviewChatList<PrivateChatPreview>
            previewChatList={privateChatPreviewList}
            renderItem={({ collaborator, lastMessage }) => (
                <ChatPreview
                    key={collaborator.id}
                    portrait={
                        <ImageWrapper
                            className={getIsChatNotRead(lastMessage)}
                        >
                            <UserImage
                                className="medium"
                                name={collaborator.name}
                                surname={collaborator.surname}
                                urlPhoto={collaborator.urlPhoto}
                            />
                        </ImageWrapper>
                    }
                    title={`${collaborator.name} ${collaborator.surname}`}
                    datetime={lastMessage?.datetime || null}
                    message={getFormattedMessage(lastMessage)}
                    onClick={() => getPrivateChatMessages(collaborator.id)}
                />
            )}
        />
    );
};

export default PrivatePreviewChatList;
