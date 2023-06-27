import { useState, useRef } from "react";
import { Container } from "./styles";
import IconMenu from "./components/IconMenu/IconMenu";
import { MenuOption, MenuOptionsProps } from "./types";
import Menu from "./components/Menu/Menu";

const MenuOptions = ({
    options,
    menuPosition,
    icon
}: MenuOptionsProps) => {
    //#region States
    const [showMenu, setShowMenu] = useState(false);
    //#endregion
    const containerRef = useRef<HTMLDivElement>(null);
    //#region Functions
    const getClassNameMenu = (): string => {
        const classList: string[] = [menuPosition];
        showMenu && classList.push("visible");
        return classList.join(" ");
    }
    const getHandlerClickOption = (option: MenuOption): (() => void) | undefined => {
        const { onClick } = option;
        if (!onClick) return;
        return () => {
            containerRef.current?.blur();
            onClick();
        };
    }
    //#endregion
    return (
        <Container 
            ref={containerRef}
            tabIndex={0} 
            onFocus={() => setShowMenu(true)}
            onBlur={() => setShowMenu(false)}>
            <IconMenu onClick={() => containerRef.current?.focus()} icon={icon} />
            <Menu 
                className={getClassNameMenu()} 
                options={options.map(option => ({
                    ...option,
                    onClick: getHandlerClickOption(option)
                }))}
            />
        </Container>
    );
};

export default MenuOptions;
