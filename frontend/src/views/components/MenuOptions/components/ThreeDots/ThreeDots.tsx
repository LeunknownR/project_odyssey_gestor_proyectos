import { Container, Squares } from "./styles";
import { ThreeDotsProps } from "./types";

const ThreeDots = ({ onClick }: ThreeDotsProps) => {
    return (
        <Container onMouseDown={onClick}>
            <Squares></Squares>
            <Squares></Squares>
            <Squares></Squares>
        </Container>
    );
};

export default ThreeDots;
