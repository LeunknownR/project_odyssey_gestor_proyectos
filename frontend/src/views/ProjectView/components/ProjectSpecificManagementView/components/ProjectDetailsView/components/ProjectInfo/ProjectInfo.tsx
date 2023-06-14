//#region styles
import {
    Container,
    DataPart,
    Description,
} from "./styles";
//#endregion
//#region components
import Period from "./components/Period/Period";
import ProjectTitle from "src/views/components/ProjectTitle/ProjectTitle";
//#endregion
//#region types
import { ProjectInfoProps } from "./types";
//#endregion

const ProjectInfo = ({
    name,
    description,
    period,
    state,
    openUpdateDateModal,
    currentUserIsProjectLeader,
}: ProjectInfoProps) => {
    return (
        <Container>
            <ProjectTitle name={name} state={state} />
            <DataPart>
                <Description>
                    {description}
                </Description>
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
