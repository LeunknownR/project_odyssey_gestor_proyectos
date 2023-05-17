import CustomButton from "src/components/CustomButton/CustomButton";
import { Container } from "./styles";

const Footer = () => {
    return (
        <Container>
            <CustomButton content="Cancelar" variant="red-modal-2"></CustomButton>
            <CustomButton content="Eliminar" variant="red-modal"></CustomButton>
        </Container>
    );
};

export default Footer;
