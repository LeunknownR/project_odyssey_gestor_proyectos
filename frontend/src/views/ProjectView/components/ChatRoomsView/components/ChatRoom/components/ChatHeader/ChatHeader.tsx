import UserImage from "src/views/components/UserImage/UserImage";
import {
    Container,
    ChatTitle,
    ChatSubtitle,
    TitleContainer,
    CloseBtn,
} from "./styles";
import { FAKE_CHATS } from "../../mock";
import { FlexFlow } from "src/components/styles";

const ChatHeader = () => {
    return (
        <Container align="center" justify="space-between">
            <FlexFlow gap="18px">
                <UserImage
                    name={FAKE_CHATS.name}
                    surname={FAKE_CHATS.surname}
                    urlPhoto={FAKE_CHATS.urlPhoto}
                    className="medium"
                />
                <FlexFlow direction="column" gap="5px">
                    <ChatTitle>
                        {FAKE_CHATS.name} {FAKE_CHATS.surname}
                    </ChatTitle>
                    <ChatSubtitle>{FAKE_CHATS.state}</ChatSubtitle>
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
