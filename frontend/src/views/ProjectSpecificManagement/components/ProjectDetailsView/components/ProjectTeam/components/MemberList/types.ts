import { ProjectCollaborator } from "src/entities/collaborator/entities";

export type MemberListProps = {
    collaborators: ProjectCollaborator[];
    openDeleteModal: (projectMember: ProjectCollaborator) => void;
    currentUserIsProjectLeader: boolean;
}