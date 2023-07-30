import NoContent from "src/views/components/NoContent/NoContent";
import { Container } from "./styles";
import noChats from "src/images/no-chats.png";
import { NoChatsProps } from "./types";

const NoChats = ({ title, subtitle }: NoChatsProps) => {
    return (
        <Container>
            <NoContent
                img={noChats}
                title={title}
                subtitle={subtitle}
                titleColor="var(--white-1)"
            />
        </Container>
    );
};

export default NoChats;
