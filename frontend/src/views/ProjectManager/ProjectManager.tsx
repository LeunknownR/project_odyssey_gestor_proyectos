import Header from "src/views/components/Header/Header";
import { Container, TemporalMain } from "./styles";
import SidebarMenu from "../components/SidebarMenu/SidebarMenu";
import NewProjectModal from "./components/NewProjectModal/NewProjectModal";
import useModal from "src/components/Modal/utils/hooks/useModal";
import RecentProjects from "./components/RecentProjects/RecentProjects";
import UpdateProjectModal from "./components/UpdateProjectModal/UpdateProjectModal";
import AllProjects from "./components/AllProjects/AllProjects";
import ProjectDetails from "./components/ProjectDetails/ProjectDetails";
import NotificationCard from "src/components/NotificationCard/NotificationCard";
import useNotificationCard from "src/components/NotificationCard/utils/hooks/useNotificationCard";

const ProjectManager = () => {
    const newProjectModal = useModal();
    const updateProjectModal = useModal();
    const openNewProjectModal = () => newProjectModal.handleOpen(true);
    const openUpdateProjectModal = () => updateProjectModal.handleOpen(true);
    const notificationCard = useNotificationCard();
    return (
        <>
        <Container>
            <Header />
            <SidebarMenu openNewProjectModal={openNewProjectModal} />
            <TemporalMain>
                <button onClick={() => notificationCard.show()} style={{ padding: "100px 0" }}>Abrir</button>
                <NotificationCard 
                    show={notificationCard.visible}
                    handler={notificationCard}
                    maxSeconds={notificationCard.timeoutToClose/1000}/>
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
