import DeadlineField from "./components/DeadlineField/DeadlineField";
import PriorityField from "./components/PriorityField/PriorityField";
import ResponsibleField from "./components/ResponsibleField/ResponsibleField";
import { Container } from "./styles";

const TaskForm = () => {
    return (
        <Container direction="column">
            <ResponsibleField />
            <DeadlineField />
            <PriorityField />
        </Container>
    );
};

export default TaskForm;
