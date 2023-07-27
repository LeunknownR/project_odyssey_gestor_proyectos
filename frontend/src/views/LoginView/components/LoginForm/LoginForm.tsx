import { useEffect, useState } from "react";
import FormBody from "./components/FormBody/FormBody";
import FormHeader from "./components/FormHeader/FormHeader";
import { Container } from "./styles";
import CustomButton from "src/components/CustomButton/CustomButton";
import useLoginForm from "./utils/hooks/useLoginForm";
import useMainContext from "src/utils/contexts/main-context/useMainContext";

const LoginForm = () => {
    const { preloader } = useMainContext();
    const [btnDisabled, setBtnDisabled] = useState(true);
    const { 
        form, error, 
        handleChange, 
        handleSubmit
    } = useLoginForm(preloader);
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
                variant="main"
                onClick={handleSubmit}
                disabled={btnDisabled}
            />
        </Container>
    );
};

export default LoginForm;
