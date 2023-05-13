import Modal from "src/components/Modal/Modal";
import { ActualizationChangesModalProps } from "./types";
import { Container, ContainerButton1, ContainerButton2, IconContainer, TitleModal } from "./styles";
import { Icon } from "@iconify/react/dist/iconify.js";
import CustomButton from "src/components/CustomButton/CustomButton";
import { Row } from "src/components/styles";

const testModalStyles = {
    padding: "0px",
};

const ActualizationChangesModal = ({ modalProps }: ActualizationChangesModalProps) => {
    return (
        <Modal {...modalProps} sizeProps={testModalStyles}>
            <Container>
            <Row align="center" gap="10px">
                <IconContainer><Icon icon="iconamoon:attention-square-fill" /></IconContainer>
                <TitleModal>ACTUALIZACIÓN DE FECHA DE FINALIZACIÓN</TitleModal>
            </Row>
            <Row padding="11px 0px 0px 0px">
                <ContainerButton1>
                    <CustomButton content="Cancelar"></CustomButton>
                </ContainerButton1>
                <ContainerButton2>
                    <CustomButton content="Guardar"></CustomButton>
                </ContainerButton2>
            </Row>
            </Container> 
        </Modal>
    );
};

export default ActualizationChangesModal;
