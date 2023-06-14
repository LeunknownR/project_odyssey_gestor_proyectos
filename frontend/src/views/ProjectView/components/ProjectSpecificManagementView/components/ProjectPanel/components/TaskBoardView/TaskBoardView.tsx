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

const TaskBoard = ({ projectId }: PanelTabProps) => {
    const modifyMenuRef = useRef<HTMLElement>(null);
    //#region States
    const socketIo = useWebsocket<number>(wsProjectTasksServiceDataConnection, projectId);
    const [projectTaskBoard, setProjectTaskBoard] = useState<ProjectTaskBoard | null>(null);
    const [currentProjectTask, setCurrentProjectTask] = useState<ProjectTask | null>(null);
    const [isTaskMenuOpen, setIsTaskMenuOpen] = useState<boolean>(false);
    //#endregion
    //#region Effects
    useEffect(() => {
        const socketIoValue: Socket = socketIo.connect();
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
        if(!modifyMenuRef.current) return;
        modifyMenuRef.current.focus()
        setCurrentProjectTask(taskInfo);
    };
    const openTaskMenu = (): void => setIsTaskMenuOpen(true);
    const closeTaskMenu = (e: React.FocusEvent<HTMLDivElement>): void => {
        if (e.currentTarget.contains(e.relatedTarget as Node)) return;
        setIsTaskMenuOpen(false);
    }
    return (
        <>
        {projectTaskBoard ? (
            <TaskBoardContext.Provider value={{ socketIo, projectId, isTaskMenuOpen, modifyMenuRef }}>
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
