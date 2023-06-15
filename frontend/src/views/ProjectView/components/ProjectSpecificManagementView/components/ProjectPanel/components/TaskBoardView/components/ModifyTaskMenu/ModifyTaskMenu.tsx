import { forwardRef, useEffect } from "react";
import CommentList from "./components/CommentList/CommentList";
import CommentBox from "./components/CommentBox/CommentBox";
import Header from "./components/Header/Header";
import TaskForm from "./components/TaskForm/TaskForm";
import { Container, Content } from "./styles";
import { ModifyTaskMenuProps } from "./types";
import useTaskForm from "./utils/hooks/useTaskForm";
import useTaskBoardContext from "../../utils/contexts/useTaskBoardContext";
import SubtaskList from "./components/SubtaskList/SubtaskList";

const ModifyTaskMenu = forwardRef<HTMLDivElement, ModifyTaskMenuProps>(({
    currentProjectTask, projectTaskBoard,
    hideTaskMenu
}, ref) => {
    const { isTaskMenuOpen } = useTaskBoardContext(); 
    const { form } = useTaskForm(
        currentProjectTask, 
        isTaskMenuOpen,
        projectTaskBoard
    );
    useEffect(() => {
        const $container = ref.current;
        if (!$container) return;
        const handler = (e: MouseEvent): void => {
            if ($container.contains(e.target) || !document.body.contains(e.target as Node)) return;
            hideTaskMenu();
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, [ref.current]);
    //#region Functions
    const renderContent = (): React.ReactNode => {
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
    //#endregion
    return (
        <Container
            className={isTaskMenuOpen ? "show" : ""}
            tabIndex={0}
            ref={ref}>
            {renderContent()}
        </Container>
    );
});

export default ModifyTaskMenu;
