import { Container, CustomCancelRedModalButton, CustomConfirmRedModalButton } from "./styles";
import { FooterProps } from "./types";

const Footer = ({ 
    modal,
    changePassword
}: FooterProps) => {
    return (
        <Container>
            <CustomCancelRedModalButton
                content="Cancelar"
                variant="red-modal-2"
                onClick={() => modal.open(false)}/>
            <CustomConfirmRedModalButton
                content="Confirmar" 
                variant="red-modal"
                onClick={changePassword}/>
        </Container>
    );
};

export default Footer;
