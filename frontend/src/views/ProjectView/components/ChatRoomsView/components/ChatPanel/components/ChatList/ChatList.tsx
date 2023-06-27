import { FAKE_CHATS } from "./mock";
import { Chat, Container, List } from "./styles";

const ChatList = () => {
    return (
        <Container>
            <List direction="column" gap="15px" className="custom-scrollbar">
                {FAKE_CHATS.map(
                    ({ id, content, datetime, name, surname, urlPhoto }) => 
                        <Chat
                            key={id}
                            id={id}
                            content={content}
                            datetime={datetime}
                            name={name}
                            surname={surname}
                            urlPhoto={urlPhoto}
                            size="medium"
                        />
                )}
            </List>
        </Container>
    );
};

export default ChatList;
