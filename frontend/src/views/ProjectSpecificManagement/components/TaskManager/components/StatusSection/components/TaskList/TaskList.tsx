import { forwardRef } from "react";
import CreationTaskCard from "../CreationTaskCard/CreationTaskCard";
import TaskCard from "./components/TaskCard/TaskCard";
import { Container } from "./styles";
import { TaskListProps } from "./types";

const TaskList = forwardRef<HTMLUListElement, TaskListProps>(({
    taskListInfo,
    openTaskMenu,
    status,
    createTaskCard,
    hideCreateTaskCard,
}, ref) => {
    return (
        <Container className="custom-scrollbar" ref={ref}>
            {taskListInfo.map(taskInfo => (
                <TaskCard
                    key={taskInfo.id}
                    taskInfo={taskInfo}
                    openTaskMenu={openTaskMenu}
                    status={status}
                />
            ))}
            {createTaskCard && <CreationTaskCard status={status} hideCreateTaskCard={hideCreateTaskCard} />}
        </Container>
    );
});

export default TaskList;
