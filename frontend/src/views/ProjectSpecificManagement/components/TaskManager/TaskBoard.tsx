//#region Libraries
import { useState, useEffect } from "react";
import { Socket } from "socket.io-client";
//#endregion
//#region Styles
import { FlexFlow } from "src/components/styles";
//#endregion
//#region Components
import StatusSection from "./components/StatusSection/StatusSection";
//#endregion
//#region Types
import { PanelTabProps } from "../../types";
import { ProjectTask, ProjectTaskBoard } from "src/entities/projectTasks/entities";
//#endregion
//#region Utils
import useWebsocket from "src/utils/hooks/useWebsocket";
import { wsProjectTasksServiceDataConnection } from "src/services/websockets/connections";
import WSProjectTaskServiceEvents from "src/services/websockets/services/projectTasks/events";
import ModifyTaskMenu from "./components/ModifyTaskMenu/ModifyTaskMenu";
import Board from "./components/Board/Board";
//#endregion

const TaskBoard = ({ projectId }: PanelTabProps) => {
    const socketIo = useWebsocket<number>(wsProjectTasksServiceDataConnection, projectId);
    const [projectTaskBoard, setProjectTaskBoard] = useState<ProjectTaskBoard | null>(null);
    const [currentProjectTask, setCurrentProjectTask] = useState<ProjectTask | null>(null);
    const [taskMenuIsOpen, setTaskMenuIsOpen] = useState(false);
    useEffect(() => {
        const socketIoValue: Socket = socketIo.connect();
        socketIoValue.on(WSProjectTaskServiceEvents.Server.DispatchTaskBoard, (projectTaskBoard: ProjectTaskBoard) => {
            setProjectTaskBoard(projectTaskBoard);
        });
    }, []);
    const openTaskMenu = (taskInfo: ProjectTask) => {
        setCurrentProjectTask(taskInfo);
        setTaskMenuIsOpen(true);
    };
    return (
        <>
        {projectTaskBoard 
        ? <>
            <Board projectTaskBoard={projectTaskBoard} openTaskMenu={openTaskMenu} />
            <ModifyTaskMenu currentProjectTask={currentProjectTask} />
        </> 
        : null}
        </>
    );
};

export default TaskBoard;