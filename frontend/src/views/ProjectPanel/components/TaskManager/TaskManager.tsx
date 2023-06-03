import ModifyTaskMenu from "./components/ModifyTaskMenu/ModifyTaskMenu";
import StatusSection from "./components/StatusSection/StatusSection";
import { Container } from "./styles";

const TaskManager = () => {
    return (
        <>
        <Container>
            <StatusSection name="Pendientes" />
            <StatusSection name="En Curso" />
            <StatusSection name="Finalizadas" />
        </Container>
        <ModifyTaskMenu />
        </>
    );
};

export default TaskManager;
