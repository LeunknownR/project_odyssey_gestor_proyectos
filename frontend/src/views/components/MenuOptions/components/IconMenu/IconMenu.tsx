import { Icon } from "@iconify/react/dist/iconify.js";
import { Container, CustomIcon, Square } from "./styles";
import { IconMenuProps } from "./types";

const IconMenu = ({ onClick, icon }: IconMenuProps) => {
    return (
        <>
        {!icon ? (
            <Container onMouseDown={onClick}>
                <Square></Square>
                <Square></Square>
                <Square></Square>
            </Container>
        ) : (
            <CustomIcon>
                <Icon icon={icon} />
            </CustomIcon>
        )}
        </>
    );
};

export default IconMenu;
