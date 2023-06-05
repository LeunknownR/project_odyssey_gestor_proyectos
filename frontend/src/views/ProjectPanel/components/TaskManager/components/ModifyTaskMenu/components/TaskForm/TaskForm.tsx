import DeadlineField from "./components/DeadlineField/DeadlineField";
import DescriptionField from "./components/DescriptionField/DescriptionField";
import PriorityField from "./components/PriorityField/PriorityField";
import ResponsibleField from "./components/ResponsibleField/ResponsibleField";
import { Container } from "./styles";

const TaskForm = () => {
    return (
        <Container direction="column" gap="20px">
            <ResponsibleField />
            <DeadlineField />
            <PriorityField />
            <DescriptionField />
        </Container>
    );
};

export default TaskForm;
