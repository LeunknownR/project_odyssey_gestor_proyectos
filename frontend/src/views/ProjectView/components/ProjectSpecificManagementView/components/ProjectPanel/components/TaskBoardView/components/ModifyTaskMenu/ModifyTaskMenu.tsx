import { forwardRef, useEffect, useState } from "react";
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
import { DBProjectRoles } from "src/config/roles";
import { getUserId } from "src/storage/user.local";

const ModifyTaskMenu = forwardRef<HTMLDivElement, ModifyTaskMenuProps>(({
    currentProjectTask, hideTaskMenu, projectRoleId,
    openModalDeleteTask
}, ref) => {
    const [isTaskResponsible, setIsTaskResponsible] = useState<boolean>(false);
    //#region Custom hooks
    const { isTaskMenuOpen, socketIo } = useTaskBoardContext(); 
    const { form } = useTaskForm(
        currentProjectTask, 
        isTaskMenuOpen
    );
    const changeTaskUpdateType = useUpdateMainInformationTask(form.value, socketIo);
    //#endregion
    useEffect(() => {
        const $container = ref.current;
        if (!$container) return;
        const handler = (e: MouseEvent): void => {
            const $elementClicked = e.target as HTMLElement;
            if (
                $container.contains($elementClicked) || 
                !document.body.contains($elementClicked) ||
                $elementClicked.classList.contains("modal")
            ) return;
           hideTaskMenu();
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, [ref.current]);
    // useEffect(() => {
        
    // }, [currentProjectTask]);
    const getUserCanModifyTask = (): boolean => {
        if (!currentProjectTask || !currentProjectTask.responsible) return false;
        return (
            projectRoleId === DBProjectRoles.ProjectMember && 
            currentProjectTask.responsible.id !== getUserId()
        );
    }
    const getClassName = (): string => {
        const classList: string[] = [];
        isTaskMenuOpen && classList.push("show");
        getUserCanModifyTask() && classList.push("disabled");
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
                changeTaskUpdateType={changeTaskUpdateType}
                openModalDeleteTask={openModalDeleteTask}/>
            <Content className="custom-scrollbar">
                <TaskForm 
                    currentProjectTask={currentProjectTask} 
                    form={form}
                    changeTaskUpdateType={changeTaskUpdateType}/>
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
