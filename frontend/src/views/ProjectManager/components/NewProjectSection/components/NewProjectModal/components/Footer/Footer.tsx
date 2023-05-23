import CustomButton from "src/components/CustomButton/CustomButton";
import { Container } from "./styles";
import { FooterProps } from "./types";

const Footer = ({ registerProject }: FooterProps) => {
    return (
        <Container>
            <CustomButton content="Crear" size="big" onClick={registerProject}/>
        </Container>
    );
};

export default Footer;
