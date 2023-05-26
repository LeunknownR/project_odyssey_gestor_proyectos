import { ProjectCollaborator } from "src/entities/collaborator/types";

export type MemberListProps = {
    collaborators: ProjectCollaborator[];
    openDeleteModal: (memberId: number) => void;
}