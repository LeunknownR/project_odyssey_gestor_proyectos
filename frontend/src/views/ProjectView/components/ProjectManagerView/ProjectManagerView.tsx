import { useState } from "react";
import { Container, Content, ProjectFinderWrapper } from "./styles";
import useModal from "src/components/Modal/utils/hooks/useModal";
import RecentProjects from "./components/RecentProjects/RecentProjects";
import UpdateProjectModal from "./components/UpdateProjectModal/UpdateProjectModal";
import AllProjects from "./components/AllProjects/AllProjects";
import NotificationCard from "src/components/NotificationCard/NotificationCard";
import useNotificationCard from "src/components/NotificationCard/utils/hooks/useNotificationCard";
import { Project } from "src/entities/project/entities";
import NewProjectSection from "./components/NewProjectSection/NewProjectSection";
import useFormProject from "./utils/hooks/useFormProject";
import DeleteProjectModal from "./components/DeleteProjectModal/DeleteProjectModal";
import ProjectFinder from "./components/ProjectFinder/ProjectFinder";
import useProjectList from "./utils/hooks/useProjectList";
import useProjectFilters from "./utils/hooks/useProjectFilters";
import usePreloader from "src/components/Preloader/utils/hooks/usePreloader";
import Preloader from "src/components/Preloader/Preloader";
import EmptyProjects from "./components/EmptyProjects/EmptyProjects";
import SidebarMenu from "src/views/components/SidebarMenu/SidebarMenu";
import { DBRoles } from "src/config/roles";
import { MenuOption } from "src/views/components/MenuOptions/types";
import useUserRole from "src/storage/hooks/useUserRole";

const ProjectManagerView = () => {
    const [currentProject, setCurrentProject] = useState<Project | null>(null);
    const notificationCard = useNotificationCard();
    const newProjectModal = useModal();
    const updateProjectModal = useModal();
    const deleteProjectModal = useModal();
    const preloader = usePreloader();
    const userRole = useUserRole();
    const { form, getProjectFromForm } = useFormProject(
        newProjectModal,
        updateProjectModal,
        currentProject
    );
    const filters = useProjectFilters();
    const { recentProjects, allProjects, fillProjects, doFill } = useProjectList(preloader, filters.value);
    const openCreateProjectModal = () => {
        notificationCard.hide();
        setCurrentProject(null);
        newProjectModal.open(true);
    };
    const openUpdateProjectModal = (project: Project) => {
        notificationCard.hide();
        setCurrentProject(project);
        updateProjectModal.open(true);
    };
    const openDeleteProjectModal = (project: Project) => {
        notificationCard.hide();
        setCurrentProject(project);
        deleteProjectModal.open(true);
    };
    const getMenuOptions = (project: Project): MenuOption[] => {
        if (!userRole)
            return [];
        const menuOptionsByUserRole: Record<DBRoles, MenuOption[]> = {
            [DBRoles.GeneralAdmin]: [
                {
                    text: "Editar",
                    onClick: () => openUpdateProjectModal(project),
                    icon: "mingcute:edit-2-fill"
                },
                {
                    text: "Eliminar",
                    onClick: () => openDeleteProjectModal(project),
                    color: "--red-2",
                    icon: "ic:baseline-delete"
                }
            ],
            [DBRoles.Collaborator]: [
                {
                    text: "Detalles",
                    to: `${project.id}/detalles`,
                    icon: "fa6-solid:diagram-project"
                }
            ]
        };
        return menuOptionsByUserRole[userRole] || [];
    };
    return (
        <>
        <SidebarMenu
            mainMenuButton={
                <NewProjectSection
                    modal={newProjectModal}
                    form={form}
                    getProjectFromForm={getProjectFromForm}
                    fillProjects={fillProjects}
                    preloader={preloader}
                    notificationCard={notificationCard}
                    openCreateProjectModal={openCreateProjectModal}
                />
            }
        />
        <Container>
            <Content>
                <ProjectFinderWrapper>
                    <ProjectFinder
                        filters={filters}
                        doFillProjects={doFill}
                    />
                </ProjectFinderWrapper>
                {recentProjects.length > 0 ? 
                <>
                <RecentProjects
                    recentProjects={recentProjects}
                    getMenuOptions={getMenuOptions}/>
                <AllProjects
                    allProjects={allProjects}
                    getMenuOptions={getMenuOptions}/>
                </> : <EmptyProjects />}
            </Content>
            {/* GNOMO {isMobile && <NewProjectButton openCreateProjectModal={openCreateProjectModal}/>} */}
        </Container>
        <UpdateProjectModal
            modalProps={updateProjectModal}
            currentProject={currentProject}
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

export default ProjectManagerView;
