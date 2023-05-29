import { useState, useEffect } from "react";
import ProjectTeamMember from "./components/MemberDetails/ProjectTeamMember";
import { Container } from "./styles";
import { MemberListProps } from "./types";
import { DBProjectRoles } from "src/config/roles";
import { getUserId } from "src/storage/user.local";

const ProjectTeamList = ({ collaborators, openDeleteModal }: MemberListProps) => {
    const [currentUserIsProjectLeader, setCurrentUserIsProjectLeader] = useState(false);
    useEffect(() => {
        setCurrentUserIsProjectLeader(collaborators.some(({ id, projectRole }) => projectRole.id === DBProjectRoles.ProjectLeader && id === getUserId()));
    }, []);
    return (
        <Container>
            {collaborators.map(collaborator => (
                <ProjectTeamMember
                    key={collaborator.id}
                    currentUserIsProjectLeader={currentUserIsProjectLeader}
                    collaborator={collaborator}
                    openDeleteModal={() => openDeleteModal(collaborator)}
                />
            ))}
        </Container>
    );
};

export default ProjectTeamList;
