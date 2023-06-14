//#region Libraries
import { Icon } from "@iconify/react/dist/iconify.js";
//#endregion
//#region Styles
import { Container, IconContainer } from "./styles";
//#endregion
//#region Types
import { HeaderProps } from "./types";
import { ProjectState } from "src/entities/project/enums";
//#endregion

const Header = ({ sectionName, status }: HeaderProps) => {
    return (
        <Container align="center" justify="space-between">
            <h2>{sectionName}</h2>
            {status !== ProjectState.Finalized && (
                <IconContainer>
                    <Icon icon="material-symbols:add" />
                </IconContainer>
            )}
        </Container>
    );
};

export default Header;
