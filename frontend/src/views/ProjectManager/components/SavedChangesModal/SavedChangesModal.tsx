import Modal from "src/components/Modal/Modal";
import { SavedChangesModalProps } from "./types";

const testModalStyles = {
    padding: "0px",
};

const SavedChangesModal = ({ modalProps }: SavedChangesModalProps) => {
    return (
        <Modal {...modalProps} sizeProps={testModalStyles}>
            <h1>HOLA</h1>
        </Modal>
    );
};

export default SavedChangesModal;
