import CustomButton from "src/components/CustomButton/CustomButton";
import { Container } from "./styles";

const Footer = () => {
    return (
        <Container>
            <CustomButton content="Cancelar" variant="main-2" size="normal"></CustomButton>
            <CustomButton content="Agregar" variant="main" size="normal"></CustomButton>
        </Container>
    );
};

export default Footer;
