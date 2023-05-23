import { Container, Content } from "./styles";
import SidebarMenu from "../components/SidebarMenu/SidebarMenu";
import useModal from "src/components/Modal/utils/hooks/useModal";
import RecentProjects from "./components/RecentProjects/RecentProjects";
import UpdateProjectModal from "./components/UpdateProjectModal/UpdateProjectModal";
import AllProjects from "./components/AllProjects/AllProjects";
// import ProjectDetails from "./components/ProjectDetails/ProjectDetails";
import NotificationCard from "src/components/NotificationCard/NotificationCard";
import useNotificationCard from "src/components/NotificationCard/utils/hooks/useNotificationCard";
import { useEffect, useState } from "react";
import { requestGetProjectsForCollaborator, requestGetProjectsForGeneralAdmin } from "src/services/projects/relatedToProjects";
import { GroupedProjectList, Project } from "src/entities/project/types";
import NewProjectSection from "./components/NewProjectSection/NewProjectSection";
import useFormProject from "./utils/hooks/useForm";
import DeleteProjectModal from "./components/DeleteProjectModal/DeleteProjectModal";
import ProjectFinder from "./components/ProjectFinder/ProjectFinder";
import { APIRequestFunction } from "src/services/types";
import { DBRoles } from "src/config/roles";
import useUserRole from "src/storage/hooks/useUserRole";

const ProjectManager = () => {
    const [recentProjects, setRecentProjects] = useState<Project[]>([]);
    const [allProjects, setAllProjects] = useState<Project[]>([]);
    const [currentProject, setCurrentProject] = useState<Project | null>(null);
    const [searchedProject, setSearchedProject] = useState<string>("a");
    const notificationCard = useNotificationCard();
    const newProjectModal = useModal();
    const updateProjectModal = useModal();
    const deleteProjectModal = useModal();
    const { form, getProjectFromForm } = useFormProject(
        newProjectModal,
        updateProjectModal,
        currentProject
    );
    const userRole: string | null = useUserRole();
    // const openUpdateProjectModal = () => updateProjectModal.handleOpen(true);
    useEffect(() => {
        if (!userRole) return;
        fillProjects();
        // return () => CancelServiceRequest.cancel();
    }, [userRole]);
    // const preloader = usePreloader();
    const fillProjectsBase = async (request: APIRequestFunction<
        GroupedProjectList,
        string
    >) => {
        // preloader.show(null);
        const { data } = await request(searchedProject);
        // preloader.hide();
        if (data === null) return;
        setRecentProjects(data?.recents);
        setAllProjects(data?.all);
    };
    const fillProjects = async (): Promise<void> => {
        if (userRole === DBRoles.GeneralAdmin)
            fillProjectsBase(requestGetProjectsForGeneralAdmin);
        else if (userRole === DBRoles.Collaborator)
            fillProjectsBase(requestGetProjectsForCollaborator);
    }
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
                        fillProjects={fillProjects}
                    />
                }
            />
            {/* <ProjectManagerContext.Provider value={{openUpdateModal, openDeleteModal}}> */}
            <Container>
                <Content>
                    <ProjectFinder/>
                    <RecentProjects
                        recentProjects={recentProjects}
                        setCurrentProject={setCurrentProject}
                        updateProjectModal={updateProjectModal}
                        deleteProjectModal={deleteProjectModal}
                    />
                    <AllProjects
                        allProjects={allProjects}
                        setCurrentProject={setCurrentProject}
                        updateProjectModal={updateProjectModal}
                        deleteProjectModal={deleteProjectModal}
                    />
                    {/* <ProjectDetails /> */}
                </Content>
            </Container>
            <UpdateProjectModal
                modalProps={updateProjectModal}
                form={form}
                getProjectFromForm={getProjectFromForm}
                fillProjects={fillProjects}
            />
            <DeleteProjectModal
                modalProps={deleteProjectModal}
                projectId={currentProject?.id}
                fillProjects={fillProjects}
            />
            <NotificationCard
                show={notificationCard.visible}
                handler={notificationCard}
                maxSeconds={notificationCard.timeoutToClose / 1_000}
            />
            {/* </ProjectManagerContext.Provider> */}
        </>
    );
};

export default ProjectManager;
