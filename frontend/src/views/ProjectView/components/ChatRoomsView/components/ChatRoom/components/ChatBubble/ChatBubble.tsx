import { FAKE_CHATS } from "../../mock";
import { UserMessages } from "./styles";


const ChatBubble = () => {
    return (
        <UserMessages>{FAKE_CHATS.UserMessages}</UserMessages>
    );
};

export default ChatBubble;