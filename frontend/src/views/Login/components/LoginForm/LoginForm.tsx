import { useEffect, useState } from "react";
import FormBody from "./components/FormBody/FormBody";
import FormHeader from "./components/FormHeader/FormHeader";
import { Container } from "./styles";
import CustomButton from "src/components/CustomButton/CustomButton";
import useLoginForm from "./utils/hooks/useLoginForm";

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
                alignSelf="flex-end"
                onClick={handleSubmit}
                disabled={btnDisabled}
            />
        </Container>
    );
};

export default LoginForm;
