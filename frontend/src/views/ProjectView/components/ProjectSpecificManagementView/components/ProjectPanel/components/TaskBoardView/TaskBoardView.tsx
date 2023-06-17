//#region Libraries
import { useState, useEffect, useRef } from "react";
import { Socket } from "socket.io-client";
//#endregion
//#region Components
import Board from "./components/Board/Board";
import ModifyTaskMenu from "./components/ModifyTaskMenu/ModifyTaskMenu";
import DeleteTaskModal from "./components/DeleteTaskModal";
//#endregion
//#region Types
import {
    ProjectTask,
    ProjectTaskBoard,
} from "src/entities/projectTasks/entities";
//#endregion
//#region Utils
import useWebsocket from "src/utils/hooks/useWebsocket";
import { wsProjectTasksServiceDataConnection } from "src/services/websockets/connections";
import WSProjectTaskServiceEvents from "src/services/websockets/services/projectTasks/events";
import TaskBoardContext from "./utils/contexts/TaskBoardContext";
import { ProjectState } from "src/entities/project/enums";
import { projectTaskBoardStateByTaskState } from "src/entities/projectTasks/mappers";
import { TaskBoardViewProps } from "./types";
import useModal from "src/components/Modal/utils/hooks/useModal";
import { DBProjectRoles } from "src/config/roles";
import { getUserId } from "src/storage/user.local";
//#endregion

const TaskBoardView = ({ 
    projectId, preloader, projectRoleId
}: TaskBoardViewProps) => {
    //#region Custom Hooks
    const modifyMenuRef = useRef<HTMLDivElement>(null);
    const modalDeleteTask = useModal();
    //#endregion
    //#region States
    const socketHandler = useWebsocket<number>(
        wsProjectTasksServiceDataConnection,
        projectId
    );
    const [projectTaskBoard, setProjectTaskBoard] = useState<ProjectTaskBoard | null>(null);
    const [currentProjectTask, setCurrentProjectTask] = useState<ProjectTask | null>(null);
    // const [currentProjectToChangeState, setCurrentProjectToChangeState] = useState<>(null);
    const [isTaskMenuOpen, setIsTaskMenuOpen] = useState<boolean>(false);
    const [currentProjectStateToUpdate, setCurrentProjectStateToUpdate] =
        useState<ProjectState | null>(null);
    const [isTaskResponsible, setIsTaskResponsible] = useState<boolean>(false);
    //#endregion
    //#region Effects
    useEffect(() => {
        const socketIoValue: Socket = socketHandler.connect();
        socketIoValue.on(
            WSProjectTaskServiceEvents.Server.DispatchTaskBoard,
            (projectTaskBoard: ProjectTaskBoard) => {
                setProjectTaskBoard(projectTaskBoard);
            }
        );
    }, []);
    useEffect(() => {
        if (!currentProjectTask) return;
        const newCurrentProjectTask = getCurrentProjectTaskWhenBoardChange();
        setCurrentProjectTask(newCurrentProjectTask);
    }, [projectTaskBoard]);
    useEffect(() => {
        setIsTaskResponsible(
            projectRoleId === DBProjectRoles.ProjectLeader || 
            currentProjectTask?.responsible?.id === getUserId()
        );
    }, [currentProjectTask]);
    //#endregion
    //#region Functions
    const getCurrentProjectTaskWhenBoardChange = (): ProjectTask | null => {
        if (
            !projectTaskBoard ||
            !currentProjectStateToUpdate ||
            !currentProjectTask
        ) return null;
        //Buscando el proyecto actual
        const currentState: string = projectTaskBoardStateByTaskState[currentProjectStateToUpdate]
        let foundProjectTask: ProjectTask | undefined = projectTaskBoard[currentState].find(({ id }) => id === currentProjectTask.id);
        //Buscando si se encontró en el estado previo
        if (foundProjectTask) return foundProjectTask;
        //Buscando en los demás estados
        const notCheckedStates = Object.values(ProjectState).filter(state => state !== currentState);
        for (const statesNotChecked of notCheckedStates) {
            foundProjectTask = projectTaskBoard[statesNotChecked].find(({ id }) => id === currentProjectTask.id);
            if (foundProjectTask) return foundProjectTask;
        }
        return null;
    };
    const fillCurrentProjectTask = (
        taskInfo: ProjectTask,
        state: ProjectState
    ): void => {
        openTaskMenu();
        setCurrentProjectTask(taskInfo);
        setCurrentProjectStateToUpdate(state);
    };
    const openTaskMenu = (): void => {
        setIsTaskMenuOpen(true);
    }
    const hideTaskMenu = (): void => {
        setIsTaskMenuOpen(false);
    };
    const deleteTask = (): void => {
        if (!currentProjectTask) return;
        const { socketIo } = socketHandler;
        if (!socketIo) return;
        const { id: taskIdToBeDeleted } = currentProjectTask;
        hideTaskMenu();
        modalDeleteTask.open(false);
        setCurrentProjectTask(null);
        socketIo.emit(WSProjectTaskServiceEvents.Collaborator.DeleteTask, taskIdToBeDeleted);
    }
    //#endregion
    return (
        <>
        {projectTaskBoard ? (
            <TaskBoardContext.Provider value={{ 
                socketIo: socketHandler.socketIo, 
                projectId, 
                isTaskMenuOpen, modifyMenuRef,
                preloader, isTaskResponsible
            }}>
                <Board
                    projectTaskBoard={projectTaskBoard}
                    openTaskMenu={fillCurrentProjectTask}
                />
                <ModifyTaskMenu
                    ref={modifyMenuRef}
                    currentProjectTask={currentProjectTask}
                    isTaskMenuOpen={isTaskMenuOpen}
                    hideTaskMenu={hideTaskMenu}
                    openModalDeleteTask={() => modalDeleteTask.open(true)}
                />
                <DeleteTaskModal
                    modalProps={modalDeleteTask}
                    deleteTask={deleteTask}/>
            </TaskBoardContext.Provider>
        ) : null}
        </>
    );
};

export default TaskBoardView;
