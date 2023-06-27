//#region Styles
import { Container } from "./styles";
//#endregion
//#region Types
import { HeaderProps } from "./types";
//#endregion

const Header = ({ sectionName }: HeaderProps) => {
    return (
        <Container align="center" justify="space-between">
            <h2>{sectionName}</h2>
        </Container>
    );
};

export default Header;
