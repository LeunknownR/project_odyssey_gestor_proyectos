import { Icon } from "@iconify/react/dist/iconify.js";
import { AddMemberButton, Container, IconContainer, Title, Wrapper } from "./styles";
import { HeaderProps } from "./types";

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
                <AddMemberButton onClick={openAddMemberModal}>
                    <span>
                        <Icon icon="material-symbols:add-circle" />
                    </span>
                    Agregar Miembro
                </AddMemberButton>
            )}
        </Container>
    );
};

export default Header;
