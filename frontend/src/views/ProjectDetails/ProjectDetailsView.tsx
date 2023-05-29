import { useState, useEffect } from "react";
import TitleHeader from "src/views/ProjectManager/components/TitleHeader/TitleHeader";
import { Container, Content } from "./styles";
import ProjectInfo from "./components/ProjectInfo/ProjectInfo";
import ProjectTeam from "./components/ProjectTeam/ProjectTeam";
import Footer from "./components/Footer/Footer";
import { ProjectDetails } from "src/entities/project/types";
import { getProjectId } from "src/storage/project.session";
import { requestGetProjectDetails } from "src/services/projects/relatedToProjects";
import AddMembersModal from "./components/AddMembersModal/AddMembersModal";
import useModal from "src/components/Modal/utils/hooks/useModal";
import UpdateEndDateModal from "./components/UpdateEndDateModal/UpdateEndDateModal";
import Preloader from "src/components/Preloader/Preloader";
import usePreloader from "src/components/Preloader/utils/hooks/usePreloader";
import SidebarMenu from "../components/SidebarMenu/SidebarMenu";
import DeleteMemberModal from "./components/DeleteMemberModal/DeleteMemberModal";
import useNotificationCard from "src/components/NotificationCard/utils/hooks/useNotificationCard";
import NotificationCard from "src/components/NotificationCard/NotificationCard";
import { ProjectCollaborator } from "src/entities/collaborator/types";
import { Column } from "src/components/styles";

const ProjectDetailsView = () => {
    const [projectDetails, setProjectDetails] = useState<ProjectDetails | null>(null);
    const [currentProjectMember, setCurrentProjectMember] = useState<ProjectCollaborator | null>(null);
    const addMemberModal = useModal();
    const updateDateModal = useModal();
    const deleteMemberModal = useModal();
    const preloader = usePreloader();
    const notificationCard = useNotificationCard();
    useEffect(() => {
        fillProjectDetails();
    }, []);
    const fillProjectDetails = async (): Promise<void> => {
        preloader.show("Cargando detalles del proyecto...");
        const { data } = await requestGetProjectDetails(getProjectId());
        preloader.hide();
        if (data === null) return;
        setProjectDetails(data);
    };
    const openAddMemberModal = (): void => {
        notificationCard.hide();
        addMemberModal.open(true);
    }
    const openUpdateDateModal = (): void => {
        notificationCard.hide();
        updateDateModal.open(true);
    }
    const openDeleteModal = (projectCollaborator: ProjectCollaborator): void => {
        setCurrentProjectMember(projectCollaborator);
        notificationCard.hide();
        deleteMemberModal.open(true);
    };
    return (
        <>
        <SidebarMenu />
        <Container>
            <Content>
                <TitleHeader text="DETALLE DEL PROYECTO" />
                {projectDetails && (
                    <Column gap="35px">
                        <ProjectInfo
                            name={projectDetails.name}
                            description={projectDetails.description}
                            period={projectDetails.period}
                            openUpdateDateModal={openUpdateDateModal}
                        />
                        <ProjectTeam
                            collaborators={projectDetails.collaborators}
                            openAddMemberModal={openAddMemberModal}
                            openDeleteModal={openDeleteModal}
                        />
                    </Column>
                )}
                <Footer />
            </Content>
        </Container>
        {projectDetails && (
            <>
            <AddMembersModal
                modalProps={addMemberModal}
                preloader={preloader}
                fillProjectDetails={fillProjectDetails}
                projectId={projectDetails.id}
                notificationCard={notificationCard}
            />
            <UpdateEndDateModal
                modalProps={updateDateModal}
                currentEndDate={projectDetails.endDate}
                projectId={projectDetails.id}
                preloader={preloader}
                fillProjectDetails={fillProjectDetails}
                notificationCard={notificationCard}
            />
            </>
        )}
        {projectDetails && (
            <DeleteMemberModal
                modalProps={deleteMemberModal}
                preloader={preloader}
                fillProjectDetails={fillProjectDetails}
                projectMemberToDelete={currentProjectMember}
                notificationCard={notificationCard}
            />
        )}
        <NotificationCard 
            handler={notificationCard}
            variant={notificationCard.cardVariant}/>
        <Preloader {...preloader.value} />
        </>
    );
};

export default ProjectDetailsView;
