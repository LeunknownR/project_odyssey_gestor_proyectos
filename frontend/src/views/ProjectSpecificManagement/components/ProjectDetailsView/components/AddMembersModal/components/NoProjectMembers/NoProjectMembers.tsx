import { Icon } from "@iconify/react/dist/iconify.js";
import { Container, IconWrapper, Text } from "./styles";

const NoProjectMembers = () => {
    return (
        <Container>
            <IconWrapper>
                <Icon icon="mdi:user-add" />
            </IconWrapper>
            <Text>Elija un nuevo miembro para el proyecto</Text>
        </Container>
    );
}

export default NoProjectMembers;