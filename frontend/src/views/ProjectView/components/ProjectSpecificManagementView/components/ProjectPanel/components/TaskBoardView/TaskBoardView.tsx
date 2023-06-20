//#region Libraries
import { useState, useEffect, useRef } from "react";
import { Socket } from "socket.io-client";
//#endregion
//#region Components
import TaskBoard from "./components/TaskBoard";
import ModifyTaskMenu from "./components/ModifyTaskMenu/ModifyTaskMenu";
import DeleteTaskModal from "./components/DeleteTaskModal";
//#endregion
//#region Types
import {
    ProjectTask,
    ProjectTaskBoard,
    ProjectTaskState,
} from "src/entities/projectTasks/entities";
//#endregion
//#region Utils
import useWebsocket from "src/utils/hooks/useWebsocket";
import { wsProjectTasksServiceDataConnection } from "src/services/websockets/connections";
import WSProjectTaskServiceEvents from "src/services/websockets/services/projectTasks/events";
import { projectTaskBoardStateByTaskState } from "src/entities/projectTasks/mappers";
import { TaskBoardViewProps } from "./types";
import useModal from "src/components/Modal/utils/hooks/useModal";
import { DBProjectRoles } from "src/config/roles";
import { getUserId } from "src/storage/user.local";
import TaskBoardContext from "./utils/contexts/TaskBoardContext";
import { TaskToBeChangedState } from "./utils/contexts/types";
import NotificationCard from "src/components/NotificationCard/NotificationCard";
import useNotificationCard from "src/components/NotificationCard/utils/hooks/useNotificationCard";
import { CardVariant } from "src/components/NotificationCard/types";
//#endregion

const TaskBoardView = ({ 
    projectId, preloader, projectRoleId
}: TaskBoardViewProps) => {
    //#region Custom Hooks
    const modifyMenuRef = useRef<HTMLDivElement>(null);
    const modalDeleteTask = useModal();
    const notificationCard = useNotificationCard();
    //#endregion
    //#region States
    const socketHandler = useWebsocket<number>(
        wsProjectTasksServiceDataConnection,
        projectId
    );
    const [projectTaskBoard, setProjectTaskBoard] = useState<ProjectTaskBoard | null>(null);
    const [currentProjectTask, setCurrentProjectTask] = useState<ProjectTask | null>(null);
    const [currentProjectTaskState, setCurrentProjectTaskState] = useState<ProjectTaskState | null>(null);
    const [currentTaskToBeChangedState, setCurrentTaskToBeChangedState] = useState<TaskToBeChangedState | null>(null);
    const [isTaskMenuOpen, setIsTaskMenuOpen] = useState<boolean>(false);
    const [canEditTask, setCanEditTask] = useState<boolean>(false);
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
        const newCurrentProjectTask = getCurrentProjectTaskWhenBoardChange();
        setCurrentProjectTask(newCurrentProjectTask);
    }, [projectTaskBoard]);
    useEffect(() => {
        setCanEditTask(
            projectRoleId === DBProjectRoles.ProjectLeader || 
            currentProjectTask?.responsible?.id === getUserId()
        );
    }, [currentProjectTask]);
    //#endregion
    //#region Functions
    const getCurrentProjectTaskWhenBoardChange = (): ProjectTask | null => {
        if (
            !currentProjectTask || 
            !projectTaskBoard ||
            !currentProjectTaskState
        ) return null;
        // Buscando el proyecto actual
        const taskStateField: string = projectTaskBoardStateByTaskState[currentProjectTaskState];
        const foundProjectTask: ProjectTask | undefined = projectTaskBoard[taskStateField]
            .find(({ id }) => id === currentProjectTask.id);
        // Buscando si se encontró en el estado previo
        if (foundProjectTask) return foundProjectTask;
        // Solo se hizo cambio de estado -> mismo valor de estado
        return currentProjectTask;
    };
    const fillCurrentProjectTask = (
        task: ProjectTask,
        state: ProjectTaskState
    ): void => {
        openTaskMenu();
        setCurrentProjectTask(task);
        setCurrentProjectTaskState(state);
        setCurrentTaskToBeChangedState({
            taskId: task.id,
            state
        });
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
        notificationCard.changeVariant(CardVariant.DeleteTask);
        notificationCard.show();
    }
    const fillCurrentTaskToBeChangedState = (value: TaskToBeChangedState | null) => {
        setCurrentTaskToBeChangedState(value);
    }
    //#endregion
    return (
        <>
        {projectTaskBoard ? (
            <TaskBoardContext.Provider value={{ 
                socketIo: socketHandler.socketIo, 
                projectId, isTaskMenuOpen, projectRoleId,
                modifyMenuRef, preloader, canEditTask,
                fillCurrentProjectTask, hideTaskMenu,
                taskToBeChangedStateHandler: {
                    fill: fillCurrentTaskToBeChangedState,
                    value: currentTaskToBeChangedState
                }
            }}>
                <TaskBoard taskBoard={projectTaskBoard}/>
                <ModifyTaskMenu
                    ref={modifyMenuRef}
                    currentProjectTask={currentProjectTask}
                    isTaskMenuOpen={isTaskMenuOpen}
                    openModalDeleteTask={() => modalDeleteTask.open(true)}
                />
                <DeleteTaskModal
                    modalProps={modalDeleteTask}
                    deleteTask={deleteTask}/>
                <NotificationCard handler={notificationCard} variant={notificationCard.cardVariant}/>
            </TaskBoardContext.Provider>
        ) : null}
        </>
    );
};

export default TaskBoardView;
