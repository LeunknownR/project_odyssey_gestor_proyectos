import Modal from "src/components/Modal/Modal";
import { SavedChangesModalProps } from "./types";
import { Container, ContainerButton, IconContainer, TextModal, TitleModal } from "./styles";
import { Icon } from "@iconify/react/dist/iconify.js";
import CustomButton from "src/components/CustomButton/CustomButton";
import { Row } from "src/components/styles";

const testModalStyles = {
    padding: "0px",
};

const SavedChangesModal = ({ modalProps }: SavedChangesModalProps) => {
    return (
        <Modal {...modalProps} sizeProps={testModalStyles}>
            <Container>
            <Row align="center" gap="10px">
                <IconContainer><Icon icon="iconamoon:attention-square-fill" /></IconContainer>
                <TitleModal>CAMBIOS GUARDADOS</TitleModal>
            </Row>
            <TextModal>Los cambios que hizo se han guardado correctamente</TextModal>
            <ContainerButton>
                <CustomButton content="Confirmar" width="102.52px"></CustomButton>
            </ContainerButton>
            </Container> 
        </Modal>
    );
};

export default SavedChangesModal;
