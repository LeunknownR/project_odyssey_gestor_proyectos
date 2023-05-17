import { Icon } from "@iconify/react/dist/iconify.js";
import { GoHome, IconContainer } from "./styles";

const GoHomeButton = () => {
    return (
        <GoHome>
            <IconContainer>
                <Icon icon="material-symbols:home-outline-rounded" />
            </IconContainer>
            Ir al Inicio
        </GoHome>
    );
};

export default GoHomeButton;
