import { Column, Row } from "src/components/styles";
import UserImage from "src/views/components/UserImage/UserImage";
import { Container, IconContainer, Name, Role } from "./styles";
import { Icon } from "@iconify/react/dist/iconify.js";

const MemberDetails = () => {
    return (
        <Container>
            <UserImage />
            <Column gap="5px">
                <Name>Manuel Alejandro Rivera Becerra</Name>
                <Row align="center" justify="space-between">
                    <Role>Miembro</Role>
                    <IconContainer><Icon icon="mdi:trash-can-outline" /></IconContainer>
                </Row>
            </Column>
        </Container>
    );
};

export default MemberDetails;
