import { CollaboratorUser } from "src/entities/collaborator/entities"

export type ProjectMemberListItemProps = {
    memberProject: CollaboratorUser;
    onRemove: () => void;
}