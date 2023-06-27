import { FlexFlow } from "src/components/styles";
import UserImage from "src/views/components/UserImage/UserImage";
import { Container, Email, IconContainer, Name, Role } from "./styles";
import { Icon } from "@iconify/react/dist/iconify.js";
import { CollaboratorCardProps } from "./types";

const CollaboratorCard = ({
    collaboratorUser, 
    clear,
    variant
}: CollaboratorCardProps) => {
    const {name, surname, urlPhoto, email} = collaboratorUser;
    return (
        <Container className={variant}>
            <UserImage name={name} surname={surname} urlPhoto={urlPhoto} className="big"/>
            <FlexFlow direction="column" gap="5px" width="100%">
                <FlexFlow direction="column" gap="2px">
                    <Name className={variant}>{name} {surname}</Name>
                    <Email className={variant}>{email}</Email>
                </FlexFlow>
                <FlexFlow align="center" justify="space-between">
                    <Role>Líder del proyecto</Role>
                    <IconContainer onClick={clear}>
                        <Icon icon="mdi:trash-can-outline" />
                    </IconContainer>
                </FlexFlow>
            </FlexFlow>
        </Container>
    );
};

export default CollaboratorCard;
