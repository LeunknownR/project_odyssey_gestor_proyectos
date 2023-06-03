import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import TaskForm from "./components/TaskForm/TaskForm";
import { Container, Content } from "./styles";

const ModifyTaskMenu = () => {
    return (
        <Container>
            <Header name="Crear script mysql"/>
            <Content>
                <TaskForm />
            </Content>
            <Footer />
        </Container>
    );
};

export default ModifyTaskMenu;
