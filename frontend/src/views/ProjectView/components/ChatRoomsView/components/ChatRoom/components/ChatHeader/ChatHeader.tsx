import { Container, ChatTitle, ChatSubtitle, CloseBtn, BackBtn } from "./styles";
import { FlexFlow } from "src/components/styles";
import { ChatHeaderProps } from "./types";
import useMainContext from "src/utils/contexts/main-context/useMainContext";
import useChatViewContext from "../../../../utils/context/useChatViewContext";

const ChatHeader = ({
    portrait,
    title,
    subtitle,
    closeChat,
}: ChatHeaderProps) => {
    const { isMobile } = useMainContext();
    return (
        <Container align="center" justify="space-between">
            {isMobile && <BackBtn onClick={closeChat} icon="ion:chevron-back"/>}
            <FlexFlow gap="18px">
                {portrait}
                <FlexFlow direction="column" gap="5px" justify="center">
                    <ChatTitle>{title}</ChatTitle>
                    <ChatSubtitle>{subtitle}</ChatSubtitle>
                </FlexFlow>
            </FlexFlow>
            {!isMobile && <CloseBtn onClick={closeChat} icon="octicon:x-16" />}
        </Container>
    );
};

export default ChatHeader;
