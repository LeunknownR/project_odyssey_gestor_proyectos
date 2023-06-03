//#region Libraries
import { Icon } from "@iconify/react/dist/iconify.js";
//#endregion
//#region Styles
import { Container, IconContainer } from "./styles";
//#endregion
//#region Types
import { HeaderProps } from "./types";
//#endregion

const Header = ({ name }: HeaderProps) => {
    return (
        <Container align="center" justify="space-between">
            <h2>{name}</h2>
            <IconContainer>
                <Icon icon="material-symbols:add" />
            </IconContainer>
        </Container>
    );
};

export default Header;
