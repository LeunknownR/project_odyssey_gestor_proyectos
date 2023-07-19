import { Icon } from "@iconify/react/dist/iconify.js";
import { MainMenuButtonRegular, MainMenuButtonLink } from "./styles";
import { MainMenuButtonProps } from "./types";

const MainMenuButton = ({
    className, to,
    icon, onClick
}: MainMenuButtonProps) => {
    if (to) 
        return (
            <MainMenuButtonLink
                className={className}
                to={to}>
                <span>
                    <Icon icon={icon}/>
                </span>
            </MainMenuButtonLink>
        );
    return (
        <MainMenuButtonRegular className={className} onClick={onClick}>
            <span>
                <Icon icon={icon}/>
            </span>
        </MainMenuButtonRegular>
    );
}

export default MainMenuButton;