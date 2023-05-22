import { Icon } from "@iconify/react/dist/iconify.js";
import {
    Container,
    Description,
    IconContainer,
    Project,
    ProjectName,
} from "./styles";
import { ProjectInfoProps } from "./types";

const ProjectInfo = ({ form }: ProjectInfoProps) => {
    const {name, description} = form.value;
    return (
        <Container>
            <Project>
                <IconContainer>
                    <Icon icon="eos-icons:project" />
                </IconContainer>
                <ProjectName title={name}>{name}</ProjectName>
            </Project>
            <Description>
                {description}
            </Description>
        </Container>
    );
};

export default ProjectInfo;
