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
import { useEffect, useState } from "react";
import { requestGetProjectsForGeneralAdmin } from "src/services/projects/relatedToProjects";
import { Project } from "src/entities/project/types";

const ProjectManager = () => {
    const [recentProjects, setRecentProjects] = useState<Project[]>([]);
    const [allProjects, setAllProjects] = useState<Project[]>([]);
    const notificationCard = useNotificationCard();
    const newProjectModal = useModal();
    const updateProjectModal = useModal();
    const openUpdateProjectModal = () => updateProjectModal.handleOpen(true);
    useEffect(() => {
        fillProjects();
        // return () => CancelServiceRequest.cancel();
    }, []);
    // const preloader = usePreloader();
    const fillProjects = async () => {
        // preloader.show(null);
        const data = await requestGetProjectsForGeneralAdmin("a");
        // preloader.hide();
        if (data.data === null) return;
        // setCompanies(data);
        setRecentProjects(data.data?.recents);
        setAllProjects(data.data?.all);
    };
    return (
        <>
        {/* <ProjectManagerContext.Provider value={{openUpdateModal, openDeleteModal}}> */}
            <Container>
            <TemporalMain>
                {/* <button onClick={() => notificationCard.show()} style={{ padding: "100px 0" }}>Abrir</button> */}
                <NotificationCard 
                    show={notificationCard.visible}
                    handler={notificationCard}
                    maxSeconds={notificationCard.timeoutToClose / 1_000}/>
                <RecentProjects recentProjects={recentProjects}/>
                <AllProjects allProjects={allProjects}/>
                {/* <ProjectDetails /> */}
            </TemporalMain>
        </Container>
        <UpdateProjectModal modalProps={updateProjectModal}/>
        {/* </ProjectManagerContext.Provider> */}
        </>
    );
};

export default ProjectManager;
