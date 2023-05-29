import { ProjectCollaborator } from "src/entities/collaborator/types";

export type MemberListProps = {
    collaborators: ProjectCollaborator[];
    openDeleteModal: (projectMember: ProjectCollaborator) => void;
}