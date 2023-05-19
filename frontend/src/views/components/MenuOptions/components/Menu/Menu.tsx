import {
    Container,
    Option,
} from "./styles";
import { MenuProps } from "./types";

const Menu = ({ show, menuPosition }: MenuProps) => {
    
    const getClassName = () => {
        const classList: string[] = [];
        show && classList.push("show");
        menuPosition && classList.push(menuPosition);
        return classList.join(" ");
    };
    const className: string = getClassName();
    return (
        <Container className={className}>
            <Option color="var(--dark-1)">Editar</Option>
            <Option color="var(--red-3)">Eliminar</Option>
        </Container>
    );
};

export default Menu;
