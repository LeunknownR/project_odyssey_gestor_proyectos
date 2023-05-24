import CustomButton from "src/components/CustomButton/CustomButton";
import { Column } from "src/components/styles";
import { clearStorage } from "src/storage";

const Footer = () => {
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
                onClick={() => {
                    clearStorage();
                    window.location.href = "/login";
                }}
            />
        </Column>
    );
};

export default Footer;
