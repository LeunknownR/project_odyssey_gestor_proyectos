import { Container, Square } from "./styles";
import { ThreeDotsProps } from "./types";

const ThreeDots = ({ onClick }: ThreeDotsProps) => {
    return (
        <Container onMouseDown={onClick}>
            <Square></Square>
            <Square></Square>
            <Square></Square>
        </Container>
    );
};

export default ThreeDots;
