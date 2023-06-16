import DeadlineField from "./components/DeadlineField/DeadlineField";
import DescriptionField from "./components/DescriptionField/DescriptionField";
import PriorityField from "./components/PriorityField/PriorityField";
import ResponsibleField from "./components/ResponsibleField/ResponsibleField";
import { Container } from "./styles";
import { TaskFormProps } from "./types";

const TaskForm = ({ 
    currentProjectTask, 
    form, changeTaskUpdateType
}: TaskFormProps) => {
    return (
        <Container direction="column" gap="20px">
            <ResponsibleField 
                form={form}
                changeTaskUpdateType={changeTaskUpdateType} 
                currentResponsible={currentProjectTask.responsible}/>
            <DeadlineField 
                form={form}
                changeTaskUpdateType={changeTaskUpdateType}/>
            <PriorityField 
                form={form}
                changeTaskUpdateType={changeTaskUpdateType}/>
            <DescriptionField 
                form={form}
                changeTaskUpdateType={changeTaskUpdateType}/>
        </Container>
    );
};

export default TaskForm;
