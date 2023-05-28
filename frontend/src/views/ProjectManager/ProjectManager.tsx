import { Container, Content, ProjectFinderWrapper } from "./styles";
import SidebarMenu from "../components/SidebarMenu/SidebarMenu";
import useModal from "src/components/Modal/utils/hooks/useModal";
import RecentProjects from "./components/RecentProjects/RecentProjects";
import UpdateProjectModal from "./components/UpdateProjectModal/UpdateProjectModal";
import AllProjects from "./components/AllProjects/AllProjects";
import NotificationCard from "src/components/NotificationCard/NotificationCard";
import useNotificationCard from "src/components/NotificationCard/utils/hooks/useNotificationCard";
import { useState } from "react";
import { Project } from "src/entities/project/types";
import NewProjectSection from "./components/NewProjectSection/NewProjectSection";
import useFormProject from "./utils/hooks/useFormProject";
import DeleteProjectModal from "./components/DeleteProjectModal/DeleteProjectModal";
import ProjectFinder from "./components/ProjectFinder/ProjectFinder";
import useProjectList from "./utils/hooks/useProjectList";
import useProjectFilters from "./utils/hooks/useProjectFilters";
import usePreloader from "src/components/Preloader/utils/hooks/usePreloader";
import Preloader from "src/components/Preloader/Preloader";

const ProjectManager = () => {
    const [currentProject, setCurrentProject] = useState<Project | null>(null);
    const notificationCard = useNotificationCard();
    const newProjectModal = useModal();
    const updateProjectModal = useModal();
    const deleteProjectModal = useModal();
    const preloader = usePreloader();
    const { form, getProjectFromForm } = useFormProject(
        newProjectModal,
        updateProjectModal,
        currentProject
    );
    const filters = useProjectFilters();
    const { recentProjects, allProjects, fillProjects, doFill } = useProjectList(preloader, filters.value);
    const openUpdateProjectModal = () => {
        notificationCard.hide();
        updateProjectModal.open(true);
    }
    const openDeleteProjectModal = () => {
        notificationCard.hide();
        deleteProjectModal.open(true);
    }
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
                    preloader={preloader}
                    notificationCard={notificationCard}
                />}/>
        <Container>
            <Content>
                <ProjectFinderWrapper>
                    <ProjectFinder
                        filters={filters}
                        doFillProjects={doFill}
                    />
                </ProjectFinderWrapper>
                <RecentProjects
                    recentProjects={recentProjects}
                    setCurrentProject={setCurrentProject}
                    openUpdateProjectModal={openUpdateProjectModal}
                    openDeleteProjectModal={openDeleteProjectModal}
                />
                <AllProjects
                    allProjects={allProjects}
                    setCurrentProject={setCurrentProject}
                    openUpdateProjectModal={openUpdateProjectModal}
                    openDeleteProjectModal={openDeleteProjectModal}
                />
            </Content>
        </Container>
        <UpdateProjectModal
            modalProps={updateProjectModal}
            form={form}
            getProjectFromForm={getProjectFromForm}
            fillProjects={fillProjects}
            preloader={preloader}
            notificationCard={notificationCard}
        />
        <DeleteProjectModal
            preloader={preloader}
            modalProps={deleteProjectModal}
            projectId={currentProject?.id}
            fillProjects={fillProjects}
            notificationCard={notificationCard}
        />
        <NotificationCard 
            handler={notificationCard} 
            variant={notificationCard.cardVariant}
        />
        <Preloader {...preloader.value} />
        </>
    );
};

export default ProjectManager;
