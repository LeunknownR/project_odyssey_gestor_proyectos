import CustomButton from "src/components/CustomButton/CustomButton";
import { Container } from "./styles";
import { FooterProps } from "./types";

const Footer = ({ registerProject, formIsCompleted }: FooterProps) => {
    return (
        <Container>
            <CustomButton
                content="Crear"
                size="big"
                onClick={registerProject}
                disabled={!formIsCompleted()}
            />
        </Container>
    );
};

export default Footer;
