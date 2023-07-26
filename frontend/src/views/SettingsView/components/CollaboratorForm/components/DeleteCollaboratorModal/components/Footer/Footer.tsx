import { Container, CustomCancelRedModalButton, CustomConfirmRedModalButton } from "./styles";
import { FooterProps } from "./types";

const Footer = ({ 
    modal,
    deleteCollaborator
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
                onClick={deleteCollaborator}/>
        </Container>
    );
};

export default Footer;
