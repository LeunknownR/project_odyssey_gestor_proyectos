import { useEffect, useState } from "react";
import FormBody from "./components/FormBody/FormBody";
import FormHeader from "./components/FormHeader/FormHeader";
import { Container } from "./styles";
import CustomButton from "src/components/CustomButton/CustomButton";
import useLoginForm from "./utils/hooks/useLoginForm";
import usePreloader from "src/components/Preloader/utils/hooks/usePreloader";
import Preloader from "src/components/Preloader/Preloader";

const LoginForm = () => {
    const preloader = usePreloader();
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
        <>
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
        <Preloader {...preloader.value}/>
        </>
    );
};

export default LoginForm;
