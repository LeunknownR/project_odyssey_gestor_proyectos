import NoContent from "src/views/components/NoContent/NoContent";
import { Container } from "./styles";
import noChats from "src/images/no-chats.png"

const NoChats = () => {
    return (
        <Container>
            <NoContent
                img={noChats}
                title="Sin chats disponibles"
                titleColor="var(--white-1)"
            />
        </Container>
    );
};

export default NoChats;
