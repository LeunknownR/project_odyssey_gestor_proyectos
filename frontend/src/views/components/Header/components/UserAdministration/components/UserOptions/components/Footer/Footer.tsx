import { useNavigate } from "react-router-dom";
import CustomButton from "src/components/CustomButton/CustomButton";
import { AbsolutePaths } from "src/config/absolutePaths";
import { clearStorage } from "src/storage";
import { Container, LogoutButton } from "./styles";
import useMainContext from "src/utils/contexts/main-context/useMainContext";

const Footer = () => {
    const navigate = useNavigate();
    const { isMobile } = useMainContext();
    const logout = () => {
        clearStorage();
        navigate(AbsolutePaths.Login);
    }
    const logoutButtonProps: any = isMobile ? {
        icon: "material-symbols:logout",
        width: "max-content"
    } : {
        content: "Cerrar sesión",
        width: "80%"
    }
    return (
        <Container>
            <CustomButton
                content="Config. Perfil"
                icon="uiw:setting"
                variant="user-options-config"
                width="80%"
                onClick={() => navigate(AbsolutePaths.Settings)}
            />
            <LogoutButton
                {...logoutButtonProps}
                variant="user-options-logout"
                icon="uiw:setting"
                onClick={logout}
            />
        </Container>
    );
};

export default Footer;
