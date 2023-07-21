import { ConfirmationChangePasswordModalProps } from "./types";
import { CustomModal, IconContainer, TextModal, TitleModal } from "./styles";
import { Icon } from "@iconify/react/dist/iconify.js";
import Footer from "./components/Footer/Footer";
import { FlexFlow } from "src/components/styles";

const testModalStyles = {
    padding: "20px 30px",
    maxWidth: "630px",
};

const ConfirmationChangePasswordModal = ({
    modalProps,
}: ConfirmationChangePasswordModalProps) => {
    return (
        <CustomModal {...modalProps} sizeProps={testModalStyles}>
            <FlexFlow align="center" gap="10px" justifySelf="flex-start">
                <IconContainer>
                    <Icon icon="iconamoon:attention-square-fill" />
                </IconContainer>
                <TitleModal>CONFIRMACIÓN</TitleModal>
            </FlexFlow>
            <FlexFlow justifySelf="flex-start">
                <TextModal>¿Estás seguro de esta contraseña?</TextModal>
            </FlexFlow>
            <Footer modal={modalProps} />
        </CustomModal>
    );
};

export default ConfirmationChangePasswordModal;
