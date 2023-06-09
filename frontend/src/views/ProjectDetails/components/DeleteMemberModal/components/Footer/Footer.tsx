import { CancelRedModalButton, ConfirmRedModalButton, Container } from "./styles";
import { FooterProps } from "./types";

const Footer = ({ modal, deleteMember }: FooterProps) => {
    return (
        <Container>
            <CancelRedModalButton
                content="Cancelar"
                onClick={() => modal.open(false)}
            />
            <ConfirmRedModalButton content="Eliminar" onClick={deleteMember} />
        </Container>
    );
};

export default Footer;
