// import { FAKE_CHATS } from "./mock";
import { Container, List } from "./styles";
import { ChatListProps } from "./types";

function PreviewChatList<I>({ previewChatList, renderItem }: ChatListProps<I>) {
    return (
        <Container>
            <List direction="column" gap="15px" className="custom-scrollbar">
                {previewChatList.map(renderItem)}
            </List>
        </Container>
    );
}

export default PreviewChatList;
