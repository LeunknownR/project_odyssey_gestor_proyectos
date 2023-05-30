import { useNavigate } from "react-router-dom";
import CustomButton from "src/components/CustomButton/CustomButton";
import { AbsolutePaths } from "src/config/absolutePaths";
import { clearStorage } from "src/storage";
import { Container } from "./styles";

const Footer = () => {
    const navigate = useNavigate();
    const logout = () => {
        clearStorage();
        navigate(AbsolutePaths.Login);
    }
    return (
        <Container>
            <CustomButton
                content="Config. Perfil"
                icon="uiw:setting"
                variant="user-options-config"
                width="180px"
                onClick={() => navigate(AbsolutePaths.Settings)}
            />
            <CustomButton
                content="Cerrar Sesión"
                variant="user-options-logout"
                width="180px"
                onClick={logout}
            />
        </Container>
    );
};

export default Footer;
