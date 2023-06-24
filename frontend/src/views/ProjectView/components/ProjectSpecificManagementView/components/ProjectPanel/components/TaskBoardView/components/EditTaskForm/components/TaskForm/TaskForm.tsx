import DeadlineField from "./components/DeadlineField/DeadlineField";
import DescriptionField from "./components/DescriptionField/DescriptionField";
import PriorityField from "./components/PriorityField/PriorityField";
import ResponsibleField from "./components/ResponsibleField/ResponsibleField";
import { Container } from "./styles";
import { TaskFormProps } from "./types";

const TaskForm = ({ 
    form, doUpdateTask
}: TaskFormProps) => {
    return (
        <Container direction="column" gap="20px">
            <ResponsibleField 
                form={form}
                doUpdateTask={doUpdateTask}/>
            <DeadlineField 
                form={form}
                doUpdateTask={doUpdateTask}/>
            <PriorityField 
                form={form}
                doUpdateTask={doUpdateTask}/>
            <DescriptionField 
                form={form}
                doUpdateTask={doUpdateTask}/>
        </Container>
    );
};

export default TaskForm;
