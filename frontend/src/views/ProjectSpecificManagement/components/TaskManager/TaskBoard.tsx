import { FlexFlow } from "src/components/styles";
import { PanelTabProps } from "../../types";
import ModifyTaskMenu from "./components/ModifyTaskMenu/ModifyTaskMenu";
import StatusSection from "./components/StatusSection/StatusSection";
import { Container } from "./styles";

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
    return (
        <>
            <FlexFlow width="100%">
                <StatusSection status="Pendientes" taskListInfo={TEST.pending}/>
                <StatusSection status="En Curso" taskListInfo={TEST.onProgress}/>
                <StatusSection status="Finalizadas" taskListInfo={TEST.finalized}/>
            </FlexFlow>
            {/*<ModifyTaskMenu />*/}
        </>
    );
};

export default TaskBoard;
