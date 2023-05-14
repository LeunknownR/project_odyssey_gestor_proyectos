import FormBody from "./components/FormBody/FormBody";
import FormFooter from "./components/FormFooter/FormFooter";
import FormHeader from "./components/FormHeader/FormHeader";
import { Container } from "./styles";
const LoginForm = () => {
    return (
        <Container>
            <FormHeader />
            <FormBody />
            <FormFooter />
        </Container>
    );
};

export default LoginForm;
