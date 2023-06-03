import TaskCard from "./components/TaskCard/TaskCard";
import { Container } from "./styles";

const TEST = [1, 2, 3, 4, 5, 6];
const TaskList = () => {
    return (
        <Container className="custom-scrollbar">
            {TEST.map(test => (
                <TaskCard />
            ))}
        </Container>
    );
};

export default TaskList;
