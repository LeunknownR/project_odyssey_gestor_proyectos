import { SuccessfulPasswordChangeModalProps } from "./types";
import { ContentImage, CustomModal, SuccessfulChangeButton, TextModal } from "./styles";
import successful from "src/images/successful.png";
import { clearStorage } from "src/storage";
import { useNavigate } from "react-router-dom";
import { AbsolutePaths } from "src/config/absolutePaths";

const MODAL_STYLES = {
    padding: "20px 30px",
};

const SuccessfulPasswordChangeModal = ({
    modalProps,
}: SuccessfulPasswordChangeModalProps) => {
    const navigate = useNavigate();
    const logout = (): void => {
        clearStorage();
        navigate(AbsolutePaths.Login);
    }
    return (
        <CustomModal {...modalProps} sizeProps={MODAL_STYLES}>
            <ContentImage src={successful} />
            <TextModal>
                <b>Ha cambiado su contraseña correctamente,</b><br/> 
                tiene que volver a iniciar sesión
            </TextModal>
            <SuccessfulChangeButton
                onClick={logout}
                content="Cerrar"
            />
        </CustomModal>
    );
};

export default SuccessfulPasswordChangeModal;
