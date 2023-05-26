import CustomButton from "src/components/CustomButton/CustomButton";
import { Container } from "./styles";
import { FooterProps } from "./types";

const Footer = ({ 
    closeModal, 
    addMembersToProject 
}: FooterProps) => {
    return (
        <Container>
            <CustomButton
                content="Cancelar"
                variant="main-2"
                size="normal"
                onClick={closeModal}/>
            <CustomButton
                content="Agregar"
                variant="main"
                size="normal"
                onClick={addMembersToProject}/>
        </Container>
    );
};

export default Footer;
