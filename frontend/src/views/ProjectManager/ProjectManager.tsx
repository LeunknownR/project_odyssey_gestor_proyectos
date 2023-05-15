import Header from "src/views/components/Header/Header";
import { Container } from "./styles";
import SidebarMenu from "../components/SidebarMenu/SidebarMenu";
import NewProjectModal from "./components/NewProjectModal/NewProjectModal";
import useModal from "src/components/Modal/utils/hooks/useModal";

const ProjectManager = () => {
    const newProjectModal = useModal();
    const openNewProjectModal = () => newProjectModal.handleOpen(true)
    return (
        <>
        <Container>
            <Header />
            <SidebarMenu openNewProjectModal={openNewProjectModal}/>
        </Container>
        <NewProjectModal modalProps={newProjectModal}/>
        </>
    );
};

export default ProjectManager;
