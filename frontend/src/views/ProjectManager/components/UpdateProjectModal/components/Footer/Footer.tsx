import { useState, useEffect } from "react";
import CustomButton from "src/components/CustomButton/CustomButton";
import { Container } from "./styles";
import { FooterProps } from "./types";

const Footer = ({ updateProject, form }: FooterProps) => {
    const [btnDisabled, setBtnDisabled] = useState<boolean>(true);
    useEffect(() => {
        setBtnDisabled(!form.haveChanges() || !form.isCompleted());
    }, [form]);
    return (
        <Container>
            <CustomButton
                content="Actualizar"
                size="big"
                disabled={btnDisabled}
                onClick={updateProject}
            />
        </Container>
    );
};

export default Footer;
