import { Container } from "./styles";
import { AddTaskButtonProps } from "./types";

const AddTaskButton = ({ showCreateTaskCard }: AddTaskButtonProps) => {
    return (
        <Container
            onClick={showCreateTaskCard}
            content="Agregar tarea"
            icon="material-symbols:add"
            padding="10px"
        />
    );
};

export default AddTaskButton;
