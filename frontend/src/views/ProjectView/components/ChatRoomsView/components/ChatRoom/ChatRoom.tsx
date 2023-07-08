import { Container } from "./styles";
import { ChatRoomProps } from "./types";

const ChatRoom = ({ render }: ChatRoomProps) => {
    return (
        <Container direction="column" justify="center">
            {render}
        </Container>
    );
};

export default ChatRoom;
