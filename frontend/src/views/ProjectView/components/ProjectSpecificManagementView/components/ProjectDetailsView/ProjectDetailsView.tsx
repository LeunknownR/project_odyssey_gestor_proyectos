import { useState, useEffect } from "react";
import TitleHeader from "src/views/components/TitleHeader/TitleHeader";
import { Container, Content } from "./styles";
import ProjectInfo from "./components/ProjectInfo/ProjectInfo";
import ProjectTeam from "./components/ProjectTeam/ProjectTeam";
import Footer from "./components/Footer/Footer";
import { ProjectDetails } from "src/entities/project/entities";
import { requestDeleteMember, requestGetProjectDetails } from "src/services/projects/relatedToProjects";
import AddMembersModal from "./components/AddMembersModal/AddMembersModal";
import useModal from "src/components/Modal/utils/hooks/useModal";
import UpdateEndDateModal from "./components/UpdateEndDateModal/UpdateEndDateModal";
import Preloader from "src/components/Preloader/Preloader";
import usePreloader from "src/components/Preloader/utils/hooks/usePreloader";
import DeleteMemberModal from "./components/DeleteMemberModal/DeleteMemberModal";
import useNotificationCard from "src/components/NotificationCard/utils/hooks/useNotificationCard";
import NotificationCard from "src/components/NotificationCard/NotificationCard";
import { ProjectCollaborator } from "src/entities/collaborator/entities";
import { DBProjectRoles } from "src/config/roles";
import { getUserId } from "src/storage/user.local";
import { FlexFlow } from "src/components/styles";
import { CardVariant } from "src/components/NotificationCard/types";
import { ProjectSubmoduleViewProps } from "src/config/types";

const ProjectDetailsView = ({ projectId }: ProjectSubmoduleViewProps) => {
    const [projectDetails, setProjectDetails] = useState<ProjectDetails | null>(null);
    const [currentProjectMember, setCurrentProjectMember] = useState<ProjectCollaborator | null>(null);
    const [currentUserIsProjectLeader, setCurrentUserIsProjectLeader] = useState(false);
    const addMemberModal = useModal();
    const updateDateModal = useModal();
    const deleteMemberModal = useModal();
    const preloader = usePreloader();
    const notificationCard = useNotificationCard();
    useEffect(() => {
        fillProjectDetails();
    }, []);
    useEffect(() => {
        if (!projectDetails) return;
        setCurrentUserIsProjectLeader(
            projectDetails
            .collaborators
            .some(({ id, projectRole }) => projectRole.id === DBProjectRoles.ProjectLeader && id === getUserId()));
    }, [projectDetails]);
    const fillProjectDetails = async (): Promise<void> => {
        preloader.show("Cargando detalles del proyecto...");
        const { data } = await requestGetProjectDetails(projectId);
        preloader.hide();
        if (data === null) return;
        setProjectDetails(data);
    };
    const deleteMember = async () => {
        if (!currentProjectMember) return;
        deleteMemberModal.open(false);
        preloader.show("Eliminando colaborador...");
        const { message } = await requestDeleteMember(currentProjectMember.projectTeamMemberId);
        preloader.hide();
        if (message !== "SUCCESS") return;
        await fillProjectDetails();
        notificationCard.changeVariant(CardVariant.DeleteMember);
        notificationCard.show();
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
        <Container>
            <Content>
                <TitleHeader text="DETALLE DEL PROYECTO" />
                {projectDetails && (
                    <FlexFlow direction="column" gap="35px">
                        <ProjectInfo
                            projectDetails={projectDetails}
                            openUpdateDateModal={openUpdateDateModal}
                            currentUserIsProjectLeader={currentUserIsProjectLeader}
                        />
                        <ProjectTeam
                            collaborators={projectDetails.collaborators}
                            openAddMemberModal={openAddMemberModal}
                            openDeleteModal={openDeleteModal}
                            currentUserIsProjectLeader={currentUserIsProjectLeader}
                        />
                    </FlexFlow>
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
            <DeleteMemberModal
                modalProps={deleteMemberModal}
                deleteMember={deleteMember}
            />
            </>
        )}
        <NotificationCard 
            handler={notificationCard}
            variant={notificationCard.cardVariant}/>
        <Preloader {...preloader.value} />
        </>
    );
};

export default ProjectDetailsView;
