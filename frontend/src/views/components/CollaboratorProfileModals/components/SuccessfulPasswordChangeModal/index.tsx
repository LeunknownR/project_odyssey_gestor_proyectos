import { SuccessfulPasswordChangeModalProps } from "./types";
import { Icon } from "@iconify/react/dist/iconify.js";
import { ContentImage, CustomModal, SuccessfulChangeButton, TextModal } from "./styles";
import NoContent from "src/views/components/NoContent/NoContent";
import successful from "src/images/successful.png";

const MODAL_STYLES = {
    padding: "20px 30px",
};

const SuccessfulPasswordChangeModal = ({
    modalProps,
}: SuccessfulPasswordChangeModalProps) => {
    return (
        <CustomModal {...modalProps} sizeProps={MODAL_STYLES}>
            <ContentImage src={successful} />
            <TextModal>
                <b>Ha cambiado su contraseña correctamente,</b><br/> 
                tiene que volver a iniciar sesión
            </TextModal>
            <SuccessfulChangeButton
                onClick={() => modalProps.open(false)}
                content="Cerrar"
            />
        </CustomModal>
    );
};

export default SuccessfulPasswordChangeModal;
