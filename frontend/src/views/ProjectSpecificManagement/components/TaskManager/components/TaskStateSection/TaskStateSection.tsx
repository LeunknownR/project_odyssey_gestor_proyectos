import { ProjectState } from "src/entities/project/enums";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import TaskList from "./components/TaskList/TaskList";
import { Container } from "./styles";
import { ProjectTaskStateSectionProps } from "./types";

const TaskStateSection = ({
    sectionName,
    status,
    taskListInfo,
    openTaskMenu,
    changeProjectTaskState
}: ProjectTaskStateSectionProps) => {
    return (
        <Container>
            <Header sectionName={sectionName} status={status} />
            <TaskList
                taskListInfo={taskListInfo}
                openTaskMenu={openTaskMenu}
                status={status}
            />
            {status !== ProjectState.Finalized && <Footer />}
        </Container>
    );
};

export default TaskStateSection;
