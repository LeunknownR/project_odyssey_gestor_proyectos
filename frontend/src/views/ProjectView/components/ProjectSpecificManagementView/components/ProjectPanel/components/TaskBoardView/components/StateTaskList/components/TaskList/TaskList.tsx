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
import usePrevious from "src/utils/hooks/usePrevious";

const TaskList = ({
    taskList, 
    state, wasDraggingTaskCardRef
}: TaskListProps) => {
    const {
        socketIo,
        taskToBeChangedStateHandler 
    } = useTaskBoardContext();
    const containerRef = useRef<HTMLUListElement>(null);
    const taskToBeChangedStateRef = useRef<TaskToBeChangedState | null>(null);
    //#region States
    const [isCreatingTaskCard, setIsCreatingTaskCard] = useState<boolean>(false);
    //#endregion
    //#region Effects
    useEffect(() => {
        taskToBeChangedStateRef.current = taskToBeChangedStateHandler.value;
    }, [taskToBeChangedStateHandler.value]);
    useEffect(() => {
        const onMouseUp = (e: MouseEvent): void => mouseUpDocument(e);
        document.addEventListener("mouseup", onMouseUp);
        return () => document.addEventListener("mouseup", onMouseUp);
    }, []);
    const taskListPrev = usePrevious(taskList);
    useEffect(() => {
        checkIfTaskListLenghtChanged();
    }, [taskList]);
    //#endregion
    //#region Functions
    const checkIfTaskListLenghtChanged = (): void => {
        if (!taskListPrev || taskList.length === taskListPrev.length) return;
        scrollToListBottom();
    }
    const scrollToListBottom = (): void => {
        containerRef.current?.scrollTo({ top: containerRef.current.scrollHeight });
    };
    const showCreateTaskCard = (): void => {
        setIsCreatingTaskCard(true);
        scrollToListBottom();
    };
    const hideCreateTaskCard = (): void => {
        setIsCreatingTaskCard(false);
    };
    const mouseUpDocument = (e: MouseEvent): void => {
        const {
            clientX, 
            clientY, 
            button
        } = e;
        // Revisando si se dio click derecho
        if (button !== 0 || !taskToBeChangedStateRef.current) return;
        // Obteniendo a que elemento estaba apuntando el cursor cuando soltó el botón
        const $elementWhereDropCard: Element | null = document.elementFromPoint(clientX, clientY);
        // Verificando si el elemento existe y si es que hay una tarea que quiere cambiarse de estado
        if (!$elementWhereDropCard) return;
        // Obteniendo la sección de estado donde se soltó
        const $taskStateSection: HTMLElement = 
            $elementWhereDropCard?.closest(".task-state-section") as HTMLElement || 
            $elementWhereDropCard;
        // Revisando si se estuvo arrastrando la task card y si el estado de la lista actual es igual al estado donde se la soltó
        if (!wasDraggingTaskCardRef.current || !$taskStateSection.classList.contains(state)) return;
        wasDraggingTaskCardRef.current = false;
        // Revisando si fue un estado diferente al estado de la tarea que se quiere cambiar
        if (state === taskToBeChangedStateRef.current.state) return;
        changeTaskState();
    }
    const changeTaskState = (): void => {
        if (!taskToBeChangedStateRef.current) return;
        const projectTaskWithNewState: WSProjectTaskWithNewState = {
            taskId: taskToBeChangedStateRef.current.taskId,
            state
        };
        socketIo?.emit(
            WSProjectTaskServiceEvents.Collaborator.ChangeTaskState, 
            projectTaskWithNewState
        );
        taskToBeChangedStateHandler.fill(null);
    }
    const confirmWasDraggingTaskCard = (): void => {
        wasDraggingTaskCardRef.current = true;
    }
    //#endregion
    return (
        <>
        <Container ref={containerRef} className="custom-scrollbar">            
            <Content>
                {taskList.map(task => (
                    <TaskCard
                        key={task.id}
                        task={task}
                        state={state}
                        confirmWasDraggingTaskCard={confirmWasDraggingTaskCard}
                    />
                ))}
                {isCreatingTaskCard &&
                <CreationTaskCard 
                    state={state} 
                    hideCreateTaskCard={hideCreateTaskCard}/>}
            </Content>
        </Container>
        {state !== ProjectTaskState.Finalized && (
            <AddTaskButton showCreateTaskCard={showCreateTaskCard} />
        )}
        </>
    );
};

export default TaskList;