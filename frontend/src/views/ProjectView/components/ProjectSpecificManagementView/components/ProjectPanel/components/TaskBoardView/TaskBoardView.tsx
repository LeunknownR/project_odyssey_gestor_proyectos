//#region Libraries
import { useState, useEffect, useRef } from "react";
import { Socket } from "socket.io-client";
//#endregion
//#region Components
import Board from "./components/Board/Board";
import ModifyTaskMenu from "./components/ModifyTaskMenu/ModifyTaskMenu";
//#endregion
//#region Types
import { PanelTabProps } from "../../../../types";
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
//#endregion

const TaskBoard = ({ projectId }: PanelTabProps) => {
    const modifyMenuRef = useRef<HTMLElement>(null);
    //#region States
    const socketHandler = useWebsocket<number>(
        wsProjectTasksServiceDataConnection,
        projectId
    );
    const [projectTaskBoard, setProjectTaskBoard] = useState<ProjectTaskBoard | null>(null);
    const [currentProjectTask, setCurrentProjectTask] = useState<ProjectTask | null>(null);
    const [isTaskMenuOpen, setIsTaskMenuOpen] = useState<boolean>(false);
    const [currentProjectStateToUpdate, setCurrentProjectStateToUpdate] =
        useState<ProjectState | null>(null);
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
        getCurrentProjectTaskWhenBoardChange();
        setCurrentProjectTask(getCurrentProjectTaskWhenBoardChange())
    }, [projectTaskBoard]);
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
        if (!modifyMenuRef.current) return;
        modifyMenuRef.current.focus();
        setCurrentProjectTask(taskInfo);
        setCurrentProjectStateToUpdate(state);
    };
    const openTaskMenu = (): void => setIsTaskMenuOpen(true);
    const closeTaskMenu = (e: React.FocusEvent<HTMLDivElement>): void => {
        if (e.currentTarget.contains(e.relatedTarget as Node)) return;
        setIsTaskMenuOpen(false);
    };
    //#endregion
    return (
        <>
        {projectTaskBoard ? (
            <TaskBoardContext.Provider
                value={{
                    socketIo: socketHandler.socketIo,
                    projectId,
                    isTaskMenuOpen,
                    modifyMenuRef,
                }}
            >
                <Board
                    projectTaskBoard={projectTaskBoard}
                    openTaskMenu={fillCurrentProjectTask}
                />
                <ModifyTaskMenu
                    currentProjectTask={currentProjectTask}
                    isTaskMenuOpen={isTaskMenuOpen}
                    openTaskMenu={openTaskMenu}
                    closeTaskMenu={closeTaskMenu}
                    ref={modifyMenuRef}
                />
            </TaskBoardContext.Provider>
        ) : null}
        </>
    );
};

export default TaskBoard;
