import {forwardRef} from "react";
import CommentList from "./components/CommentList/CommentList";
import CommentBox from "./components/CommentBox/CommentBox";
import Header from "./components/Header/Header";
import TaskForm from "./components/TaskForm/TaskForm";
import { Container, Content } from "./styles";
import { ModifyTaskMenuProps } from "./types";
import useTaskForm from "./utils/hooks/useTaskForm";
import useTaskBoardContext from "../../utils/contexts/useTaskBoardContext";
import SubtaskList from "./components/SubtaskList/SubtaskList";

const ModifyTaskMenu = forwardRef<HTMLElement, ModifyTaskMenuProps>(({
    currentProjectTask,
    openTaskMenu,
    closeTaskMenu,
}, ref) => {
    const {isTaskMenuOpen} = useTaskBoardContext();
    const {form} = useTaskForm(currentProjectTask, isTaskMenuOpen)
    const renderContent = () => {
        if (!currentProjectTask) return null;
        const { name, comments } = currentProjectTask;
        return (
            <>
            <Header name={name} />
            <Content className="custom-scrollbar">
                <TaskForm currentProjectTask={currentProjectTask} form={form}/>
                {/* <SubtaskSection currentProjectTask={currentProjectTask} /> */}
                <SubtaskList currentProjectTask={currentProjectTask} />
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
            onFocus={openTaskMenu}
            onBlur={closeTaskMenu}
            ref={ref}
        >
            {renderContent()}
        </Container>
    );
});

export default ModifyTaskMenu;
