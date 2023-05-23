import Modal from "src/components/Modal/Modal";
import { IconContainer, TitleModal } from "./styles";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Row } from "src/components/styles";
import { UpdateDateModalProps } from "./types";
import Footer from "./components/Footer/Footer";

const testModalStyles = {
    padding: "20px 30px",
    minWidth: "700px"
};

const UpdateDateModal = ({ modalProps }: UpdateDateModalProps) => {
    return (
        <Modal {...modalProps} sizeProps={testModalStyles}>
            <Row align="center" gap="10px" justifySelf="flex-start">
                <IconContainer><Icon icon="iconamoon:attention-square-fill" /></IconContainer>
                <TitleModal>ACTUALIZACIÓN DE FECHA DE FINALIZACIÓN</TitleModal>
            </Row>
            <Footer />
        </Modal>
    );
};

export default UpdateDateModal;
