import Modal from "src/components/Modal/Modal";
import { AddMembersChangesModalProps } from "./types";
import { BackgroundTitle, Container, ContainerButton1, ContainerButton2, IconContainer, IconText, NewMemberIcon, TextModal, TitleModal } from "./styles";
import CustomButton from "src/components/CustomButton/CustomButton";
import { Row } from "src/components/styles";
import { Icon } from "@iconify/react/dist/iconify.js";

const testModalStyles = {
    padding: "0px",
};

const AddMembersChangesModal = ({ modalProps }: AddMembersChangesModalProps) => {
    return (
        <Modal {...modalProps} sizeProps={testModalStyles}>
            <BackgroundTitle>
                <TitleModal>Agregar miembros 📑</TitleModal>
            </BackgroundTitle>
            <Container>
            <TextModal>Miembros del proyecto</TextModal>
            <NewMemberIcon>
                <IconContainer><Icon icon="mdi:user-add" /></IconContainer>
                <IconText>Elija un nuevo miembro para el proyecto</IconText>
            </NewMemberIcon>
            <Row margin="0px 62px 0px 0px">
                <ContainerButton1>
                    <CustomButton content="Cancelar"></CustomButton>
                </ContainerButton1>
                <ContainerButton2>
                    <CustomButton content="Agregar"></CustomButton>
                </ContainerButton2>
            </Row>
            </Container> 
        </Modal>
    );
};

export default AddMembersChangesModal;
