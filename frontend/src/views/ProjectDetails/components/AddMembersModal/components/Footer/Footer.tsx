import CustomButton from "src/components/CustomButton/CustomButton";
import { Container } from "./styles";
import { FooterProps } from "./types";

const Footer = ({ closeModal, addMemberToProject }: FooterProps) => {
    return (
        <Container>
            <CustomButton
                content="Cancelar"
                variant="main-2"
                size="normal"
                onClick={closeModal}
            ></CustomButton>
            <CustomButton
                content="Agregar"
                variant="main"
                size="normal"
                onClick={addMemberToProject}
            ></CustomButton>
        </Container>
    );
};

export default Footer;
