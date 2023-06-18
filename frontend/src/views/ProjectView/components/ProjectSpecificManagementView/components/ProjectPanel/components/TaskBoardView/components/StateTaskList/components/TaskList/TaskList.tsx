import { useState, useRef, useEffect } from "react";
import CreationTaskCard from "../CreationTaskCard/CreationTaskCard";
import TaskCard from "./components/TaskCard/TaskCard";
import { Container, Content } from "./styles";
import { TaskListProps } from "./types";
import AddTaskButton from "./components/AddTaskButton/AddTaskButton";
import { ProjectTaskState } from "src/entities/projectTasks/entities";
import useTaskBoardContext from "../../../../utils/contexts/useTaskBoardContext";
import { TaskToBeChangedState } from "../../../../utils/contexts/types";

const TaskList = ({
    taskList, 
    state
}: TaskListProps) => {
    const { taskToBeChanged } = useTaskBoardContext();
    const taskListRef = useRef<HTMLUListElement>(null);
    const [createTaskCard, setCreateTaskCard] = useState<boolean>(false);
    const scrollToListBottom = (): void => {
        setTimeout(() => {
            taskListRef.current?.scrollTo({
                behavior: "smooth",
                top: taskListRef.current.scrollHeight,
            });
        }, 100);
    };
    const showCreateTaskCard = (): void => {
        setCreateTaskCard(true);
        scrollToListBottom();
    };
    const hideCreateTaskCard = (): void => {
        setCreateTaskCard(false);
    };
    const taskToBeChangedStateRef = useRef<TaskToBeChangedState | null>();
    useEffect(() => {
        taskToBeChangedStateRef.current = taskToBeChanged.value;
    }, [taskToBeChanged]);
    useEffect(() => {
        const onMouseUp = (e: MouseEvent): void => {
            const { target, button } = e;
            if (!target || button !== 0) return;
            const $elementWhereDropCard = document.elementFromPoint(e.clientX, e.clientY);
            if (
                !$elementWhereDropCard ||
                !$elementWhereDropCard
                    .classList
                    .contains("task-state-section")
            ) return;
            console.log($elementWhereDropCard);
            // if (
            //     // taskToBeChangedStateRef.current && 
            //     // taskToBeChangedStateRef.current.state !== state &&
            //     $stateTaskColumnDroppedCard.classList.contains("task-state-section")) {
            //     console.log(taskToBeChangedStateRef.current);
            //     console.log(state);
            //     taskToBeChanged.fill(null);
            //     return;
            // }
        };
        document.addEventListener("mouseup", onMouseUp);
        return () => document.addEventListener("mouseup", onMouseUp);
    }, []);
    return (
        <>
        <Container className="custom-scrollbar">            
            <Content ref={taskListRef}>
                {taskList.map(task => (
                    <TaskCard
                        key={task.id}
                        task={task}
                        state={state}
                    />
                ))}
                {createTaskCard &&
                <CreationTaskCard 
                    state={state} 
                    hideCreateTaskCard={hideCreateTaskCard} />}
            </Content>
        </Container>
        {state !== ProjectTaskState.Finalized && (
            <AddTaskButton showCreateTaskCard={showCreateTaskCard} />
        )}
        </>
    );
};

export default TaskList;