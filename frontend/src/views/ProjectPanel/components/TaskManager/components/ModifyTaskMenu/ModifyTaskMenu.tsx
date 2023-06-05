import CommentList from "./components/CommentList/CommentList";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import SubtaskList from "./components/SubtaskList/SubtaskList";
import TaskForm from "./components/TaskForm/TaskForm";
import { Container, Content } from "./styles";

const COMMENT_TEST = [
    {
        id: 1,
        content: "COMENTARIO COMENTARIO COMENTARIO comentario",
        dateTime: 1290393320,
        collaborator: {
            id: 1,
            name: "Diego Egdardo",
            surname: "Torres de la Cruz",
            urlPhoto: null,
        },
    },
];
const SUBTASK_TEST = [
    {
        id: 1,
        name: "Modelado de base de datos",
        checked: true,
    },
    {
        id: 2,
        name: "Modelame esta",
        checked: false,
    },
];
const ModifyTaskMenu = () => {
    return (
        <Container>
            <Header name="Crear script mysql" />
            <Content className="custom-scrollbar">
                <TaskForm />
                <SubtaskList subtasks={SUBTASK_TEST} />
                <CommentList comments={COMMENT_TEST} />
            </Content>
            <Footer />
        </Container>
    );
};

export default ModifyTaskMenu;
