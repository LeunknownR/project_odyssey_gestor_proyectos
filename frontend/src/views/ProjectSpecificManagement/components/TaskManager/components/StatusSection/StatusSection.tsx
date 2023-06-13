import { useRef, useState } from "react";
import { ProjectState } from "src/entities/project/enums";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import TaskList from "./components/TaskList/TaskList";
import { Container } from "./styles";
import { StatusSectionProps } from "./types";

const StatusSection = ({
    sectionName,
    status,
    taskListInfo,
    openTaskMenu,
}: StatusSectionProps) => {
    const [createTaskCard, setCreateTaskCard] = useState(false);
    const taskListRef = useRef<HTMLUListElement>(null);
    // const inputNewTaskNameRef = useRef<HTMLTextAreaElement>(null);
    //GNOMO PREGUNTÓN -> ESTA IMPLEMENTACIÓN CON TIMEOUT VALE O NO VALE
    const scrollToHistoryBottom = (): void => {
        setTimeout(() => {
            taskListRef.current?.scrollTo({
                behavior: "smooth",
                top: taskListRef.current.scrollHeight,
            });
        }, 1);
    };
    const showCreateTaskCard = (): void => {
        setCreateTaskCard(true);
        scrollToHistoryBottom();
    };
    const hideCreateTaskCard = (): void => {
        setCreateTaskCard(false);
    };
    return (
        <Container>
            <Header sectionName={sectionName} status={status} />
            <TaskList
                taskListInfo={taskListInfo}
                openTaskMenu={openTaskMenu}
                status={status}
                createTaskCard={createTaskCard}
                hideCreateTaskCard={hideCreateTaskCard}
                ref={taskListRef}
            />
            {status !== ProjectState.Finalized && (
                <Footer showCreateTaskCard={showCreateTaskCard} />
            )}
        </Container>
    );
};

export default StatusSection;
