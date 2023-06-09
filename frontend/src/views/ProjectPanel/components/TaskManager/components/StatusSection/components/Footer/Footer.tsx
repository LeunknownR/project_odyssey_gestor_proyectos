import { AddTaskButton } from "./styles";

const Footer = () => {
    return (
        <AddTaskButton
            onClick={() => console.log("asd")}
            content="Agregar tarea"
            icon="material-symbols:add"
            padding="10px"
        />
    );
};

export default Footer;
