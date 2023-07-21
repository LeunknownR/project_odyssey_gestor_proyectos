import { ProjectCollaborator } from "src/entities/collaborator/entities";

export type MemberDetailsProps = {
    collaborator: ProjectCollaborator;
    openDeleteModal: () => void;
    currentUserIsProjectLeader: boolean;
}
export type ProjectRoleVisual = {
    name: string;
    className: string;
}