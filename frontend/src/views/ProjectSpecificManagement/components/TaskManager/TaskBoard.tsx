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
import { ProjectTaskBoard } from "src/entities/projectTasks/entities";
//#endregion
//#region Utils
import useWebsocket from "src/utils/hooks/useWebsocket";
import { wsProjectTasksServiceDataConnection } from "src/services/websockets/connections";
import WSProjectTaskServiceEvents from "src/services/websockets/services/projectTasks/events";
import ModifyTaskMenu from "./components/ModifyTaskMenu/ModifyTaskMenu";
//#endregion

const TaskBoard = ({ projectId }: PanelTabProps) => {
    const socketIo = useWebsocket<number>(wsProjectTasksServiceDataConnection, projectId);
    const [projectTaskBoard, setProjectTaskBoard] = useState<ProjectTaskBoard | null>(null);
    useEffect(() => {
        const socketIoValue: Socket = socketIo.connect();
        socketIoValue.on(WSProjectTaskServiceEvents.Server.DispatchTaskBoard, (projectTaskBoard: ProjectTaskBoard) => {
            setProjectTaskBoard(projectTaskBoard);
        });
    }, []);
    return (
        <>
        {projectTaskBoard 
        ? <>
            <FlexFlow width="100%" gap="15px">
                <StatusSection status="Pendientes" taskListInfo={projectTaskBoard.pending}/>
                <StatusSection status="En Curso" taskListInfo={projectTaskBoard.onProgress}/>
                <StatusSection status="Finalizadas" taskListInfo={projectTaskBoard.finalized}/>
            </FlexFlow>
            <ModifyTaskMenu />
        </> 
        : null}
        </>
    );
};

export default TaskBoard;
