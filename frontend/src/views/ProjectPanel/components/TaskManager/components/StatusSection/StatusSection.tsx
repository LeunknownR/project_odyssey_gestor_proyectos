import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import TaskList from "./components/TaskList/TaskList";
import { Container } from "./styles";
import { StatusSectionProps } from "./types";

const StatusSection = ({ name }: StatusSectionProps) => {
    return (
        <Container>
            <Header name={name} />
            <TaskList />
            <Footer/>
        </Container>
    );
};

export default StatusSection;
