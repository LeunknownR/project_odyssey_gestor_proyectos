import { Container } from "./styles";
import { ChatRoomProps } from "./types";
import useChatViewContext from "../../utils/context/useChatViewContext";

const ChatRoom = ({ render }: ChatRoomProps) => {
    const { isMobileChatOpen } = useChatViewContext();
    return (
        <Container direction="column" justify="center" className={isMobileChatOpen ? "open" : ""}>
            {render}
        </Container>
    );
};

export default ChatRoom;
