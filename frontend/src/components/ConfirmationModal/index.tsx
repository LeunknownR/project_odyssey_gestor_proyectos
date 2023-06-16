import Modal from "src/components/Modal/Modal";
import { ConfirmationModalProps } from "./types";
import { Footer, IconContainer, TextModal, TitleModal } from "./styles";
import { Icon } from "@iconify/react/dist/iconify.js";
import { FlexFlow } from "src/components/styles";

const testModalStyles = {
    padding: "20px 30px",
    maxWidth: "630px"
};

const ConfirmationModal = ({ 
    modalProps, title, 
    description, children
}: ConfirmationModalProps) => {
    return (
        <Modal {...modalProps} sizeProps={testModalStyles}>
            <FlexFlow align="center" gap="10px" justifySelf="flex-start">
                <IconContainer>
                    <Icon icon="iconamoon:attention-square-fill" />
                </IconContainer>
                <TitleModal>{title}</TitleModal>
            </FlexFlow>
            <TextModal>
                {description}
            </TextModal>
            <Footer>
                {children}
            </Footer>
        </Modal>
    );
};

export default ConfirmationModal;
