<<<<<<< HEAD
=======
import { useEffect } from "react";
import useTaskBoardContext from "../../../../utils/contexts/useTaskBoardContext";
>>>>>>> aa42b7aa3719f58f00568b5af83fdebc1b27350f
import DeadlineField from "./components/DeadlineField/DeadlineField";
import DescriptionField from "./components/DescriptionField/DescriptionField";
import PriorityField from "./components/PriorityField/PriorityField";
import ResponsibleField from "./components/ResponsibleField/ResponsibleField";
import { Container } from "./styles";
import { TaskFormProps } from "./types";
import WSProjectTaskServiceEvents from "src/services/websockets/services/projectTasks/events";

const TaskForm = ({ currentProjectTask, form }: TaskFormProps) => {
    const { socketIo } = useTaskBoardContext();
    const { 
        id, name,
        description, responsibleId, 
        deadline, priorityId 
    } = form.value;
    const getUpdateTaskMainInfo = (): any => { 
        return {
            taskId: id,
            responsibleId,
            name, description,
            deadline, priorityId
        }; 
    }
    return (
        <Container direction="column" gap="20px">
            <ResponsibleField form={form} currentResponsible={currentProjectTask.responsible}/>
            <DeadlineField form={form}/>
            <PriorityField form={form}/>
            <DescriptionField form={form}/>
        </Container>
    );
};

export default TaskForm;
