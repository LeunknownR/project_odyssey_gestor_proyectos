import { ProjectCollaborator } from "src/entities/collaborator/types";

export type MemberDetailsProps = {
    collaborator: ProjectCollaborator;
    openDeleteModal: () => void;
    currentUserIsProjectLeader: boolean;
}
export type ProjectRoleVisual = {
    name: string;
    className: string;
}