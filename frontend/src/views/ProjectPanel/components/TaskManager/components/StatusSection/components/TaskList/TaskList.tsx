import TaskCard from "./components/TaskCard/TaskCard";
import { Container } from "./styles";
import { TaskListProps } from "./types";

const TaskList = ({ taskListInfo }: TaskListProps) => {
    return (
        <Container className="custom-scrollbar">
            {taskListInfo.map(taskInfo => (
                <TaskCard taskInfo={taskInfo}/>
            ))}
        </Container>
    );
};

export default TaskList;
