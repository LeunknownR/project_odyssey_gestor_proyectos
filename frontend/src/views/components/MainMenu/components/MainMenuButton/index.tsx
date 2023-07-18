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
                className={({ isActive }) => {
                    const classList: string[] = [];
                    className && classList.push(className);
                    isActive && classList.push("active");
                    return classList.join(" ");
                }}
                to={to} end>
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