import { Container } from "./styles";
import { NameInitialsProps } from "../../types";

const NameInitials = ({ className, name, surname }: NameInitialsProps) => {
    const hasName = (): boolean => {
        return Boolean(name && surname);
    };
    return (
        <Container className={className}>
            <span>
                {hasName() ? `${name[0].toUpperCase()}${surname[0].toUpperCase()}` : "-"}
            </span>
        </Container>
    );
};

export default NameInitials;
