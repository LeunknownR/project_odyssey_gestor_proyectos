import Modal from "src/components/Modal/Modal";
import { DeleteCollaboratorModalProps } from "./types";
import { IconContainer, TextModal, TitleModal } from "./styles";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Row } from "src/components/styles";
import Footer from "./components/Footer/Footer";
import { requestDeleteProject } from "src/services/projects/relatedToProjects";
import { ResponseBody } from "src/services/types";
import { requestDeleteCollaborator } from "src/services/collaborators/relatedToCollaborators";

const testModalStyles = {
    padding: "20px 30px",
    maxWidth: "630px"
};

const DeleteCollaboratorModal = ({ 
    // preloader, 
    fillCollaborator,
    modalProps, 
    userId 
}: DeleteCollaboratorModalProps) => {
    const deleteCollaborator = async () => {
        if (!userId) return;
        modalProps.open(false);
        // preloader.show("Eliminando colaborador...");
        const { message } = await requestDeleteCollaborator(userId);
        if (message !== "SUCCESS") return;
        fillCollaborator();
    };
    return (
        <Modal {...modalProps} sizeProps={testModalStyles}>
            <Row align="center" gap="10px" justifySelf="flex-start">
                <IconContainer>
                    <Icon icon="iconamoon:attention-square-fill" />
                </IconContainer>
                <TitleModal>ELIMINAR COLABORADOR</TitleModal>
            </Row>
            <TextModal>
                Esta acción eliminará al colaborador del proyecto.
            </TextModal>
            <Footer 
                modal={modalProps}
                deleteCollaborator={deleteCollaborator}/>
        </Modal>
    );
};

export default DeleteCollaboratorModal;
