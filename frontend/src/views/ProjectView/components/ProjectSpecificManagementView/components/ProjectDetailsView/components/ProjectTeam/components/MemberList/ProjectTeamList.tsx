import ProjectTeamMember from "./components/MemberDetails/ProjectTeamMember";
import { Container } from "./styles";
import { MemberListProps } from "./types";

const ProjectTeamList = ({ collaborators, openDeleteModal, currentUserIsProjectLeader }: MemberListProps) => {
    return (
        <Container className="custom-scrollbar">
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
