import { useEffect, useRef } from "react";
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
    messages,
    additionalChatInfo,
    collaboratorInfo,
}: ChatWindowProps) => {
    const messageListRef = useRef<HTMLUListElement | null>(null);
    useEffect(() => {
        scrollToBottom();
    }, [messages]);
    const scrollToBottom = (): void => {
        messageListRef?.current?.scrollTo({
            top: messageListRef.current.scrollHeight,
        });
    };
    return (
        <Container>
            <MessageList
                direction="column"
                gap="15px"
                className="custom-scrollbar"
                ref={messageListRef}>
                <AdditionalChatInfoWrapper
                    direction="column"
                    align="center"
                    gap="8px">
                    {additionalChatInfo}
                    <Separator />
                </AdditionalChatInfoWrapper>
                {messages.map(({ id, collaboratorId, message, datetime }) => (
                    <Message
                        key={id}
                        className={
                            collaboratorId === getUserId() 
                            ? "my-message" : ""}
                        text={message}
                        datetime={datetime}
                        sender={
                            collaboratorInfo &&
                            collaboratorInfo.find(
                                collaborator =>
                                    collaborator.id === collaboratorId
                            )?.firstName}/>
                ))}
            </MessageList>
        </Container>
    );
};

export default ChatWindow;
