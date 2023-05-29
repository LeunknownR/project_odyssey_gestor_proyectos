import { Column, Row } from "src/components/styles";
import UserImage from "src/views/components/UserImage/UserImage";
import { Container, Email, IconContainer, Name, Role } from "./styles";
import { Icon } from "@iconify/react/dist/iconify.js";
import { MemberDetailsProps } from "./types";
import { PROJECT_ROLE } from "./utils/constants";

const MemberDetails = ({
    collaborator,
    openDeleteModal,
}: MemberDetailsProps) => {
    const { email, name, projectRole, surname, urlPhoto } = collaborator;
    return (
        <Container>
            <UserImage
                className="big"
                name={name}
                surname={surname}
                urlPhoto={urlPhoto}
            />
            <Column gap="5px">
                <Name>
                    {name} {surname}
                </Name>
                <Email>{email}</Email>
                <Row align="center" justify="space-between">
                    <Role className={PROJECT_ROLE[projectRole.id].className}>
                        {PROJECT_ROLE[projectRole.id].name}
                    </Role>
                    {projectRole.id !== "PLD" && (
                        <IconContainer onClick={openDeleteModal}>
                            <Icon icon="mdi:trash-can-outline" />
                        </IconContainer>
                    )}
                </Row>
            </Column>
        </Container>
    );
};

export default MemberDetails;
