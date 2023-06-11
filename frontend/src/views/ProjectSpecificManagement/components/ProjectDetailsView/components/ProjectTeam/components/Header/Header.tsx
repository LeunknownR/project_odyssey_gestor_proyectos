import { Icon } from "@iconify/react/dist/iconify.js";

import { HeaderProps } from "./types";
import { Container, DashedAddButton, IconContainer, Title, Wrapper } from "./styles";

const Header = ({
    openAddMemberModal,
    currentUserIsProjectLeader,
}: HeaderProps) => {
    return (
        <Container>
            <Wrapper align="center" gap="10px">
                <IconContainer>
                    <Icon icon="fluent:people-team-24-filled" />
                </IconContainer>
                <Title>EQUIPO DEL PROYECTO</Title>
            </Wrapper>
            {currentUserIsProjectLeader && (
                <DashedAddButton
                    onClick={openAddMemberModal}
                    icon="material-symbols:add-circle"
                    content="Agregar miembro"
                />
            )}
        </Container>
    );
};

export default Header;
