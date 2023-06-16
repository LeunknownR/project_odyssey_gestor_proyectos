import { CancelRedModalButton, ConfirmRedModalButton } from "src/views/ProjectView/components/ProjectSpecificManagementView/components/ProjectDetailsView/components/DeleteMemberModal/components/Footer/styles";
import { Container } from "./styles";
import { FooterProps } from "./types";

const Footer = ({ 
    modal, deleteProject 
}: FooterProps) => {
    return (
        <Container>
            <CancelRedModalButton
                content="Cancelar"
                onClick={() => modal.open(false)}/>
            <ConfirmRedModalButton
                content="Eliminar" 
                onClick={deleteProject}/>
        </Container>
    );
};

export default Footer;
