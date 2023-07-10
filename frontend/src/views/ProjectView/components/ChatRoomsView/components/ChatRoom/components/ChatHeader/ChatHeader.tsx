import { Container, ChatTitle, ChatSubtitle, CloseBtn } from "./styles";
import { FlexFlow } from "src/components/styles";
import { ChatHeaderProps } from "./types";

const ChatHeader = ({ portrait, title, subtitle, closeChat }: ChatHeaderProps) => {
    return (
        <Container align="center" justify="space-between">
            <FlexFlow gap="18px">
                {portrait}
                <FlexFlow direction="column" gap="5px">
                    <ChatTitle>{title}</ChatTitle>
                    <ChatSubtitle>{subtitle}</ChatSubtitle>
                </FlexFlow>
            </FlexFlow>
            <CloseBtn
                onClick={closeChat}
                icon="octicon:x-16"
            />
        </Container>
    );
};

export default ChatHeader;
