import CustomButton from "src/components/CustomButton/CustomButton";
import { Container } from "./styles";
import { FooterProps } from "./types";

const Footer = ({ 
    modal, deleteMember 
}: FooterProps) => {
    return (
        <Container>
            <CustomButton
                content="Cancelar"
                variant="red-modal-2"
                onClick={() => modal.open(false)}/>
            <CustomButton 
                content="Eliminar" 
                variant="red-modal"
                onClick={deleteMember}/>
        </Container>
    );
};

export default Footer;
