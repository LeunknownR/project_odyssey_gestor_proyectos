import ConfirmationModal from "src/components/ConfirmationModal";
import { DeleteTaskModalProps } from "./types";
import { CancelRedModalButton, ConfirmRedModalButton } from "src/views/ProjectView/components/styles";

const DeleteTaskModal = ({
    modalProps, deleteTask
}: DeleteTaskModalProps) => {
    return (
        <ConfirmationModal
            modalProps={modalProps}
            title="ELIMINAR TAREA"
            description="Esta acción eliminará permanentemente la tarea.">
            <CancelRedModalButton
                content="Cancelar"
                onClick={() => modalProps.open(false)}
            />
            <ConfirmRedModalButton 
                content="Eliminar" 
                onClick={deleteTask} />
        </ConfirmationModal>
    );
};

export default DeleteTaskModal;
