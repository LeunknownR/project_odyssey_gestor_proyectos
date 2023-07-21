import Modal from "src/components/Modal/Modal";
import { DeleteCollaboratorModalProps } from "./types";
import { IconContainer, TextModal, TitleModal } from "./styles";
import { Icon } from "@iconify/react/dist/iconify.js";
import Footer from "./components/Footer/Footer";
import { FlexFlow } from "src/components/styles";

const testModalStyles = {
    padding: "20px 30px",
    maxWidth: "630px",
};

const DeleteCollaboratorModal = ({
    modalProps,
    title,
    description,
    children,
}: DeleteCollaboratorModalProps) => {
    return (
        <Modal {...modalProps} sizeProps={testModalStyles}>
            <FlexFlow align="center" gap="10px" justifySelf="flex-start">
                <IconContainer>
                    <Icon icon="iconamoon:attention-square-fill" />
                </IconContainer>
                <TitleModal>ELIMINAR COLABORADOR</TitleModal>
            </FlexFlow>
            <TextModal>
                Esta acción es permanente, y eliminará todo lo relacionado con
                el colaborador
            </TextModal>
            <Footer modal={modalProps}/>
        </Modal>
    );
};

export default DeleteCollaboratorModal;
