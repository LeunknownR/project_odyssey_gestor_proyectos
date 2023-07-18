import { ProjectCollaborator } from "src/entities/collaborator/entities"

export type ProjectTeamProps = {
    collaborators: ProjectCollaborator[];
    openAddMemberModal: () => void;
    openDeleteModal: (projectCollaborator: ProjectCollaborator) => void;
    currentUserIsProjectLeader: boolean;
};