import { Container, CustomCancelRedModalButton, CustomConfirmRedModalButton } from "./styles";
import { FooterProps } from "./types";

const Footer = ({ 
    modal
}: FooterProps) => {
    return (
        <Container>
            <CustomCancelRedModalButton
                content="Cancelar"
                variant="red-modal-2"
                onClick={() => modal.open(false)}/>
            <CustomConfirmRedModalButton
                content="Eliminar" 
                variant="red-modal"
                onClick={() => console.log("dx")}/>
        </Container>
    );
};

export default Footer;
