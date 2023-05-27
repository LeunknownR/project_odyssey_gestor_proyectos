import { ProjectCollaborator } from "src/entities/collaborator/types";

export type MemberDetailsProps = {
    collaborator: ProjectCollaborator;
    openDeleteModal: () => void;
}
export type ProjectRoleVisual = {
    name: string;
    className: string;
}