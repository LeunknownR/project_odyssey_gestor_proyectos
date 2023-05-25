import { useState } from "react";
import { Container } from "./styles";
import ThreeDots from "./components/ThreeDots/ThreeDots";
import Menu from "./components/Menu/Menu";
import { MenuOptionsProps } from "./types";

const MenuOptions = ({
    menuPosition = "left",
    onClickEdit,
    onClickDelete,
    onClickDetails
}: MenuOptionsProps) => {
    const [showMenu, setShowMenu] = useState(false);
    const toggleMenu = () => setShowMenu(prev => !prev);
    return (
        <>
            <Container tabIndex={0} onBlur={() => setShowMenu(false)}>
                <ThreeDots onClick={toggleMenu} />
                <Menu
                    show={showMenu}
                    menuPosition={menuPosition}
                    onClickEdit={onClickEdit}
                    onClickDelete={onClickDelete}
                    onClickDetails={onClickDetails}
                />
            </Container>
        </>
    );
};

export default MenuOptions;
