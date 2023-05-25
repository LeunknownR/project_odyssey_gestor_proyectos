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

const ProjectDetailsView = () => {
    const [projectDetails, setProjectDetails] = useState<ProjectDetails | null>(
        null
    );
    const addMemberModal = useModal(true);
    const updateDateModal = useModal();
    const preloader = usePreloader();
    useEffect(() => {
        fillProjectDetails();
    }, []);
    const fillProjectDetails = async () => {
        preloader.show("Cargando detalles del proyecto...");
        const { data } = await requestGetProjectDetails(getProjectId());
        preloader.hide();
        if (data === null) return;
        console.log(data);
        setProjectDetails(data);
    };
    return (
        <>
        <Container>
            <Content>
                <TitleHeader text="DETALLE DEL PROYECTO" />
                {projectDetails && (
                    <>
                    <ProjectInfo
                        name={projectDetails.name}
                        description={projectDetails.description}
                        period={projectDetails.period}
                    />
                    <ProjectTeam
                        collaborators={projectDetails.collaborators}
                    />
                    </>
                )}
                <Footer />
            </Content>
        </Container>
        <AddMembersModal
            modalProps={addMemberModal}
            preloader={preloader}
        />
        <UpdateDateModal modalProps={updateDateModal} />
        <Preloader {...preloader.value} />
        </>
    );
};

export default ProjectDetailsView;
