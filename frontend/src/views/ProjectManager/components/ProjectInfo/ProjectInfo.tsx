import { Icon } from "@iconify/react/dist/iconify.js";
import {
    Container,
    Description,
    IconContainer,
    Project,
    ProjectName,
} from "./styles";
import { ProjectInfoProps } from "./types";

const ProjectInfo = ({ form, variant }: ProjectInfoProps) => {
    const {name, description} = form.value;
    return (
        <Container>
            <Project>
                <IconContainer>
                    <Icon icon="eos-icons:project" />
                </IconContainer>
                <ProjectName className={variant} title={name}>{name || "[Nombre del proyecto]"}</ProjectName>
            </Project>
            <Description className={variant}>
                {description || "[Descripción]"}
            </Description>
        </Container>
    );
};

export default ProjectInfo;
