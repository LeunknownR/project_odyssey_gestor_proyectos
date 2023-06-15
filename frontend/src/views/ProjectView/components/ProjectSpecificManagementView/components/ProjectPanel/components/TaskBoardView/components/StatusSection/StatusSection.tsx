import Header from "./components/Header/Header";
import TaskList from "./components/TaskList/TaskList";
import { Container } from "./styles";
import { StatusSectionProps } from "./types";

const StatusSection = ({
    sectionName,
    state, taskListInfo,
    openTaskMenu,
}: StatusSectionProps) => {
    return (
        <Container>
            <Header sectionName={sectionName} />
            <TaskList
                taskListInfo={taskListInfo}
                openTaskMenu={openTaskMenu}
                state={state}/>
        </Container>
    );
};

export default StatusSection;
