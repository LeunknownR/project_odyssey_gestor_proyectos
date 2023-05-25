import { Icon } from "@iconify/react/dist/iconify.js";
import { Container, IconContainer, TitleModal } from "./styles";
import { Row } from "src/components/styles";

const Header = () => {
    return (
        <Container>
            <Row gap="20px">
                <TitleModal>Agregar nuevos miembros</TitleModal>
                <IconContainer>
                    <Icon icon="ic:baseline-person-add" />
                </IconContainer>
            </Row>
        </Container>
    );
};

export default Header;
