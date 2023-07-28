import { NoChangePasswordModalProps } from "./types";
import { CustomModal, IconContainer, TextModal, TitleModal } from "./styles";
import { Icon } from "@iconify/react/dist/iconify.js";
import Footer from "./components/Footer/Footer";
import { FlexFlow } from "src/components/styles";

const testModalStyles = {
    padding: "20px 30px",
    maxWidth: "630px",
};

const ConfirmClosureModal = ({
    modalProps,
    closeModalAfterVerify
}: NoChangePasswordModalProps) => {
    return (
        <CustomModal {...modalProps} sizeProps={testModalStyles}>
            <FlexFlow align="center" gap="10px" justifySelf="flex-start">
                <IconContainer>
                    <Icon icon="iconamoon:attention-square-fill" />
                </IconContainer>
                <TitleModal>SALIR</TitleModal>
            </FlexFlow>
            <FlexFlow justifySelf="flex-start">
                <TextModal>Si sales deberás reiniciar el proceso para cambiar tu contraseña.</TextModal>
            </FlexFlow>
            <Footer modal={modalProps} closeModalAfterVerify={closeModalAfterVerify} />
        </CustomModal>
    );
};

export default ConfirmClosureModal;
