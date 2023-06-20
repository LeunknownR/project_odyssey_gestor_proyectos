import { forwardRef, useEffect, useRef } from "react";
import CommentList from "./components/CommentList/CommentList";
import CommentBox from "./components/CommentBox/CommentBox";
import Header from "./components/Header/Header";
import TaskForm from "./components/TaskForm/TaskForm";
import { Container, Content } from "./styles";
import { ModifyTaskMenuProps } from "./types";
import useTaskForm from "./utils/hooks/useTaskForm";
import useTaskBoardContext from "../../utils/contexts/useTaskBoardContext";
import SubtaskList from "./components/SubtaskList/SubtaskList";
import useUpdateMainInformationTask from "./utils/hooks/useUpdateMainInformationTask";

const ModifyTaskMenu = forwardRef<HTMLDivElement, ModifyTaskMenuProps>(({
    currentProjectTask,
    openModalDeleteTask
}, ref) => {
    //#region Custom hooks
    const { 
        socketIo,
        isTaskMenuOpen, 
        hideTaskMenu
    } = useTaskBoardContext(); 
    const isTaskMenuOpenRef = useRef<boolean>(false);
    const { form } = useTaskForm(
        currentProjectTask, 
        isTaskMenuOpen
    );
    const doUpdateTask = useUpdateMainInformationTask(form.value, socketIo);
    //#endregion
    useEffect(() => {
        isTaskMenuOpenRef.current = isTaskMenuOpen;
    }, [isTaskMenuOpen]);
    useEffect(() => {
        const $container: HTMLDivElement = ref?.current;
        if (!$container) return;
        const handler = (e: MouseEvent): void => {
            const $elementClicked = e.target as HTMLElement;
            if (
                !isTaskMenuOpenRef.current || 
                $container.contains($elementClicked) || 
                !document.body.contains($elementClicked) ||
                $elementClicked.classList.contains("modal") ||
                $elementClicked.closest(".task-card")
            ) return;
            hideTaskMenu();
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, [ref?.current]);
    const getClassName = (): string => {
        const classList: string[] = [];
        isTaskMenuOpen && classList.push("show");
        return classList.join(" ");
    }
    const renderContent = (): React.ReactNode => {
        if (!currentProjectTask) return null;
        const { name, comments } = currentProjectTask;
        return (
            <>
            <Header 
                name={name} 
                form={form}
                doUpdateTask={doUpdateTask}
                openModalDeleteTask={openModalDeleteTask}/>
            <Content className="custom-scrollbar">
                <TaskForm 
                    currentProjectTask={currentProjectTask} 
                    form={form}
                    doUpdateTask={doUpdateTask}/>
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
            className={getClassName()}
            tabIndex={0}
            ref={ref}>
            {renderContent()}
        </Container>
    );
});

export default ModifyTaskMenu;