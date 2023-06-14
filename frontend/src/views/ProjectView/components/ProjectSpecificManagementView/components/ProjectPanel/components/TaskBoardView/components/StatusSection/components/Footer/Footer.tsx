import { AddTaskButton } from "./styles";
import { FooterProps } from "./types";

const Footer = ({ showCreateTaskCard }: FooterProps) => {
    return (
        <AddTaskButton
            onClick={showCreateTaskCard}
            content="Agregar tarea"
            icon="material-symbols:add"
            padding="10px"
        />
    );
};

export default Footer;
