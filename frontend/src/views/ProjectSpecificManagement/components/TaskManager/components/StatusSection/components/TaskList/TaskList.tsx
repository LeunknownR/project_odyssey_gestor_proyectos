import TaskCard from "./components/TaskCard/TaskCard";
import { Container } from "./styles";
import { TaskListProps } from "./types";

const TaskList = ({ taskListInfo, openTaskMenu }: TaskListProps) => {
    return (
        <Container className="custom-scrollbar">
            {taskListInfo.map(taskInfo => (
                <TaskCard
                    key={taskInfo.id}
                    taskInfo={taskInfo}
                    openTaskMenu={openTaskMenu}
                />
            ))}
        </Container>
    );
};

export default TaskList;
