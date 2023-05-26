import { Container } from "./styles";
import { NameInitialsProps } from "../types";

const NameInitials = ({
    className,
    name, surname
}: NameInitialsProps) => {
    return (
        <Container className={className}>
            <span>{name[0]}{surname[0]}</span>
        </Container>
    );
}

export default NameInitials;