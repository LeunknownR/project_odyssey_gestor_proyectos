import { useState, useRef } from "react";
import CreationTaskCard from "../CreationTaskCard/CreationTaskCard";
import TaskCard from "./components/TaskCard/TaskCard";
import { Container } from "./styles";
import { TaskListProps } from "./types";
import AddTaskButton from "./components/AddTaskButton/AddTaskButton";
import { ProjectState } from "src/entities/project/enums";

const TaskList = ({
    taskListInfo, 
    state, 
    openTaskMenu
}: TaskListProps) => {
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
    return (
        <>
        <Container ref={taskListRef} className="custom-scrollbar">
            {taskListInfo.map(taskInfo => (
                <TaskCard
                    key={taskInfo.id}
                    taskInfo={taskInfo}
                    openTaskMenu={openTaskMenu}
                    state={state}
                />
            ))}
        {createTaskCard &&
        <CreationTaskCard 
            state={state} 
            hideCreateTaskCard={hideCreateTaskCard} />}
        </Container>
        {state !== ProjectState.Finalized && (
            <AddTaskButton showCreateTaskCard={showCreateTaskCard} />
        )}
        </>
    );
};

export default TaskList;
