import { EndedSessionModalProps } from "./types";
import {
    ContentImage,
    CustomModal,
    SuccessfulChangeButton,
    TextModal,
} from "./styles";
import successful from "src/images/successful.png";
import { useNavigate } from "react-router-dom";
import { AbsolutePaths } from "src/config/absolutePaths";
import { sleep } from "src/services/utils/helpers";

const MODAL_STYLES = {
    padding: "20px 30px",
};

const EndedSessionModal = ({
    modal, content
}: EndedSessionModalProps) => {
    const navigate = useNavigate();
    const logout = async () => {
        modal.open(false);
        await sleep(300);
        navigate(AbsolutePaths.Login);
    }
    return (
        <CustomModal {...modal} handleClose={logout} sizeProps={MODAL_STYLES}>
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
