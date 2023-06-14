import Header from "./components/Header/Header";
import TaskList from "./components/TaskList/TaskList";
import { Container } from "./styles";
import { StatusSectionProps } from "./types";

const StatusSection = ({
    sectionName,
    state, taskListInfo,
    openTaskMenu,
}: StatusSectionProps) => {
    // const inputNewTaskNameRef = useRef<HTMLTextAreaElement>(null);
    //GNOMO PREGUNTÓN -> ESTA IMPLEMENTACIÓN CON TIMEOUT VALE O NO VALE
    return (
        <Container>
            <Header sectionName={sectionName} status={state} />
            <TaskList
                taskListInfo={taskListInfo}
                openTaskMenu={openTaskMenu}
                state={state}/>
        </Container>
    );
};

export default StatusSection;
