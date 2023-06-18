import { useState, useRef, useEffect } from "react";
import CreationTaskCard from "../CreationTaskCard/CreationTaskCard";
import TaskCard from "./components/TaskCard/TaskCard";
import { Container, Content } from "./styles";
import { TaskListProps } from "./types";
import AddTaskButton from "./components/AddTaskButton/AddTaskButton";
import { ProjectTaskState } from "src/entities/projectTasks/entities";
import useTaskBoardContext from "../../../../utils/contexts/useTaskBoardContext";
import { TaskToBeChangedState } from "../../../../utils/contexts/types";
import { WSProjectTaskWithNewState } from "src/services/websockets/services/projectTasks/utils/entities";
import WSProjectTaskServiceEvents from "src/services/websockets/services/projectTasks/events";

const TaskList = ({
    taskList, 
    state
}: TaskListProps) => {
    const { 
        socketIo,
        taskToBeChangedStateHandler 
    } = useTaskBoardContext();
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
        taskToBeChangedStateRef.current = taskToBeChangedStateHandler.value;
    }, [taskToBeChangedStateHandler]);
    useEffect(() => {
        const onMouseUp = (e: MouseEvent): void => {
            const {
                clientX, 
                clientY, 
                button
            } = e;
            if (button !== 0) return;
            const $elementWhereDropCard = document.elementFromPoint(clientX, clientY);
            if (
                !$elementWhereDropCard ||
                !taskToBeChangedStateRef.current
            ) return;
            const $taskStateSection: HTMLElement = $elementWhereDropCard?.closest(".task-state-section") as HTMLElement || $elementWhereDropCard;
            if ($taskStateSection) {
                if (
                    $taskStateSection.classList.contains(state) &&
                    state !== taskToBeChangedStateRef.current.state) 
                    changeTaskState();
            }
        };
        document.addEventListener("mouseup", onMouseUp);
        return () => document.addEventListener("mouseup", onMouseUp);
    }, []);
    const changeTaskState = (): void => {
        if (!taskToBeChangedStateRef.current) return;
        const projectTaskWithNewState: WSProjectTaskWithNewState = {
            taskId: taskToBeChangedStateRef.current.taskId,
            state
        };
        socketIo?.emit(
            WSProjectTaskServiceEvents.Collaborator.ChangeTaskState, projectTaskWithNewState
        );
        taskToBeChangedStateHandler.fill(null);
    }
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