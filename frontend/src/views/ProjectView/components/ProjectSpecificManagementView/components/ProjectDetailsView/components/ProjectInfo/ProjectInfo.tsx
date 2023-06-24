//#region styles
import { Container, DataPart, Description } from "./styles";
//#endregion
//#region components
import Period from "./components/Period/Period";
import ProjectTitle from "src/views/components/ProjectTitle/ProjectTitle";
//#endregion
//#region types
import { ProjectInfoProps } from "./types";
import { MENU_OPTIONS } from "./utils/constants";
//#endregion

const ProjectInfo = ({
    projectDetails,
    openUpdateDateModal,
    currentUserIsProjectLeader,
}: ProjectInfoProps) => {
    const { name, description, period, state } = projectDetails;
    return (
        <Container>
            <ProjectTitle 
                name={name} 
                state={state} 
                options={MENU_OPTIONS}/>
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
