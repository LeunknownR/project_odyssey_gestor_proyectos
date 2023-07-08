import UserImage from "src/views/components/UserImage/UserImage";
import { Container, ChatTitle, ChatSubtitle, CloseBtn } from "./styles";
import { FAKE_CHATS } from "../../mock";
import { FlexFlow } from "src/components/styles";
import { ChatHeaderProps } from "./types";

const ChatHeader = ({ portrait, title, subtitle }: ChatHeaderProps) => {
    return (
        <Container align="center" justify="space-between">
            <FlexFlow gap="18px">
                {portrait}
                {/* <UserImage
                    name={FAKE_CHATS.name}
                    surname={FAKE_CHATS.surname}
                    urlPhoto={FAKE_CHATS.urlPhoto}
                    className="medium"
                /> */}
                <FlexFlow direction="column" gap="5px">
                    <ChatTitle>{title}</ChatTitle>
                    <ChatSubtitle>{subtitle}</ChatSubtitle>
                </FlexFlow>
            </FlexFlow>
            <CloseBtn
                onClick={() => console.log("cierra")}
                icon="octicon:x-16"
            />
        </Container>
    );
};

export default ChatHeader;
