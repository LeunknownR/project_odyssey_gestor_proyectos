//#region styles
import { Container, DataPart, Description } from "./styles";
//#endregion
//#region components
import Period from "./components/Period/Period";
import ProjectTitle from "src/views/components/ProjectTitle/ProjectTitle";
//#endregion
//#region types
import { ProjectInfoProps } from "./types";
//#endregion
const MENU_OPTIONS = [
    {
        text: "Tareas",
        to: "../tareas",
        icon: "fluent:task-list-square-ltr-16-filled",
    },
    {
        text: "Cronograma",
        to: "../cronograma",
        icon: "fluent:gantt-chart-16-regular",
    },
    {
        text: "Salas de chat",
        to: "../salas-chat",
        icon: "grommet-icons:chat",
    },
];
const ProjectInfo = ({
    projectDetails,
    openUpdateDateModal,
    currentUserIsProjectLeader,
}: ProjectInfoProps) => {
    const { name, description, period, state } = projectDetails;
    return (
        <Container>
            <ProjectTitle name={name} state={state} options={MENU_OPTIONS}/>
            <DataPart>
                <Description>{description}</Description>
                <Period
                    period={period}
                    openUpdateDateModal={openUpdateDateModal}
                    currentUserIsProjectLeader={currentUserIsProjectLeader}
                />
            </DataPart>
        </Container>
    );
};

export default ProjectInfo;
