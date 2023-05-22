import { Container, TemporalMain } from "./styles";
import SidebarMenu from "../components/SidebarMenu/SidebarMenu";
import useModal from "src/components/Modal/utils/hooks/useModal";
import RecentProjects from "./components/RecentProjects/RecentProjects";
import UpdateProjectModal from "./components/UpdateProjectModal/UpdateProjectModal";
import AllProjects from "./components/AllProjects/AllProjects";
// import ProjectDetails from "./components/ProjectDetails/ProjectDetails";
import NotificationCard from "src/components/NotificationCard/NotificationCard";
import useNotificationCard from "src/components/NotificationCard/utils/hooks/useNotificationCard";
import { useEffect, useState } from "react";
import { requestGetProjectsForGeneralAdmin } from "src/services/projects/relatedToProjects";
import { Project } from "src/entities/project/types";
import NewProjectSection from "./components/NewProjectSection/NewProjectSection";
import useFormProject from "./utils/hooks/useForm";

const ProjectManager = () => {
    const [recentProjects, setRecentProjects] = useState<Project[]>([]);
    const [allProjects, setAllProjects] = useState<Project[]>([]);
    const [currentProject, setCurrentProject] = useState<Project | null>(null);
    const notificationCard = useNotificationCard();
    const newProjectModal = useModal();
    const updateProjectModal = useModal();
    const { form, getProjectFromForm } = useFormProject(
        newProjectModal,
        updateProjectModal,
        currentProject
    );
    // const openUpdateProjectModal = () => updateProjectModal.handleOpen(true);
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
        setRecentProjects(data.data?.recents);
        setAllProjects(data.data?.all);
    };
    const fillCurrentProject = (project: Project | null) => {
        setCurrentProject(project);
    };
    return (
        <>
            <SidebarMenu
                mainMenuButton={
                    <NewProjectSection
                        modal={newProjectModal}
                        form={form}
                        getProjectFromForm={getProjectFromForm}
                        setCurrentProject={setCurrentProject}
                    />
                }
            />
            {/* <ProjectManagerContext.Provider value={{openUpdateModal, openDeleteModal}}> */}
            <Container>
                <TemporalMain>
                    {/* <button onClick={() => notificationCard.show()} style={{ padding: "100px 0" }}>Abrir</button> */}
                    <NotificationCard
                        show={notificationCard.visible}
                        handler={notificationCard}
                        maxSeconds={notificationCard.timeoutToClose / 1_000}
                    />
                    <RecentProjects
                        recentProjects={recentProjects}
                        setCurrentProject={setCurrentProject}
                        updateProjectModal={updateProjectModal}
                    />
                    <AllProjects allProjects={allProjects} />
                    {/* <ProjectDetails /> */}
                </TemporalMain>
            </Container>
            <UpdateProjectModal
                modalProps={updateProjectModal}
                form={form}
                getProjectFromForm={getProjectFromForm}
            />
            {/* </ProjectManagerContext.Provider> */}
        </>
    );
};

export default ProjectManager;
