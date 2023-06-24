//#region Libraries
import { Icon } from "@iconify/react/dist/iconify.js";
//#endregion
//#region Styles
import { FlexFlow } from "src/components/styles";
import {
    BackArrowContainer,
    Container,
    TitleIconContainer,
    OptionsWrapper,
    ProjectName,
} from "./styles";
//#endregion
//#region Components
import ProjectStateLabel from "../ProjectState/ProjectStateLabel";
//#endregion
//#region Types
import { ProjectTitleProps } from "./types";
import MenuOptions from "../MenuOptions/MenuOptions";
import useMainContext from "src/utils/contexts/main-context/useMainContext";
//#endregion

const ProjectTitle = ({ name, state, options }: ProjectTitleProps) => {
    const { isMobile } = useMainContext();
    return (
        <Container>
            <FlexFlow gap="14px" align="center">
                <BackArrowContainer>
                    <Icon icon="ion:chevron-back" />
                </BackArrowContainer>
                <TitleIconContainer>
                    <Icon icon="eos-icons:project" />
                </TitleIconContainer>
                <ProjectName>{name}</ProjectName>
            </FlexFlow>
            <OptionsWrapper>
                <MenuOptions menuPosition="left" options={options} />
            </OptionsWrapper>
            {!isMobile && <ProjectStateLabel state={state} />}
        </Container>
    );
};

export default ProjectTitle;
