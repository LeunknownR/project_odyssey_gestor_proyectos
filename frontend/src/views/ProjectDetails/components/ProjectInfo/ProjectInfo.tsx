import { Icon } from "@iconify/react/dist/iconify.js";
import {
    Container,
    InfoWrapper,
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
    openUpdateDateModal,
    currentUserIsProjectLeader,
}: ProjectInfoProps) => {
    return (
        <Container>
            <InfoWrapper>
                <Row gap="14px" align="center">
                    <IconContainer>
                        <Icon icon="eos-icons:project" />
                    </IconContainer>
                    <ProjectName>{name}</ProjectName>
                </Row>
                <ProjectState />
            </InfoWrapper>
            <Row align="center" justify="space-between" padding="0 0 0 70px">
                <Description>
                    {description}
                </Description>
                <Period
                    period={period}
                    openUpdateDateModal={openUpdateDateModal}
                    currentUserIsProjectLeader={currentUserIsProjectLeader}
                />
            </Row>
        </Container>
    );
};

export default ProjectInfo;
