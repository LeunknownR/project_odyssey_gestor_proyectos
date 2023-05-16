import Header from "src/views/components/Header/Header";
import { Container, TemporalMain } from "./styles";
import SidebarMenu from "../components/SidebarMenu/SidebarMenu";
import NewProjectModal from "./components/NewProjectModal/NewProjectModal";
import useModal from "src/components/Modal/utils/hooks/useModal";
import RecentProjects from "./components/RecentProjects/RecentProjects";
import UpdateProjectModal from "./components/UpdateProjectModal/UpdateProjectModal";
import AllProjects from "./components/AllProjects/AllProjects";
import ProjectDetails from "./components/ProjectDetails/ProjectDetails";

const ProjectManager = () => {
    const newProjectModal = useModal();
    const updateProjectModal = useModal(true);
    const openNewProjectModal = () => newProjectModal.handleOpen(true);
    const openUpdateProjectModal = () => updateProjectModal.handleOpen(true);
    return (
        <>
        <Container>
            <Header />
            <SidebarMenu openNewProjectModal={openNewProjectModal} />
            <TemporalMain>
                {/* <RecentProjects />
                <AllProjects /> */}
                <ProjectDetails />
            </TemporalMain>
        </Container>
        <NewProjectModal modalProps={newProjectModal} />
        <UpdateProjectModal modalProps={updateProjectModal}/>
        </>
    );
};

export default ProjectManager;
