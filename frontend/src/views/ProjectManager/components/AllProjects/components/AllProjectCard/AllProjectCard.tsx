import { Row } from "src/components/styles";
import { Container, IconContainer, Label, OptionsWrapper, ProjectName } from "./styles";
import { Icon } from "@iconify/react/dist/iconify.js";
import MenuOptions from "src/views/components/MenuOptions/MenuOptions";
import ProjectDeadline from "./components/ProjectDeadline/ProjectDeadline";

const AllProjectCard = () => {
    return (
        <Container>
            <Row align="center" gap="10px">
                <IconContainer>
                    <Icon icon="ph:projector-screen-chart-fill" />
                </IconContainer>
                <ProjectName>
                    Sistema de matrícula - IE Victor Manuel Maurtua
                </ProjectName>
            </Row>
            <Row align="center" gap="25px">
                <Row gap="15px" align="center">
                    <Label>Fecha</Label>
                    <ProjectDeadline />
                </Row>
                <OptionsWrapper>
                    <MenuOptions menuPosition="right"/>
                </OptionsWrapper>
            </Row>
        </Container>
    );
};

export default AllProjectCard;
