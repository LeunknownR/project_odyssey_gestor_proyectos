import CustomButton from "src/components/CustomButton/CustomButton";
import { Container } from "./styles";
import { FooterProps } from "./types";

const Footer = ({ updateProject }: FooterProps) => {
    return (
        <Container>
            <CustomButton
                content="Actualizar"
                size="big"
                onClick={updateProject}
            />
        </Container>
    );
};

export default Footer;
