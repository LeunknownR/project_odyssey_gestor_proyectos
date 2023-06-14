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
import { useNavigate } from "react-router-dom";
import { AbsolutePaths } from "src/config/absolutePaths";
import { setProjectId } from "src/storage/project.session";
import ProjectCollaborators from "../../../RecentProjects/components/RecentProjectCard/components/ProjectCollaborators/ProjectCollaborators";
import { FlexFlow } from "src/components/styles";

const AllProjectCard = ({
    project,
    setCurrentProject,
    openUpdateProjectModal,
    openDeleteProjectModal,
}: AllProjectCardProps) => {
    const { name, startDate, endDate, state, leader, projectMemberCount } = project;
    return (
        <Container className={state}>
            <FlexFlow align="center" gap="10px">
                <IconContainer>
                    <Icon icon="ph:projector-screen-chart-fill" />
                </IconContainer>
                <ProjectName title={name}>{name}</ProjectName>
            </FlexFlow>
            <EndContent align="center" gap="20px">
                <FlexFlow gap="15px" align="center">
                    {leader && 
                    <ProjectCollaborators 
                        leaderName={leader.name} 
                        projectMemberCount={projectMemberCount}/>}
                    <DateLabel>Fecha</DateLabel>
                    <ProjectDeadline 
                        startDate={startDate} 
                        endDate={endDate}
                        variant="short"/>
                </FlexFlow>
                <OptionsWrapper onClick={() => setCurrentProject(project)}>
                    <MenuOptions
                        menuPosition="right"
                        onClickEdit={openUpdateProjectModal}
                        onClickDelete={openDeleteProjectModal}
                        onClickDetails={`${project.id}/detalles`}
                    />
                </OptionsWrapper>
            </EndContent>
        </Container>
    );
};

export default AllProjectCard;
