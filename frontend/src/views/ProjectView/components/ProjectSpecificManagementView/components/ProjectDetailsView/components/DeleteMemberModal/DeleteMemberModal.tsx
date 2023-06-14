import Modal from "src/components/Modal/Modal";
import { DeleteCollaboratorModalProps } from "./types";
import { IconContainer, TextModal, TitleModal } from "./styles";
import { Icon } from "@iconify/react/dist/iconify.js";
import Footer from "./components/Footer/Footer";
import { requestDeleteMember } from "src/services/projects/relatedToProjects";
import { CardVariant } from "src/components/NotificationCard/types";
import { FlexFlow } from "src/components/styles";

const testModalStyles = {
    padding: "20px 30px",
    maxWidth: "630px",
};

const DeleteMemberModal = ({
    preloader,
    fillProjectDetails,
    modalProps, notificationCard,
    projectMemberToDelete
}: DeleteCollaboratorModalProps) => {
    const deleteMember = async () => {
        if (!projectMemberToDelete) return;
        modalProps.open(false);
        preloader.show("Eliminando colaborador...");
        const { message } = await requestDeleteMember(projectMemberToDelete.projectHasCollaboratorId);
        preloader.hide();
        if (message !== "SUCCESS") return;
        await fillProjectDetails();
        notificationCard.changeVariant(CardVariant.DeleteMember);
        notificationCard.show();
    };
    return (
        <Modal {...modalProps} sizeProps={testModalStyles}>
            <FlexFlow align="center" gap="10px" justifySelf="flex-start">
                <IconContainer>
                    <Icon icon="iconamoon:attention-square-fill" />
                </IconContainer>
                <TitleModal>ELIMINAR MIEMBRO</TitleModal>
            </FlexFlow>
            <TextModal>
                Esta acción eliminará al miembro del proyecto.
            </TextModal>
            <Footer
                modal={modalProps}
                deleteMember={deleteMember}
            />
        </Modal>
    );
};

export default DeleteMemberModal;
