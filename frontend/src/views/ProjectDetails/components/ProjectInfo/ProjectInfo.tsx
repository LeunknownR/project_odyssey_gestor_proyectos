import { Icon } from "@iconify/react/dist/iconify.js";
import {
    Container,
    DataPart1,
    DataPart2,
    Description,
    IconContainer,
    ProjectName,
} from "./styles";
import { Row } from "src/components/styles";
import Period from "./components/Period/Period";
import { ProjectInfoProps } from "./types";
import ProjectState from "../../../components/ProjectState/ProjectState";

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
            <DataPart1>
                <Row gap="14px" align="center">
                    <IconContainer>
                        <Icon icon="eos-icons:project" />
                    </IconContainer>
                    <ProjectName>{name}</ProjectName>
                </Row>
                <ProjectState state={state}/>
            </DataPart1>
            <DataPart2>
                <Description>
                    {description}
                </Description>
                <Period
                    period={period}
                    openUpdateDateModal={openUpdateDateModal}
                    currentUserIsProjectLeader={currentUserIsProjectLeader}
                />
            </DataPart2>
        </Container>
    );
};

export default ProjectInfo;
