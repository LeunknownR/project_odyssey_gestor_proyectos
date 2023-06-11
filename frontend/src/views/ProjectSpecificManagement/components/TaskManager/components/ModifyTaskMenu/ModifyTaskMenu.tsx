import CommentList from "./components/CommentList/CommentList";
import CommentBox from "./components/CommentBox/CommentBox";
import Header from "./components/Header/Header";
import TaskForm from "./components/TaskForm/TaskForm";
import { Container, Content, Wrapper } from "./styles";
import { ModifyTaskMenuProps } from "./types";
import SubtaskSection from "./components/SubtaskSection/SubtaskSection";

const ModifyTaskMenu = ({
    currentProjectTask,
    isTaskMenuOpen,
    closeTaskMenu,
}: ModifyTaskMenuProps) => {
    const renderContent = () => {
        if (!currentProjectTask) return null;
        const { name, comments } = currentProjectTask;
        return (
            <>
            <Header name={name} />
            <Content className="custom-scrollbar">
                <TaskForm currentProjectTask={currentProjectTask} />
                <SubtaskSection currentProjectTask={currentProjectTask} />
                {comments.length > 0 && <CommentList comments={comments} />}
            </Content>
            <CommentBox taskId={currentProjectTask.id} />
            </>
        );
    };
    return (
        <Container
            className={isTaskMenuOpen ? "show" : ""}
            tabIndex={0}
            onBlur={closeTaskMenu}
        >
            {renderContent()}
        </Container>
    );
};

export default ModifyTaskMenu;
