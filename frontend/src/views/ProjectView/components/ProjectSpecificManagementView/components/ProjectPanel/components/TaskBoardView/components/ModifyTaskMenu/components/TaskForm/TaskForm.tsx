import WSProjectTaskServiceEvents from "src/services/websockets/services/projectTasks/events";
import useTaskBoardContext from "../../../../utils/contexts/useTaskBoardContext";
import DeadlineField from "./components/DeadlineField/DeadlineField";
import DescriptionField from "./components/DescriptionField/DescriptionField";
import PriorityField from "./components/PriorityField/PriorityField";
import ResponsibleField from "./components/ResponsibleField/ResponsibleField";
import { Container } from "./styles";
import { TaskFormProps } from "./types";
import { WSProjectTaskMainInformation } from "src/services/websockets/services/projectTasks/utils/entities";

const TaskForm = ({ currentProjectTask, form }: TaskFormProps) => {
    const { socketIo } = useTaskBoardContext();
    const {  
        id, name,
        description, responsibleId, 
        deadline, priorityId 
    } = form.value;
    const getUpdateTaskMainInfo = (): WSProjectTaskMainInformation => { 
        return {
            taskId: id || 0,
            responsibleId: responsibleId || null,
            name, description,
            deadline, priorityId
        };
    }
    const updateTaskMainInfo = (): void => {
        socketIo?.emit(WSProjectTaskServiceEvents.Collaborator.UpdateTaskMainInfo, getUpdateTaskMainInfo());
    }
    return (
        <Container direction="column" gap="20px">
            <ResponsibleField 
                form={form}
                updateTaskMainInfo={updateTaskMainInfo} 
                currentResponsible={currentProjectTask.responsible}/>
            <DeadlineField 
                form={form}
                updateTaskMainInfo={updateTaskMainInfo}/>
            <PriorityField 
                form={form}
                updateTaskMainInfo={updateTaskMainInfo}/>
            <DescriptionField 
                form={form}
                updateTaskMainInfo={updateTaskMainInfo}/>
        </Container>
    );
};

export default TaskForm;
