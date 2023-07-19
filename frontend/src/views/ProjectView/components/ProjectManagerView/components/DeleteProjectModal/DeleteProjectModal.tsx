import { DeleteProjectModalProps } from "./types";
import ConfirmationModal from "src/components/ConfirmationModal";
import { CancelRedModalButton, ConfirmRedModalButton } from "../../../styles";

const DeleteProjectModal = ({ 
    modalProps, 
    deleteProject
}: DeleteProjectModalProps) => {
    return (
        <ConfirmationModal
            modalProps={modalProps}
            title="ELIMINAR PROYECTO"
            description={
                <>
                Esta acción es permanente, y eliminará todo lo relacionado con
                el proyecto: <b> tareas y salas de chat.</b>
                </>
            }>
            <CancelRedModalButton
                content="Cancelar"
                onClick={() => modalProps.open(false)}/>
            <ConfirmRedModalButton
                content="Eliminar" 
                onClick={deleteProject}/>
        </ConfirmationModal>
    );
};

export default DeleteProjectModal;
