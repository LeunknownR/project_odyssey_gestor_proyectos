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

const RecentProjectCard = ({
    project,
    setCurrentProject,
    updateProjectModal,
    deleteProjectModal,
}: RecentProjectCardProps) => {
    const { name, state } = project;
    const openUpdateProjectModal = () => updateProjectModal.open(true);
    const openDeleteProjectModal = () => deleteProjectModal.open(true);
    return (
        <Container>
            <OptionsWrapper onClick={() => setCurrentProject(project)}>
                <MenuOptions
                    onClickEdit={openUpdateProjectModal}
                    onClickDelete={openDeleteProjectModal}
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
