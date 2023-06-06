import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import TaskList from "./components/TaskList/TaskList";
import { Container } from "./styles";
import { StatusSectionProps } from "./types";

const StatusSection = ({ status, taskListInfo }: StatusSectionProps) => {
    return (
        <Container>
            <Header status={status} />
            <TaskList taskListInfo={taskListInfo} />
            <Footer/>
        </Container>
    );
};

export default StatusSection;
