import DeadlineField from "./components/DeadlineField/DeadlineField";
import DescriptionField from "./components/DescriptionField/DescriptionField";
import PriorityField from "./components/PriorityField/PriorityField";
import ResponsibleField from "./components/ResponsibleField/ResponsibleField";
import { Container } from "./styles";
import { TaskFormProps } from "./types";

const TaskForm = ({ currentProjectTask, form }: TaskFormProps) => {
    return (
        <Container direction="column" gap="20px" margin="0 30px 20px 0">
            <ResponsibleField form={form} currentResponsible={currentProjectTask.responsible}/>
            <DeadlineField form={form}/>
            <PriorityField form={form}/>
            <DescriptionField form={form}/>
        </Container>
    );
};

export default TaskForm;
