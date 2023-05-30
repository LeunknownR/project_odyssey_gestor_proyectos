import { Title, Container } from "./styles";
import { TitleHeaderProps } from "./types";

const TitleHeader = ({ text }: TitleHeaderProps) => {
    return (
        <Container>
            <Title>{text}</Title>
        </Container>
    );
};

export default TitleHeader;
