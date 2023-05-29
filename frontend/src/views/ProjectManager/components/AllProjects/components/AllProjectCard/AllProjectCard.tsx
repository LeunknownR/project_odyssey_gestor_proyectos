import { Row } from "src/components/styles";
import {
    Container,
    IconContainer,
    Label,
    OptionsWrapper,
    ProjectName,
} from "./styles";
import { Icon } from "@iconify/react/dist/iconify.js";
import MenuOptions from "src/views/components/MenuOptions/MenuOptions";
import ProjectDeadline from "./components/ProjectDeadline/ProjectDeadline";
import { AllProjectCardProps } from "./types";
import { useNavigate } from "react-router-dom";
import { AbsolutePaths } from "src/config/absolutePaths";
import { setProjectId } from "src/storage/project.session";
import ProjectCollaborators from "../../../RecentProjects/components/RecentProjectCard/components/ProjectCollaborators/ProjectCollaborators";

const AllProjectCard = ({
    project,
    setCurrentProject,
    openUpdateProjectModal,
    openDeleteProjectModal,
}: AllProjectCardProps) => {
    const { name, startDate, endDate, state, leader, projectMemberCount } = project;
    const navigate = useNavigate();
    const moveToProjectDetails = () => {
        navigate(AbsolutePaths.ProjectDetails);
        setProjectId(project.id)
    }
    return (
        <Container className={state}>
            <Row align="center" gap="10px">
                <IconContainer>
                    <Icon icon="ph:projector-screen-chart-fill" />
                </IconContainer>
                <ProjectName title={name}>{name}</ProjectName>
            </Row>
            <Row align="center" gap="25px">
                <Row gap="15px" align="center">
                    {/*GNOMO LEDER*/}
                    {leader && <ProjectCollaborators leaderName={leader.name} projectMemberCount={projectMemberCount}/>}
                    <Label>Fecha</Label>
                    <Row width="230px">
                        <ProjectDeadline startDate={startDate} endDate={endDate}/>
                    </Row>
                </Row>
                <OptionsWrapper onClick={() => setCurrentProject(project)}>
                    <MenuOptions
                        menuPosition="right"
                        onClickEdit={openUpdateProjectModal}
                        onClickDelete={openDeleteProjectModal}
                        onClickDetails={moveToProjectDetails}
                    />
                </OptionsWrapper>
            </Row>
        </Container>
    );
};

export default AllProjectCard;
