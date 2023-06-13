import { FlexFlow } from "src/components/styles";
import {
    Container,
    StateSwordTag,
    TransparentTextField,
    UnselectedResponsible,
} from "./styles";
import NoResponsible from "src/images/no-responsible.svg";
import TaskPriorityNullImage from "src/images/test2.svg";
import { ChangeEvent, KeyboardEvent, useState } from "react";
import { CreationTaskCardProps } from "./types";
import useTaskBoardContext from "../../../../utils/contexts/useTaskBoardContext";
import WSProjectTaskServiceEvents from "src/services/websockets/services/projectTasks/events";
import { Socket } from "socket.io-client";

const CreationTaskCard = ({ status, hideCreateTaskCard }: CreationTaskCardProps) => {
    const [newTaskName, setNewTaskName] = useState<string>("");
    const { socketIo } = useTaskBoardContext();
    const changeNewTaskName = ({target: { value }}: ChangeEvent<HTMLInputElement>) => {
        setNewTaskName(value);
    };
    const createTask = () => {
        if (!socketIo) return;
        const newTask: any = {
            name: newTaskName,
            state: status
        };
        const socketIoValue: Socket = socketIo.connect();
        socketIoValue.emit(WSProjectTaskServiceEvents.Collaborator.CreateTask, newTask);
        hideCreateTaskCard();
    }
    const onKeyDownHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter") 
            createTask()
    };
    const onBlurHandler = () => {
        if (!newTaskName) 
            hideCreateTaskCard();
        createTask()
    }
    return (
        <Container tabIndex={0} onBlur={onBlurHandler}>
            <TransparentTextField
                placeholder="Nombre de la tarea"
                value={newTaskName}
                onChange={changeNewTaskName}
                characterCounter={false}
                maxLength={200}
                onKeyDown={onKeyDownHandler}
            />
            <FlexFlow justify="space-between">
                <UnselectedResponsible src={NoResponsible} />
                <StateSwordTag src={TaskPriorityNullImage} />
            </FlexFlow>
        </Container>
    );
};

export default CreationTaskCard;
