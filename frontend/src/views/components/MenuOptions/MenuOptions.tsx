import { useEffect, useRef, useState } from "react";
import { Container } from "./styles";
import ThreeDots from "./components/ThreeDots/ThreeDots";
import Menu from "./components/Menu/Menu";

const MenuOptions = ({menuPosition = "left"}) => {
    const [showMenu, setShowMenu] = useState(false);
    const $menuRef = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (!($menuRef.current as HTMLDivElement).contains(event.target as Node))
                setShowMenu(false);
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    const toggleMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        setShowMenu(prev => !prev);
    };
    return (
        <>
        <Container>
            <ThreeDots onClick={toggleMenu}/>
            <Menu show={showMenu} ref={$menuRef} menuPosition={menuPosition}/>
        </Container>
        </>
    );
};

export default MenuOptions;
