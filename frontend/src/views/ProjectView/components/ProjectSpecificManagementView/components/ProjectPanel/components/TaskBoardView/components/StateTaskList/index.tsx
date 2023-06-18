import Header from "./components/Header/Header";
import TaskList from "./components/TaskList/TaskList";
import { Container } from "./styles";
import { StateTaskListProps } from "./types";

const StateTaskList = ({
    stateName, state, taskList
}: StateTaskListProps) => {
    return (
        <Container className={`task-state-section ${state}`}>
            <Header stateName={stateName} />
            <TaskList
                taskList={taskList}
                state={state}/>
        </Container>
    );
};

export default StateTaskList;
