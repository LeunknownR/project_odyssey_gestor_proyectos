import TaskCard from "./components/TaskCard/TaskCard";
import { Container } from "./styles";
import { TaskListProps } from "./types";

const TaskList = ({ taskListInfo, openTaskMenu, status }: TaskListProps) => {
    return (
        <Container className="custom-scrollbar">
            {taskListInfo.map(taskInfo => (
                <TaskCard
                    key={taskInfo.id}
                    taskInfo={taskInfo}
                    openTaskMenu={openTaskMenu}
                    status={status}
                />
            ))}
        </Container>
    );
};

export default TaskList;
