import { useNavigate } from "react-router-dom";
import CustomButton from "src/components/CustomButton/CustomButton";
import { Column } from "src/components/styles";
import { AbsolutePaths } from "src/config/absolutePaths";
import { clearStorage } from "src/storage";

const Footer = () => {
    const navigate = useNavigate();
    const logout = () => {
        clearStorage();
        navigate(AbsolutePaths.LOGIN);
    }
    return (
        <Column align="center" gap="10px">
            <CustomButton
                content="Config. Perfil"
                icon="uiw:setting"
                variant="user-options-config"
                width="180px"
            />
            <CustomButton
                content="Cerrar Sesión"
                variant="user-options-logout"
                width="180px"
                onClick={logout}
            />
        </Column>
    );
};

export default Footer;
