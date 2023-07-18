import ConfirmationModal from "src/components/ConfirmationModal";
import { DeleteCollaboratorModalProps } from "./types";
import { CancelRedModalButton, ConfirmRedModalButton } from "src/views/ProjectView/components/styles";

const DeleteMemberModal = ({
    modalProps,
    deleteMember
}: DeleteCollaboratorModalProps) => {
    return (
        <ConfirmationModal
            modalProps={modalProps}
            title="ELIMINAR MIEMBRO"
            description="Esta acción eliminará al miembro del proyecto.">
            <CancelRedModalButton
                content="Cancelar"
                onClick={() => modalProps.open(false)}
            />
            <ConfirmRedModalButton 
                content="Eliminar" 
                onClick={deleteMember} />
        </ConfirmationModal>
    );
};

export default DeleteMemberModal;
