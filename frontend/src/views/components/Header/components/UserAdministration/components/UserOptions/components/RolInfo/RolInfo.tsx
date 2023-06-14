import { Icon } from "@iconify/react/dist/iconify.js";
import { Container, IconContainer, Rol } from "./styles";
import { RolInfoProps } from "./types";
import { ROLE_COLOR } from "./utils/constants";

const RolInfo = ({role}: RolInfoProps) => {
    const {id, name} = role;
    return (
        <Container align="center" gap="6px" alignSelf="flex-end" color={ROLE_COLOR[id]}>
            <IconContainer>
                <Icon icon="icon-park-outline:id-card-h" />
            </IconContainer>
            <Rol>{name}</Rol>
        </Container>
    );
};

export default RolInfo;
