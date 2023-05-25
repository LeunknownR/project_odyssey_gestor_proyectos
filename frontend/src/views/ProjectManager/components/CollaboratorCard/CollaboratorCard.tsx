import { Column, Row } from "src/components/styles";
import UserImage from "src/views/components/UserImage/UserImage";
import { Container, Email, IconContainer, Name, Role } from "./styles";
import { Icon } from "@iconify/react/dist/iconify.js";
import { CollaboratorCardProps } from "./types";

const CollaboratorCard = ({
    collaboratorUser, 
    clear,
    variant
}: CollaboratorCardProps) => {
    const {name, surname, urlPhoto} = collaboratorUser;
    return (
        <Container className={variant}>
            <UserImage name={name} surname={surname} userPhoto={urlPhoto} />
            <Column gap="5px" width="100%">
                <Column gap="2px">
                    <Name className={variant}>{name} {surname}</Name>
                    <Email className={variant}>GNOMO@yahoo.xxx</Email>
                </Column>
                <Row align="center" justify="space-between">
                    <Role>Líder del proyecto</Role>
                    <IconContainer onClick={clear}>
                        <Icon icon="mdi:trash-can-outline" />
                    </IconContainer>
                </Row>
            </Column>
        </Container>
    );
};

export default CollaboratorCard;
