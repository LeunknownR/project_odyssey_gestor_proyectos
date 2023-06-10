import { CancelRedModalButton, ConfirmRedModalButton } from "src/views/ProjectSpecificManagement/components/ProjectDetailsView/components/DeleteMemberModal/components/Footer/styles";
import { Container } from "./styles";
import { FooterProps } from "./types";

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
