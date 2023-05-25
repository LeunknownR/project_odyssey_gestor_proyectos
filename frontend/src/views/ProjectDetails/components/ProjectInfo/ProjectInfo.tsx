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

const ProjectInfo = () => {
    return (
        <Container>
            <InfoWrapper>
                <Row gap="14px" align="center">
                    <IconContainer>
                        <Icon icon="eos-icons:project" />
                    </IconContainer>
                    <ProjectName>TCorp - Brazo robótico (IOT)</ProjectName>
                </Row>
                <Description>
                    Proyecto para la empresa TCorp, para el soporte a empleados
                    con discapacidad motora.
                </Description>
            </InfoWrapper>
            <Period />
        </Container>
    );
};

export default ProjectInfo;
