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

const TaskForm = ({ currentProjectTask, form }: TaskFormProps) => {
<<<<<<< HEAD
    return (
        <Container direction="column" gap="20px" margin="0 30px 20px 0">
=======
    const { socketIo } = useTaskBoardContext();
    const { responsibleId, deadline, priorityId } = form.value;
    useEffect(() => {
        
    }, [responsibleId, deadline, priorityId]);
    return (
        <Container direction="column" gap="20px">
>>>>>>> aa42b7aa3719f58f00568b5af83fdebc1b27350f
            <ResponsibleField form={form} currentResponsible={currentProjectTask.responsible}/>
            <DeadlineField form={form}/>
            <PriorityField form={form}/>
            <DescriptionField form={form}/>
        </Container>
    );
};

export default TaskForm;
