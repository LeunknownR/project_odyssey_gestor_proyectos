import { getUserId } from "src/storage/user.local";
import Message from "./components/Message/Message";
import { Container, MessageList } from "./styles";
import { ChatWindowProps } from "./types";

const ChatWindow = ({ formattedMessages }: ChatWindowProps) => {
    return (
        <Container>
            <MessageList
                direction="column"
                gap="15px"
                className="custom-scrollbar"
            >
                {formattedMessages.map(
                    ({ collaboratorId, message, id, datetime }) => (
                        <Message
                            key={id}
                            className={
                                collaboratorId === getUserId() ? "my-message" : ""
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
