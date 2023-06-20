import { useEffect, useRef } from "react";
import { FlexFlow } from "src/components/styles";
import {
    Container,
    EmptyTaskPriority,
    TransparentTextField,
    UnselectedResponsible,
} from "./styles";
import NoResponsible from "src/images/no-responsible.svg";
import emptyTaskPriorityImg from "src/images/no-priority.svg";
import { ChangeEvent, KeyboardEvent, useState } from "react";
import { CreationTaskCardProps } from "./types";
import useTaskBoardContext from "../../../../utils/contexts/useTaskBoardContext";
import WSProjectTaskServiceEvents from "src/services/websockets/services/projectTasks/events";

const CreationTaskCard = ({
    state, hideCreateTaskCard
}: CreationTaskCardProps) => {
    const [newTaskName, setNewTaskName] = useState<string>("");
    const { socketIo } = useTaskBoardContext();
    const containerRef = useRef<HTMLLIElement>(null);
    useEffect(() => {
        if (!containerRef.current) return;
        containerRef.current.querySelector("textarea")?.focus();
    }, [containerRef.current]);
    const changeNewTaskName = ({
        target: { value },
    }: ChangeEvent<HTMLTextAreaElement>) => {
        setNewTaskName(value);
    }
    const createTask = (): void => {
        if (!socketIo) return;
        const newTask: any = {
            name: newTaskName,
            state: state,
        };
        socketIo.emit(
            WSProjectTaskServiceEvents.Collaborator.CreateTask,
            newTask
        );
        hideCreateTaskCard();
    };
    const isValidTaskName = (): boolean => {
        return newTaskName.trim().length > 0;
    }
    const onKeyDownHandler = (e: KeyboardEvent<HTMLTextAreaElement>): void => {
        if (e.key === "Enter") {
            e.preventDefault();
            if (isValidTaskName()) 
                createTask();
            return;
        }
        if (!isValidTaskName() && e.key === "Backspace") 
            hideCreateTaskCard();
    };
    const onBlur = () => {
        if (isValidTaskName()) {
            createTask();
            return;
        }
        hideCreateTaskCard();
    };
    return (
        <Container 
            ref={containerRef}
            tabIndex={0}>
            <TransparentTextField
                placeholder="Nombre de la tarea"
                value={newTaskName}
                onChange={changeNewTaskName}
                characterCounter={false}
                maxLength={50}
                onBlur={onBlur}
                onKeyDown={onKeyDownHandler}
            />
            <FlexFlow justify="space-between">
                <UnselectedResponsible src={NoResponsible} />
                <EmptyTaskPriority src={emptyTaskPriorityImg} />
            </FlexFlow>
        </Container>
    );
};

export default CreationTaskCard;
