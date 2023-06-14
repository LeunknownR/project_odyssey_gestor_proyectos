import { Icon } from "@iconify/react/dist/iconify.js";
import { GoHome, IconContainer } from "./styles";
import { useNavigate } from "react-router-dom";
import { AbsolutePaths } from "src/config/absolutePaths";

const GoHomeButton = () => {
    const navigate = useNavigate()
    const returnHome = () => {
        navigate(AbsolutePaths.Projects)
    }
    return (
        <GoHome onClick={returnHome}>
            <IconContainer>
                <Icon icon="material-symbols:home-outline-rounded" />
            </IconContainer>
            Ir al Inicio
        </GoHome>
    );
};

export default GoHomeButton;
