import Header from "./components/Header/Header";
import TaskList from "./components/TaskList/TaskList";
import { Container } from "./styles";
import { TaskListOfStateProps } from "./types";

const TaskListOfState = ({
    sectionName,
    state, taskListInfo
}: TaskListOfStateProps) => {
    return (
        <Container>
            <Header sectionName={sectionName} />
            <TaskList
                taskListInfo={taskListInfo}
                state={state}/>
        </Container>
    );
};

export default TaskListOfState;
