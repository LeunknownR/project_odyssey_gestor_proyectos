import { useEffect, useRef } from "react";
import CommentList from "./components/CommentList/CommentList";
import CommentBox from "./components/CommentBox/CommentBox";
import Header from "./components/Header/Header";
import TaskForm from "./components/TaskForm/TaskForm";
import { Container, Content } from "./styles";
import { EditTaskFormProps } from "./types";
import useTaskForm from "./utils/hooks/useTaskForm";
import useTaskBoardContext from "../../utils/contexts/useTaskBoardContext";
import SubtaskList from "./components/SubtaskList/SubtaskList";
import useUpdateMainInformationTask from "./utils/hooks/useUpdateMainInformationTask";
import ChangeStateModal from "./components/ChangeStateModal";
import useModal from "src/components/Modal/utils/hooks/useModal";

const EditTaskForm = ({
    openModalDeleteTask,
    containerRef
}: EditTaskFormProps) => {
    //#region Custom hooks
    const { 
        socketIo,
        currentProjectTask,
        isEditTaskFormOpen, 
        hideEditTaskForm
    } = useTaskBoardContext(); 
    const contentRef = useRef<boolean>(false);
    const editTaskFormContentRef = useRef<HTMLDivElement | null>(null);
    const { form } = useTaskForm(
        currentProjectTask, 
        isEditTaskFormOpen
    );
    const doUpdateTask = useUpdateMainInformationTask(form.value, socketIo);
    const changeStateModal = useModal();
    //#endregion
    useEffect(() => {
        contentRef.current = isEditTaskFormOpen;
    }, [isEditTaskFormOpen]);
    useEffect(() => {
        const $container: HTMLDivElement | null = containerRef.current;
        if (!$container) return;
        const handler = (e: MouseEvent): void => {
            const $elementClicked = e.target as HTMLElement;
            if (
                !contentRef.current || 
                $container.contains($elementClicked) || 
                !document.body.contains($elementClicked) ||
                $elementClicked.classList.contains("modal") ||
                $elementClicked.closest(".task-card")
            ) return;
            hideEditTaskForm();
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, [containerRef?.current]);
    const getClassName = (): string => {
        const classList: string[] = [];
        isEditTaskFormOpen && classList.push("show");
        return classList.join(" ");
    };
    const scrollToMenuBottom = (floor: number | undefined) => {
        setTimeout(() => {
            editTaskFormContentRef.current?.scrollTo({
                top: floor 
                    ? editTaskFormContentRef.current.scrollHeight - (editTaskFormContentRef.current.scrollHeight - floor) 
                    : editTaskFormContentRef.current.scrollHeight, 
                behavior: "smooth" 
            });
        }, 100);
    };
    const renderContent = (): React.ReactNode => {
        if (!currentProjectTask) return null;
        const { name, comments } = currentProjectTask;
        return (
            <>
            <Header 
                name={name}
                form={form}
                doUpdateTask={doUpdateTask}
                openModalDeleteTask={openModalDeleteTask}
                openChangeStateModal={() => changeStateModal.open(true)}/>
            <Content ref={editTaskFormContentRef} className="custom-scrollbar">
                <TaskForm 
                    form={form}
                    doUpdateTask={doUpdateTask}/>
                <SubtaskList 
                    currentProjectTask={currentProjectTask} 
                    scrollToMenuBottom={scrollToMenuBottom} />
                {comments.length > 0 && <CommentList comments={comments} />}
            </Content>
            <CommentBox taskId={currentProjectTask.id} scrollToMenuBottom={scrollToMenuBottom} />
            </>
        );
    };
    //#endregion
    return (
        <>
        <Container
            className={getClassName()}
            tabIndex={0}
            ref={containerRef}>
            {renderContent()}
        </Container>
        {currentProjectTask && 
            <ChangeStateModal 
                modalProps={changeStateModal} 
                {...currentProjectTask}/>
        }
        </>
    );
};

export default EditTaskForm;