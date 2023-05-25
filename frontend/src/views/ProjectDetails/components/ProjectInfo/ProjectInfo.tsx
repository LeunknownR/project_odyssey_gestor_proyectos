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

const ProjectInfo = ({ name, description, period }: ProjectInfoProps) => {
    return (
        <Container>
            <InfoWrapper>
                <Row gap="14px" align="center">
                    <IconContainer>
                        <Icon icon="eos-icons:project" />
                    </IconContainer>
                    <ProjectName>{name}</ProjectName>
                </Row>
                <Description>{description}</Description>
            </InfoWrapper>
            <Period period={period} />
        </Container>
    );
};

export default ProjectInfo;
