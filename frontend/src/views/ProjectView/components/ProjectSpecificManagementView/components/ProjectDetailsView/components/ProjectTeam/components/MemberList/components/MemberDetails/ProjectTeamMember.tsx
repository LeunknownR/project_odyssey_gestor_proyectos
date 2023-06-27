import { FlexFlow } from "src/components/styles";
import UserImage from "src/views/components/UserImage/UserImage";
import { Container, Email, IconContainer, Name, Role } from "./styles";
import { Icon } from "@iconify/react/dist/iconify.js";
import { MemberDetailsProps } from "./types";
import { PROJECT_ROLE } from "./utils/constants";
import { DBProjectRoles } from "src/config/roles";

const ProjectTeamMember = ({
    collaborator,
    currentUserIsProjectLeader,
    openDeleteModal
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
            <FlexFlow direction="column" gap="5px">
                <Name>
                    {name} {surname}
                </Name>
                <Email>{email}</Email>
                <FlexFlow align="center" justify="space-between">
                    <Role className={PROJECT_ROLE[projectRole.id].className}>
                        {PROJECT_ROLE[projectRole.id].name}
                    </Role>
                    {(
                        projectRole.id !== DBProjectRoles.ProjectLeader && 
                        currentUserIsProjectLeader
                    ) && (
                        <IconContainer onClick={openDeleteModal}>
                            <Icon icon="mdi:trash-can-outline" />
                        </IconContainer>
                    )}
                </FlexFlow>
            </FlexFlow>
        </Container>
    );
};

export default ProjectTeamMember;
