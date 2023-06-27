import TypewriterText from "src/components/TypewriterText/TypewriterText";
import LoginForm from "./components/LoginForm/LoginForm";
import { Container, Logo, Slogan } from "./styles";
import MainLogo from "src/images/main-logo.png"

const Login = () => {
    return (
        <Container>
            <Slogan>
                <TypewriterText text="TRANSFORMA TU PROYECTO EN UNA EPOPEYA MODERNA" />
            </Slogan>
            <LoginForm />
            <Logo src={MainLogo} />
        </Container>
    );
};

export default Login;
