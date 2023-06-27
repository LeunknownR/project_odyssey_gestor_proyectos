import UserImage from "src/views/components/UserImage/UserImage";
import { HeaderContainer, ChatTitle, ChatSubtitle, TitleContainer, IconContainer} from "./styles";
import { FAKE_CHATS } from "../../mock";
import { Icon } from "@iconify/react/dist/iconify.js";

const ChatHeader = () => {
    return (
        <HeaderContainer>
            <UserImage
                name={FAKE_CHATS.name}
                surname={FAKE_CHATS.surname}
                urlPhoto={FAKE_CHATS.urlPhoto}
                className="medium"
            />
            <TitleContainer>
                <ChatTitle>
                    {FAKE_CHATS.name} {FAKE_CHATS.surname}
                </ChatTitle>
                <ChatSubtitle>{FAKE_CHATS.state}</ChatSubtitle>
            </TitleContainer>
            <IconContainer>
                <Icon icon="octicon:x-16" />
            </IconContainer>
        </HeaderContainer>
    );
};

export default ChatHeader;
