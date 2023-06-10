import { useState, useEffect } from "react";
import { FlexFlow } from "src/components/styles";
import { PanelTabProps } from "../../types";
import StatusSection from "./components/StatusSection/StatusSection";
import useWebsocket from "src/utils/hooks/useWebsocket";
import { wsProjectTasksServiceDataConnection } from "src/services/websockets/connections";
import { Socket } from "socket.io-client";
import WSProjectTaskServiceEvents from "src/services/websockets/services/projectTasks/events";
import { ProjectTaskBoard } from "src/entities/projectTasks/entities";

const TEST = {
    pending: [
        {
            id: 1,
            name: "Crear script mysql",
            description: "Descripción de algo",
            checked: false,
            responsible: {
                id: 1,
                name: "Ralf",
                surname: "Carrasco Stein",
                urlPhoto: null,
            },
            priorityId: null,
            deadline: 1050304324,
            subtasks: [
                {
                    id: 1,
                    name: "Modelado de base de datos",
                    checked: true,
                },
            ],
            comments: [
                {
                    id: 1,
                    content: "Algo anda mal con los modales",
                    datetime: 1290393320,
                    collaborator: {
                        id: 1,
                        name: "Diego Edgardo",
                        surname: "Torres de la Cruz",
                        urlPhoto: null,
                    },
                },
            ],
        },
    ],
    onProgress: [
        {
            id: 1,
            name: "Crear script mysql",
            description: null,
            checked: false,
            responsible: {
                id: 1,
                name: "Ralf",
                surname: "Carrasco Stein",
                urlPhoto: null,
            },
            priorityId: null,
            deadline: 1050304324,
            subtasks: [
                {
                    id: 1,
                    name: "Modelado de base de datos",
                    checked: true,
                },
            ],
            comments: [
                {
                    id: 1,
                    content: "Algo anda mal con los modales",
                    datetime: 1290393320,
                    collaborator: {
                        id: 1,
                        name: "Diego Edgardo",
                        surname: "Torres de la Cruz",
                        urlPhoto: null,
                    },
                },
            ],
        },
    ],
    finalized: [
        {
            id: 1,
            name: "Crear script mysql",
            description: null,
            checked: false,
            responsible: {
                id: 1,
                name: "Ralf",
                surname: "Carrasco Stein",
                urlPhoto: null,
            },
            priorityId: null,
            deadline: 1050304324,
            subtasks: [
                {
                    id: 1,
                    name: "Modelado de base de datos",
                    checked: true,
                },
            ],
            comments: [
                {
                    id: 1,
                    content: "Algo anda mal con los modales",
                    datetime: 1290393320,
                    collaborator: {
                        id: 1,
                        name: "Diego Edgardo",
                        surname: "Torres de la Cruz",
                        urlPhoto: null,
                    },
                },
            ],
        },
    ],
};

const TaskBoard = ({ projectId }: PanelTabProps) => {
    const socketIo = useWebsocket<number>(wsProjectTasksServiceDataConnection, projectId);
    const [projectTaskBoard, setProjectTaskBoard] = useState<ProjectTaskBoard | null>(null);
    useEffect(() => {
        const socketIoValue: Socket = socketIo.connect();
        socketIoValue.on(WSProjectTaskServiceEvents.Server.DispatchTaskBoard, (projectTaskBoard: ProjectTaskBoard) => {
            setProjectTaskBoard(projectTaskBoard);
        });
    }, []);
    console.log(projectTaskBoard);
    return (
        <>
        {projectTaskBoard 
        ? <>
            <FlexFlow width="100%">
                <StatusSection status="Pendientes" taskListInfo={TEST.pending}/>
                <StatusSection status="En Curso" taskListInfo={TEST.onProgress}/>
                <StatusSection status="Finalizadas" taskListInfo={TEST.finalized}/>
            </FlexFlow>
            {/*<ModifyTaskMenu />*/}
        </> 
        : null}
        </>
    );
};

export default TaskBoard;
