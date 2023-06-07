import Modal from "src/components/Modal/Modal";
import { SavedChangesModalProps } from "./types";
import { IconContainer, TextModal, TitleModal } from "./styles";
import { Icon } from "@iconify/react/dist/iconify.js";
import { FlexFlow } from "src/components/styles";
import Footer from "./components/Footer/Footer";

const testModalStyles = {
    padding: "20px 30px",
    minWidth: "620px"
};

const SavedChangesModal = ({ modalProps }: SavedChangesModalProps) => {
    return (
        <Modal {...modalProps} sizeProps={testModalStyles}>
            <FlexFlow align="center" gap="10px" justifySelf="flex-start">
                <IconContainer><Icon icon="iconamoon:attention-square-fill" /></IconContainer>
                <TitleModal>CAMBIOS GUARDADOS</TitleModal>
            </FlexFlow>
            <TextModal>Los cambios que hizo se han guardado correctamente.</TextModal>
            <Footer />
        </Modal>
    );
};

export default SavedChangesModal;