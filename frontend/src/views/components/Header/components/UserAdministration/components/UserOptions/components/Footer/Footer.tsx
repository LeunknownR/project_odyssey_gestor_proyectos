import { useNavigate } from "react-router-dom";
import { AbsolutePaths } from "src/config/absolutePaths";
import { clearStorage } from "src/storage";
import { ConfigButton, Container, LogoutButton } from "./styles";
import useMainContext from "src/utils/contexts/main-context/useMainContext";
import useUserRole from "src/storage/hooks/useUserRole";
import { DBRoles } from "src/config/roles";
import useMasterRouterContext from "src/routes/utils/context/useMasterRouterContext";
import { FooterProps } from "./types";

const Footer = ({
    closeOptions
}: FooterProps) => {
    const navigate = useNavigate();
    const { isMobile } = useMainContext();
    const { openProfileConfigModal } = useMasterRouterContext();
    const userRole = useUserRole();
    const logout = (): void => {
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
    const configButtonActions = (): void => {
        if (userRole === DBRoles.GeneralAdmin){
            navigate(AbsolutePaths.CollaboratorManagement)
            return;
        }
        closeOptions();
        openProfileConfigModal();
    }
    return (
        <Container>
            <ConfigButton
                content="Config. Perfil"
                icon="uiw:setting"
                variant="user-options-config"
                width="80%"
                onClick={configButtonActions}
            />
            <LogoutButton
                {...logoutButtonProps}
                onClick={logout}
            />
        </Container>
    );
};

export default Footer;
