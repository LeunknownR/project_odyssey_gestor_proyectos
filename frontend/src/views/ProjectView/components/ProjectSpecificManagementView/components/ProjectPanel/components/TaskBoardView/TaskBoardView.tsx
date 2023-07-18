//#region Libraries
import { useState, useEffect, useRef } from "react";
import { Socket } from "socket.io-client";
//#endregion
//#region Components
import TaskBoard from "./components/TaskBoard";
import EditTaskForm from "./components/EditTaskForm/EditTaskForm";
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
import WSProjectTaskServiceEvents from "src/services/websockets/services/projectTasks/events";
import { projectTaskBoardStateByTaskState } from "src/entities/projectTasks/mappers";
import useModal from "src/components/Modal/utils/hooks/useModal";
import { DBProjectRoles } from "src/config/roles";
import { getUserId } from "src/storage/user.local";
import TaskBoardContext from "./utils/contexts/TaskBoardContext";
import { TaskToBeChangedState } from "./utils/contexts/types";
import NotificationCard from "src/components/NotificationCard/NotificationCard";
import useNotificationCard from "src/components/NotificationCard/utils/hooks/useNotificationCard";
import { CardVariant } from "src/components/NotificationCard/types";
import WSServicePaths from "src/services/websockets/services";
import { PanelTabProps } from "../../types";
//#endregion

const TaskBoardView = ({ 
    preloader, projectId, projectRoleId
}: PanelTabProps) => {
    //#region Custom Hooks
    const editTaskFormRef = useRef<HTMLDivElement>(null);
    const modalDeleteTask = useModal();
    const notificationCard = useNotificationCard();
    //#endregion
    //#region States
    const socketHandler = useWebsocket(WSServicePaths.ProjectTask);
    const [projectTaskBoard, setProjectTaskBoard] = useState<ProjectTaskBoard | null>(null);
    const [currentProjectTask, setCurrentProjectTask] = useState<ProjectTask | null>(null);
    const [currentProjectTaskState, setCurrentProjectTaskState] = useState<ProjectTaskState | null>(null);
    const [currentTaskToBeChangedState, setCurrentTaskToBeChangedState] = useState<TaskToBeChangedState | null>(null);
    const [isEditTaskFormOpen, setIsEditTaskFormOpen] = useState<boolean>(false);
    const [canEditTask, setCanEditTask] = useState<boolean>(false);
    //#endregion
    //#region Effects
    useEffect(() => {
        const socketIoValue: Socket = socketHandler.connect({ 
            "x-project-id": String(projectId) 
        });
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
        if (newCurrentProjectTask) return;
        setIsEditTaskFormOpen(false);
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
        const foundProjectTask: ProjectTask | null = findProjectTask(currentProjectTaskState);
        // Buscando si se encontró en el estado previo
        if (foundProjectTask) return foundProjectTask;
        const statesNotChecked: ProjectTaskState[] = Object.values(ProjectTaskState);
        for (const stateNotChecked of statesNotChecked) {
            // Si se encuentra en otra columna, quiere decir que solo se hizo un cambio de estado
            if (findProjectTask(stateNotChecked))
                return currentProjectTask;
        }
        // Si no se encontró se eliminó
        return null;
    };
    const findProjectTask = (state: ProjectTaskState): ProjectTask | null => {
        if (!projectTaskBoard || !currentProjectTask) return null;
        const taskStateField: string = projectTaskBoardStateByTaskState[state];
        const foundProjectTask: ProjectTask | undefined = projectTaskBoard[taskStateField]
            .find(({ id }) => id === currentProjectTask.id);
        return foundProjectTask || null;
    }
    const fillCurrentProjectTask = (
        task: ProjectTask,
        state: ProjectTaskState
    ): void => {
        openEditTaskForm();
        setCurrentProjectTask(task);
        setCurrentProjectTaskState(state);
        setCurrentTaskToBeChangedState({
            taskId: task.id,
            state
        });
    };
    const openEditTaskForm = (): void => {
        setIsEditTaskFormOpen(true);
    }
    const hideEditTaskForm = (): void => {
        setIsEditTaskFormOpen(false);
        setCurrentProjectTask(null);
    };
    const deleteTask = (): void => {
        if (!currentProjectTask) return;
        const { socketIo } = socketHandler;
        if (!socketIo) return;
        const { id: taskIdToBeDeleted } = currentProjectTask;
        modalDeleteTask.open(false);
        setCurrentProjectTask(null);
        socketIo.emit(WSProjectTaskServiceEvents.Collaborator.DeleteTask, taskIdToBeDeleted);
        notificationCard.changeVariant(CardVariant.DeleteTask);
        notificationCard.show();
    }
    const fillCurrentTaskToBeChangedState = (value: TaskToBeChangedState | null): void => {
        setCurrentTaskToBeChangedState(value);
    }
    //#endregion
    return (
        <>
        {projectTaskBoard ? (
            <TaskBoardContext.Provider value={{ 
                socketIo: socketHandler.socketIo, 
                projectId, isEditTaskFormOpen, projectRoleId,
                modifyMenuRef: editTaskFormRef, preloader, canEditTask,
                currentProjectTask, fillCurrentProjectTask, hideEditTaskForm,
                currentProjectTaskState,
                taskToBeChangedStateHandler: {
                    fill: fillCurrentTaskToBeChangedState,
                    value: currentTaskToBeChangedState
                }
            }}>
                <TaskBoard taskBoard={projectTaskBoard}/>
                <EditTaskForm
                    containerRef={editTaskFormRef}
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
