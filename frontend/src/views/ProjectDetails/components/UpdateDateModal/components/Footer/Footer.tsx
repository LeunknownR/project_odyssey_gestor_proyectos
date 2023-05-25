import CustomButton from "src/components/CustomButton/CustomButton";
import { Container } from "./styles";

const Footer = () => {
    return (
        <Container>
            <CustomButton content="Cancelar" variant="blue-modal-2"></CustomButton>
            <CustomButton content="Guardar" variant="blue-modal"></CustomButton>
        </Container>
    );
};

export default Footer;
