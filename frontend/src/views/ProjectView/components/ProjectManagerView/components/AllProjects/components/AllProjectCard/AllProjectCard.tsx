import {
    Container,
    IconContainer,
    DateLabel,
    OptionsWrapper,
    ProjectName,
    EndContent
} from "./styles";
import { Icon } from "@iconify/react/dist/iconify.js";
import MenuOptions from "src/views/components/MenuOptions/MenuOptions";
import ProjectDeadline from "./components/ProjectDeadline/ProjectDeadline";
import { AllProjectCardProps } from "./types";
import ProjectCollaborators from "../../../RecentProjects/components/RecentProjectCard/components/ProjectCollaborators/ProjectCollaborators";
import { FlexFlow } from "src/components/styles";
import useMainContext from "src/utils/contexts/main-context/useMainContext";

const AllProjectCard = ({
    project,
    options
}: AllProjectCardProps) => {
    const { isMobile } = useMainContext();
    const { name, startDate, endDate, state, leader, projectMemberCount } = project;
    return (
        <Container className={state}>
            <FlexFlow align="center" gap="10px">
                <IconContainer>
                    <Icon icon="ph:projector-screen-chart-fill" />
                </IconContainer>
                <FlexFlow direction="column" align="flex-start" gap="5px">
                    {isMobile &&
                    <ProjectDeadline 
                        mobile={isMobile}
                        startDate={startDate} 
                        endDate={endDate}
                        variant="short"/>}
                    <ProjectName title={name}>{name}</ProjectName>
                </FlexFlow>
            </FlexFlow>
            <EndContent align="center" gap="20px">
                <FlexFlow gap="15px" align="center">
                    {leader && 
                    <ProjectCollaborators 
                        leaderName={leader.name} 
                        projectMemberCount={projectMemberCount}/>}
                    <DateLabel>Fecha</DateLabel>
                    {!isMobile &&
                    <ProjectDeadline 
                        mobile={isMobile}
                        startDate={startDate} 
                        endDate={endDate}
                        variant="short"/>}
                </FlexFlow>
                <OptionsWrapper>
                    <MenuOptions
                        menuPosition="right"
                        options={options}
                    />
                </OptionsWrapper>
            </EndContent>
        </Container>
    );
};

export default AllProjectCard;
