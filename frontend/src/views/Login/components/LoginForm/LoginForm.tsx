import { useEffect, useState } from "react";
import FormBody from "./components/FormBody/FormBody";
import FormFooter from "./components/FormFooter/FormFooter";
import FormHeader from "./components/FormHeader/FormHeader";
import { Container } from "./styles";
import useLoginForm from "./utils/hooks/useLoginForm";
import CustomButton from "src/components/CustomButton/CustomButton";
const LoginForm = () => {
    const [btnDisabled, setBtnDisabled] = useState(true);
    const { form, error, loading, handleChange, handleSubmit } = useLoginForm();
    useEffect(() => {
        setBtnDisabled(!form.isCompleted());
    }, [form.value]);
    const { username, password } = form.value;
    return (
        <Container>
            <FormHeader />
            <FormBody
                username={username}
                password={password}
                handleChange={handleChange}
                error={error}
            />
            <CustomButton
                content="Ingresar"
                size="big"
                onClick={handleSubmit}
                disabled={btnDisabled}
            />
        </Container>
    );
};

export default LoginForm;
