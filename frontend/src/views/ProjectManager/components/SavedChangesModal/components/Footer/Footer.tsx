import CustomButton from "src/components/CustomButton/CustomButton";
import { Container } from "./styles";

const Footer = () => {
    return (
        <Container>
            <CustomButton content="Confirmar" variant="blue-modal"></CustomButton>
        </Container>
    );
};

export default Footer;
