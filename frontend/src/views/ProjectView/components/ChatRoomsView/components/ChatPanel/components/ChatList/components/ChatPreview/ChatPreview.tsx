import {
    ChatPreviewTitle,
    Container,
    Content,
    Date,
    NameDateWrapper,
    Wrapper,
} from "./styles";
import { messageDateFormat } from "src/utils/dates";
import { ChatPreviewProps } from "./types";

const ChatPreview = ({ portrait, title, datetime, message, onClick, active }: ChatPreviewProps) => {
    return (
        <Container align="center" gap="12px" onClick={onClick} className={active ? "active" : ""}>
            {portrait}
            <Wrapper direction="column" gap="4px">
                <NameDateWrapper gap="8px">
                    <ChatPreviewTitle maxWidth={datetime ? "250px" : "300px"}>
                        {title}
                    </ChatPreviewTitle>
                    {datetime && <Date>{messageDateFormat(datetime)}</Date>}
                </NameDateWrapper>
                {message && <Content>{message}</Content>}
            </Wrapper>
        </Container>
    );
};

export default ChatPreview;
