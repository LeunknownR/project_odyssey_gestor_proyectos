import { Icon } from "@iconify/react/dist/iconify.js";
import {
    Container,
    Description,
    IconContainer,
    Project,
    ProjectName,
} from "./styles";

const ProjectInfo = () => {
    return (
        <Container>
            <Project>
                <IconContainer>
                    <Icon icon="eos-icons:project" />
                </IconContainer>
                <ProjectName>TCorp - Brazo robótico...</ProjectName>
            </Project>
            <Description>Proyecto para la empresa TCorp, para el soporte a empleados con discapacidad motora.</Description>
        </Container>
    );
};

export default ProjectInfo;
