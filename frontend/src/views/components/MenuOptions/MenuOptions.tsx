import { useState } from "react";
import { Container } from "./styles";
import ThreeDots from "./components/ThreeDots/ThreeDots";
import Menu from "./components/Menu/Menu";

const MenuOptions = ({menuPosition = "left"}) => {
    const [showMenu, setShowMenu] = useState(false);
    
    const toggleMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        setShowMenu(prev => !prev);
    };
    return (
        <>
        <Container tabIndex={0} onBlur={() => setShowMenu(false)}>
            <ThreeDots onClick={toggleMenu}/>
            <Menu show={showMenu} menuPosition={menuPosition}/>
        </Container>
        </>
    );
};

export default MenuOptions;
