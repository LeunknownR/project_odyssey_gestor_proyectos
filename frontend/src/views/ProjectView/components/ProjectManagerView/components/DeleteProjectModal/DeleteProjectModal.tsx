import Modal from "src/components/Modal/Modal";
import { DeleteProjectModalProps } from "./types";
import { IconContainer, TextModal, TitleModal } from "./styles";
import { Icon } from "@iconify/react/dist/iconify.js";
import Footer from "./components/Footer/Footer";
import { requestDeleteProject } from "src/services/projects/relatedToProjects";
import { CardVariant } from "src/components/NotificationCard/types";
import { FlexFlow } from "src/components/styles";

const testModalStyles = {
    padding: "20px 30px",
    maxWidth: "630px"
};

const DeleteProjectModal = ({ 
    preloader, 
    fillProjects,
    modalProps, 
    projectId, 
    notificationCard
}: DeleteProjectModalProps) => {
    const deleteProject = async () => {
        if (!projectId) return;
        modalProps.open(false);
        preloader.show("Eliminando proyecto...");
        const { message } = await requestDeleteProject(projectId);
        preloader.hide();
        if (message !== "SUCCESS") return;
        fillProjects();
        notificationCard.changeVariant(CardVariant.DeleteProject);
        notificationCard.show();
    };
    return (
        <Modal {...modalProps} sizeProps={testModalStyles}>
            <FlexFlow align="center" gap="10px" justifySelf="flex-start">
                <IconContainer>
                    <Icon icon="iconamoon:attention-square-fill" />
                </IconContainer>
                <TitleModal>ELIMINAR PROYECTO</TitleModal>
            </FlexFlow>
            <TextModal>
                Esta acción es permanente, y eliminará todo lo relacionado con
                el proyecto: <b>tareas, cronograma y salas de chat.</b>
            </TextModal>
            <Footer 
                modal={modalProps}
                deleteProject={deleteProject}/>
        </Modal>
    );
};

export default DeleteProjectModal;