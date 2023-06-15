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
//#endregion

<<<<<<< HEAD
const TaskBoard = ({ projectId }: PanelTabProps) => {
    const modifyMenuRef = useRef<HTMLElement>(null);
=======
const TaskBoard = ({ 
    projectId, preloader
}: PanelTabProps) => {
    const modifyMenuRef = useRef<HTMLDivElement>(null);
>>>>>>> aa42b7aa3719f58f00568b5af83fdebc1b27350f
    //#region States
    const socketHandler = useWebsocket<number>(wsProjectTasksServiceDataConnection, projectId);
    const [projectTaskBoard, setProjectTaskBoard] = useState<ProjectTaskBoard | null>(null);
    const [currentProjectTask, setCurrentProjectTask] = useState<ProjectTask | null>(null);
    const [isTaskMenuOpen, setIsTaskMenuOpen] = useState<boolean>(false);
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
    //#endregion
    //#region Functions
    const fillCurrentProjectTask = (taskInfo: ProjectTask): void => {
<<<<<<< HEAD
        if(!modifyMenuRef.current) return;
        modifyMenuRef.current.focus()
        setCurrentProjectTask(taskInfo);
    };
    const openTaskMenu = (): void => setIsTaskMenuOpen(true);
    const closeTaskMenu = (e: React.FocusEvent<HTMLDivElement>): void => {
        if (e.currentTarget.contains(e.relatedTarget as Node)) return;
=======
        if (!modifyMenuRef.current) return;
        modifyMenuRef.current.focus()
        openTaskMenu();
        setCurrentProjectTask(taskInfo);
    };
    const openTaskMenu = (): void => {
        setIsTaskMenuOpen(true);
    }
    const hideTaskMenu = (): void => {
>>>>>>> aa42b7aa3719f58f00568b5af83fdebc1b27350f
        setIsTaskMenuOpen(false);
    }
    return (
        <>
        {projectTaskBoard ? (
<<<<<<< HEAD
            <TaskBoardContext.Provider value={{ socketIo: socketHandler.socketIo, projectId, isTaskMenuOpen, modifyMenuRef }}>
=======
            <TaskBoardContext.Provider value={{ 
                socketIo: socketHandler.socketIo, 
                projectId, 
                isTaskMenuOpen, modifyMenuRef,
                preloader
            }}>
>>>>>>> aa42b7aa3719f58f00568b5af83fdebc1b27350f
                <Board
                    projectTaskBoard={projectTaskBoard}
                    openTaskMenu={fillCurrentProjectTask}
                />
                <ModifyTaskMenu
                    currentProjectTask={currentProjectTask}
                    isTaskMenuOpen={isTaskMenuOpen}
<<<<<<< HEAD
                    openTaskMenu={openTaskMenu}
                    closeTaskMenu={closeTaskMenu}
=======
                    hideTaskMenu={hideTaskMenu}
>>>>>>> aa42b7aa3719f58f00568b5af83fdebc1b27350f
                    ref={modifyMenuRef}
                />
            </TaskBoardContext.Provider>
        ) : null}
        </>
    );
};

export default TaskBoard;
