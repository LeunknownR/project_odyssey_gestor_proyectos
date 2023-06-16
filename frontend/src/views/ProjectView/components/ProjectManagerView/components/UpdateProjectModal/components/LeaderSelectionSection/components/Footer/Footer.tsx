import { useEffect, useState } from "react";
import CustomButton from "src/components/CustomButton/CustomButton";
import { Container } from "./styles";
import { FooterProps } from "./types";
import useMainContext from "src/utils/contexts/main-context/useMainContext";
import ResponsiveButtons from "../../../../../NewProjectSection/components/NewProjectModal/components/ResponsiveButtons/ResponsiveButtons";

const Footer = ({
    updateProject,
    form,
    tabIdx,
    toPage,
}: FooterProps) => {
    const { isMobile } = useMainContext();
    const [buttonIsDisabled, setButtonIsDisabled] = useState<boolean>(true);
    useEffect(() => {
        setButtonIsDisabled(!form.haveChanges() || !form.isCompleted());
    }, [form]);
    return (
        <Container>
            {isMobile && <ResponsiveButtons tabIdx={tabIdx} toPage={toPage} />}
            <CustomButton
                content="Actualizar"
                variant="main"
                size={isMobile ? "small" : "big"}
                onClick={updateProject}
                disabled={buttonIsDisabled}
            />
        </Container>
    );
};

export default Footer;
