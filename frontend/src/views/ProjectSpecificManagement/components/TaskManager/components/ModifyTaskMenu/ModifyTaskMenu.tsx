import CommentList from "./components/CommentList/CommentList";
import CommentBox from "./components/Footer/CommentBox";
import Header from "./components/Header/Header";
import SubtaskList from "./components/SubtaskList/SubtaskList";
import TaskForm from "./components/TaskForm/TaskForm";
import { AddSubtaskButton, Container, Content } from "./styles";
import { ModifyTaskMenuProps } from "./types";

const ModifyTaskMenu = ({ currentProjectTask }: ModifyTaskMenuProps) => {
    const renderContent = () => {
        if (!currentProjectTask) return null;
        const { name, subtasks, comments } = currentProjectTask;
        return (
            <>
            <Header name={name} />
            <Content className="custom-scrollbar">
                <TaskForm currentProjectTask={currentProjectTask}/>
                {subtasks.length > 0 && <SubtaskList currentProjectTask={currentProjectTask} />}
                <AddSubtaskButton
                    content="Agregar subtarea"
                    icon="material-symbols:add-circle"
                    onClick={() => console.log("GNOMO Subtask")}
                />
                {comments.length > 0 && <CommentList comments={comments} />}
            </Content>
            <CommentBox taskId={currentProjectTask.id}/>
            </>
        );
    };
    return (
        <Container className={currentProjectTask ? "show" : ""}>
            {renderContent()}
        </Container>
    );
};

export default ModifyTaskMenu;
