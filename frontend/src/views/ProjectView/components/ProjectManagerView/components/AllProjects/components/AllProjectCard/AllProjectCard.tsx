import {
    Container,
    IconContainer,
    OptionsWrapper,
    ProjectName,
    EndContent,
    StartContent
} from "./styles";
import { Icon } from "@iconify/react/dist/iconify.js";
import MenuOptions from "src/views/components/MenuOptions/MenuOptions";
import ProjectDeadline from "./components/ProjectDeadline/ProjectDeadline";
import { AllProjectCardProps } from "./types";
import ProjectTeamCount from "../../../RecentProjects/components/RecentProjectCard/components/ProjectTeamCount";
import { FlexFlow } from "src/components/styles";
import useMainContext from "src/utils/contexts/main-context/useMainContext";

const AllProjectCard = ({
    project,
    options
}: AllProjectCardProps) => {
    const { isMobile } = useMainContext();
    const { 
        name, startDate, endDate, 
        state, leader, 
        projectMemberCount 
    } = project;
    return (
        <Container className={state}>
            {isMobile &&
            <ProjectDeadline 
                withLabel
                variant="short"
                startDate={startDate} 
                endDate={endDate}/>}
            <FlexFlow
                justify="space-between"
                align="flex-start" 
                gap="5px"
                width="100%">
                <StartContent>
                    <IconContainer>
                        <Icon icon="ph:projector-screen-chart-fill" />
                    </IconContainer>    
                    <ProjectName title={name}>{name}</ProjectName>
                </StartContent>
                <EndContent align="center" gap="20px">
                    <FlexFlow gap="15px" align="center">
                        {leader && 
                        <ProjectTeamCount 
                            leaderName={leader.name} 
                            projectMemberCount={projectMemberCount}/>}
                        {!isMobile &&
                        <ProjectDeadline 
                            withLabel
                            startDate={startDate}
                            endDate={endDate}/>}
                    </FlexFlow>
                    <OptionsWrapper>
                        <MenuOptions
                            menuPosition="right"
                            options={options}
                        />
                    </OptionsWrapper>
                </EndContent>
            </FlexFlow>
        </Container>
    );
};

export default AllProjectCard;
