//#region Styles
import { Container } from "./styles";
//#endregion
//#region Types
import { HeaderProps } from "./types";
//#endregion

const Header = ({ stateName }: HeaderProps) => {
    return (
        <Container align="center" justify="space-between">
            <h2>{stateName}</h2>
        </Container>
    );
};

export default Header;
