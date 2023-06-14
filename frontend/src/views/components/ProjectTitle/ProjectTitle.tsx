//#region Libraries
import { Icon } from "@iconify/react/dist/iconify.js";
//#endregion
//#region Styles
import { FlexFlow } from "src/components/styles";
import { Container, IconContainer, ProjectName } from "./styles";
//#endregion
//#region Components
import ProjectState from "../ProjectState/ProjectState";
//#endregion
//#region Types
import { ProjectTitleProps } from "./types";
//#endregion

const ProjectTitle = ({ name, state }: ProjectTitleProps) => {
    return (
        <Container>
            <FlexFlow gap="14px" align="center">
                <IconContainer>
                    <Icon icon="eos-icons:project" />
                </IconContainer>
                <ProjectName>{name}</ProjectName>
            </FlexFlow>
            
            <ProjectState state={state} />
        </Container>
    );
};

export default ProjectTitle;
