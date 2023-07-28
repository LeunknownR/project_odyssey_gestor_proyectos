import { Container, CustomCancelRedModalButton, CustomConfirmRedModalButton } from "./styles";
import { FooterProps } from "./types";

const Footer = ({ 
    modal,
    closeModalAfterVerify
}: FooterProps) => {
    return (
        <Container>
            <CustomCancelRedModalButton
                content="Cancelar"
                variant="red-modal-2"
                onClick={() => modal.open(false)}/>
            <CustomConfirmRedModalButton
                content="Salir" 
                variant="red-modal"
                onClick={closeModalAfterVerify}/>
        </Container>
    );
};

export default Footer;
