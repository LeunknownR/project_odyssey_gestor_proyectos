import { Icon } from "@iconify/react/dist/iconify.js";
import MenuOptions from "src/views/components/MenuOptions/MenuOptions";
import {
    Container,
    Image,
    OptionsWrapper,
    ProjectTitle,
    StateProject,
    TextRecentCard,
} from "./styles";
import ProjectUsers from "./components/ProjectUsers/ProjectUsers";
import { RecentProjectCardProps } from "./types";
import { useNavigate } from "react-router-dom";
import { AbsolutePaths } from "src/config/absolutePaths";
import { Project } from "src/entities/project/types";
import { setProjectId } from "src/storage/project.session";

const RecentProjectCard = ({
    project,
    setCurrentProject,
    updateProjectModal,
    deleteProjectModal,
}: RecentProjectCardProps) => {
    const { name, state } = project;
    const navigate = useNavigate();
    const openUpdateProjectModal = () => updateProjectModal.open(true);
    const openDeleteProjectModal = () => deleteProjectModal.open(true);
    const moveToProjectDetails = () => {
        navigate(AbsolutePaths.ProjectDetails);
        setProjectId(project.id)
    }
    return (
        <Container>
            <OptionsWrapper onClick={() => setCurrentProject(project)}>
                <MenuOptions
                    onClickEdit={openUpdateProjectModal}
                    onClickDelete={openDeleteProjectModal}
                    onClickDetails={moveToProjectDetails}
                />
            </OptionsWrapper>
            <Image>
                <Icon icon="ph:projector-screen-chart-fill" />
            </Image>
            <TextRecentCard>
                <div>
                    <StateProject className={state}></StateProject>
                    <ProjectTitle title={name}>{name}</ProjectTitle>
                </div>
                <ProjectUsers />
            </TextRecentCard>
        </Container>
    );
};

export default RecentProjectCard;
