import Modal from "src/components/Modal/Modal";
import { AddMembersChangesModalProps } from "./types";
import { BlackText, Container, ContainerButton1, ContainerButton2, IconContainer, TextModal, TitleModal } from "./styles";
import { Icon } from "@iconify/react/dist/iconify.js";
import CustomButton from "src/components/CustomButton/CustomButton";
import { Row } from "src/components/styles";

const testModalStyles = {
    padding: "0px",
};

const AddMembersChangesModal = ({ modalProps }: AddMembersChangesModalProps) => {
    return (
        <Modal {...modalProps} sizeProps={testModalStyles}>
            <Container>
            <Row align="center" gap="10px">
                <IconContainer><Icon icon="iconamoon:attention-square-fill" /></IconContainer>
                <TitleModal>ELIMINAR PROYECTO</TitleModal>
            </Row>
            <Row padding="11px 0px 0px 0px">
                <TextModal>Esta acción es permanente, y eliminará todo lo relacionado con el proyecto:
                <BlackText>tareas, cronograma y salas de chat.</BlackText></TextModal>
            </Row>
            <Row padding="11px 0px 0px 0px">
                <ContainerButton1>
                    <CustomButton content="Cancelar" width="102.52px"></CustomButton>
                </ContainerButton1>
                <ContainerButton2>
                    <CustomButton content="Eliminar" width="102.52px"></CustomButton>
                </ContainerButton2>
            </Row>
            </Container> 
        </Modal>
    );
};

export default AddMembersChangesModal;
