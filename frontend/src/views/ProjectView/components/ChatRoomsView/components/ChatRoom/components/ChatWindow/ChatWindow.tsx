import { getUserId } from "src/storage/user.local";
import Message from "./components/Message/Message";
import {
    AdditionalChatInfoWrapper,
    Container,
    MessageList,
    Separator,
} from "./styles";
import { ChatWindowProps } from "./types";

const ChatWindow = ({
    formattedMessages,
    additionalChatInfo,
}: ChatWindowProps) => {
    return (
        <Container>
            <MessageList
                direction="column"
                gap="15px"
                className="custom-scrollbar"
            >
                <AdditionalChatInfoWrapper
                    direction="column"
                    align="center"
                    gap="8px"
                >
                    {additionalChatInfo}
                    <Separator />
                </AdditionalChatInfoWrapper>
                {formattedMessages.map(
                    ({ collaboratorId, message, id, datetime }) => (
                        <Message
                            key={id}
                            className={
                                collaboratorId === getUserId()
                                    ? "my-message"
                                    : ""
                            }
                            text={message}
                            datetime={datetime}
                        />
                    )
                )}
            </MessageList>
        </Container>
    );
};

export default ChatWindow;
