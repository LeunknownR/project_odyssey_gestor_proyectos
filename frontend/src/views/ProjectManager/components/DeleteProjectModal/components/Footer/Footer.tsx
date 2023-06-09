import { Container } from "./styles";
import { FooterProps } from "./types";
import { CancelRedModalButton, ConfirmRedModalButton } from "src/views/ProjectDetails/components/DeleteMemberModal/components/Footer/styles";

const Footer = ({ 
    modal, deleteProject 
}: FooterProps) => {
    return (
        <Container>
            <CancelRedModalButton
                content="Cancelar"
                variant="red-modal-2"
                onClick={() => modal.open(false)}/>
            <ConfirmRedModalButton 
                content="Eliminar" 
                variant="red-modal"
                onClick={deleteProject}/>
        </Container>
    );
};

export default Footer;
