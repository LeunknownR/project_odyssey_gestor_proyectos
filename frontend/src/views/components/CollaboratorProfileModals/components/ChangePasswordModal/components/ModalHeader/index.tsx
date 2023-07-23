import { CloseBtn, Modalheader, TitleModal } from "./styles";
import { ModalHeaderProps } from "./types";

const ModalHeader = ({ modalProps }: ModalHeaderProps) => {
    return (
        <Modalheader justify="space-between">
            <TitleModal>Cambiar contraseña</TitleModal>
            <CloseBtn
                icon="material-symbols:close"
                onClick={() => modalProps.open(false)}
            />
        </Modalheader>
    );
};

export default ModalHeader;
