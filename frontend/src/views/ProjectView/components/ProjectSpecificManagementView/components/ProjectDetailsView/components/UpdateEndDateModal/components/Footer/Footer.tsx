import { CancelBlueModalButton, ConfirmBlueModalButton, Container } from "./styles";
import { FooterProps } from "./types";

const Footer = ({ closeModal, updateProjectEndDate, dateIsChanged }: FooterProps) => {
    return (
        <Container>
            <CancelBlueModalButton
                content="Cancelar"
                onClick={closeModal}
            />
            <ConfirmBlueModalButton
                content="Guardar"
                onClick={updateProjectEndDate}
                disabled={dateIsChanged()}
            />
        </Container>
    );
};

export default Footer;
