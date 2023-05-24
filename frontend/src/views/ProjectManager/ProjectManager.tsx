import { Container, Content } from "./styles";
import SidebarMenu from "../components/SidebarMenu/SidebarMenu";
import useModal from "src/components/Modal/utils/hooks/useModal";
import RecentProjects from "./components/RecentProjects/RecentProjects";
import UpdateProjectModal from "./components/UpdateProjectModal/UpdateProjectModal";
import AllProjects from "./components/AllProjects/AllProjects";
// import ProjectDetails from "./components/ProjectDetails/ProjectDetails";
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

const ProjectManager = () => {
    const [currentProject, setCurrentProject] = useState<Project | null>(null);
    const notificationCard = useNotificationCard();
    const newProjectModal = useModal();
    const updateProjectModal = useModal();
    const deleteProjectModal = useModal();
    const { form, getProjectFromForm } = useFormProject(
        newProjectModal,
        updateProjectModal,
        currentProject
    );
    const filters = useProjectFilters();
    const { recentProjects, allProjects, fillProjects, doFill } = useProjectList(filters.value);
    const changeSearchedProject = (value: string) =>
        filters.change("searchedProject", value);
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
                    />}/>
            <Container>
                <Content>
                    <ProjectFinder
                        changeSearchedProject={changeSearchedProject}
                        doTriggerFillingRequest={doFill}
                    />
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
        </>
    );
};

export default ProjectManager;
