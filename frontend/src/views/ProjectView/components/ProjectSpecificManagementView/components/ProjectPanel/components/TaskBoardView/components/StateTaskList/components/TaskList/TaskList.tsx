import { useState, useRef } from "react";
import CreationTaskCard from "../CreationTaskCard/CreationTaskCard";
import TaskCard from "./components/TaskCard/TaskCard";
import { Container, Content } from "./styles";
import { TaskListProps } from "./types";
import AddTaskButton from "./components/AddTaskButton/AddTaskButton";
import { ProjectTaskState } from "src/entities/projectTasks/entities";

const TaskList = ({
    taskList, 
    state
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
        <Container className="custom-scrollbar">            
            <Content ref={taskListRef} className="task-state-section">
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