import { SuccessfulPasswordChangeModalProps } from "./types";
import {
    ContentImage,
    CustomModal,
    SuccessfulChangeButton,
    TextModal,
} from "./styles";
import successful from "src/images/successful.png";
import { clearStorage } from "src/storage";
import { useNavigate } from "react-router-dom";
import { AbsolutePaths } from "src/config/absolutePaths";

const MODAL_STYLES = {
    padding: "20px 30px",
};

const EndedSessionModal = ({
    modalProps,
    content
}: SuccessfulPasswordChangeModalProps) => {
    const navigate = useNavigate();
    const logout = () => {
        navigate(AbsolutePaths.Login)
    }
    return (
        <CustomModal {...modalProps} handleClose={logout} sizeProps={MODAL_STYLES}>
            <ContentImage src={successful} />
            <TextModal>
                {content}
            </TextModal>
            <SuccessfulChangeButton
                onClick={logout}
                content="Cerrar"
            />
        </CustomModal>
    );
};

export default EndedSessionModal;
