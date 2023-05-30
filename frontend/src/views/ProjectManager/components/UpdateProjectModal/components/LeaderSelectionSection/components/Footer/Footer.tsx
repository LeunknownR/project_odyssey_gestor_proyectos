import CustomButton from "src/components/CustomButton/CustomButton";
import { Container } from "./styles";
import { FooterProps } from "./types";
import useMainContext from "src/utils/contexts/main-context/useMainContext";
import ResponsiveButtons from "src/views/ProjectManager/components/NewProjectSection/components/NewProjectModal/components/ResponsiveButtons/ResponsiveButtons";

const Footer = ({ updateProject, formIsCompleted, tabIdx, toPage }: FooterProps) => {
    const { isMobile } = useMainContext();
    return (
        <Container>
            {isMobile && <ResponsiveButtons tabIdx={tabIdx} toPage={toPage} />}
            <CustomButton
                content="Actualizar"
                size={isMobile ? "small" : "big"}
                onClick={updateProject}
                disabled={!formIsCompleted()}
            />
        </Container>
    );
};

export default Footer;
