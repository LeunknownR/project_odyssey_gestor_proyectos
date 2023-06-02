import { Icon } from "@iconify/react/dist/iconify.js";
import { Container, IconContainer, TitleModal, Wrapper } from "./styles";

const Header = () => {
    return (
        <Container>
            <Wrapper align="center" gap="20px">
                <TitleModal>Agregar nuevos miembros</TitleModal>
                <IconContainer>
                    <Icon icon="ic:baseline-person-add" />
                </IconContainer>
            </Wrapper>
        </Container>
    );
};

export default Header;
