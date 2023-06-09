import CustomButton from "src/components/CustomButton/CustomButton";
import { Container } from "./styles";
import { FooterProps } from "./types";

const Footer = ({ 
    closeModal, 
    addMembersToProject,
    noProjectMembers
}: FooterProps) => {
    return (
        <Container>
            <CustomButton
                content="Cancelar"
                variant="secondary"
                size="normal"
                onClick={closeModal}/>
            <CustomButton
                disabled={noProjectMembers}
                content="Agregar"
                variant="main"
                size="normal"
                onClick={addMembersToProject}/>
        </Container>
    );
};

export default Footer;
