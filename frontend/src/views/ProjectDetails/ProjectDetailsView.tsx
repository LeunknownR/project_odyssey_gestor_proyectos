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
import UpdateDateModal from "./components/UpdateDateModal/UpdateDateModal";
import Preloader from "src/components/Preloader/Preloader";
import usePreloader from "src/components/Preloader/utils/hooks/usePreloader";
import SidebarMenu from "../components/SidebarMenu/SidebarMenu";
import DeleteMemberModal from "./components/DeleteMemberModal/DeleteMemberModal";
import NotificationCard from "src/components/NotificationCard/NotificationCard";
import useNotificationCard from "src/components/NotificationCard/utils/hooks/useNotificationCard";

const ProjectDetailsView = () => {
    const [projectDetails, setProjectDetails] = useState<ProjectDetails | null>(
        null
    );
    const [currentMemberIdToDelete, setcurrentMemberIdToDelete] = useState<
        number | null
    >(null);
    const addMemberModal = useModal();
    const updateDateModal = useModal();
    const deleteMemberModal = useModal();
    const preloader = usePreloader();
    const notificationCard = useNotificationCard();
    useEffect(() => {
        fillProjectDetails();
    }, []);
    const fillProjectDetails = async () => {
        preloader.show("Cargando detalles del proyecto...");
        const { data } = await requestGetProjectDetails(getProjectId());
        preloader.hide();
        if (data === null) return;
        setProjectDetails(data);
    };
    const openDeleteModal = (memberId: number) => {
        console.log("hola");
        setcurrentMemberIdToDelete(memberId);
        deleteMemberModal.open(true);
    };
    return (
        <>
            <SidebarMenu />
            <Container>
                <Content>
                    <TitleHeader text="DETALLE DEL PROYECTO" />
                    {projectDetails && (
                        <>
                            <ProjectInfo
                                name={projectDetails.name}
                                description={projectDetails.description}
                                period={projectDetails.period}
                                openUpdateDateModal={() =>
                                    updateDateModal.open(true)
                                }
                            />
                            <ProjectTeam
                                collaborators={projectDetails.collaborators}
                                openAddMemberModal={() =>
                                    addMemberModal.open(true)
                                }
                                openDeleteModal={openDeleteModal}
                            />
                        </>
                    )}
                    <Footer />
                </Content>
            </Container>
            {projectDetails && (
                <>
                <AddMembersModal
                    modalProps={addMemberModal}
                    preloader={preloader}
                    projectId={projectDetails.id}
                    notificationCard={notificationCard}
                />

                <UpdateDateModal
                    modalProps={updateDateModal}
                    currentEndDate={projectDetails?.endDate}
                    projectId={projectDetails.id}
                    preloader={preloader}
                />
                </>
            )}
            {currentMemberIdToDelete && projectDetails && (
                <DeleteMemberModal
                    modalProps={deleteMemberModal}
                    preloader={preloader}
                    fillCollaborator={fillProjectDetails}
                    userId={currentMemberIdToDelete}
                    projectHasMemberId={projectDetails.id}
                />
            )}
            <Preloader {...preloader.value} />
        </>
    );
};

export default ProjectDetailsView;
