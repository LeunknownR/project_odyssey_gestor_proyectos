import CustomButton from "src/components/CustomButton/CustomButton";
import { Container } from "./styles";
import { FooterProps } from "./types";
import useMainContext from "src/utils/contexts/main-context/useMainContext";
import ResponsiveButtons from "../../../ResponsiveButtons/ResponsiveButtons";

const Footer = ({ registerProject, formIsCompleted, tabIdx, toPage }: FooterProps) => {
    const { isMobile } = useMainContext();
    return (
        <Container>
            {isMobile && <ResponsiveButtons tabIdx={tabIdx} toPage={toPage} />}
            <CustomButton
                content="Crear"
                variant="main"
                size={isMobile ? "small" : "big"}
                onClick={registerProject}
                disabled={!formIsCompleted()}
            />
        </Container>
    );
};

export default Footer;
