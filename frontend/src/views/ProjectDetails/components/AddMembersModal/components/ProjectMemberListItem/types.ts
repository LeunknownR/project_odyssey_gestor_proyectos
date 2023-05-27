import { CollaboratorUser } from "src/entities/collaborator/types"

export type ProjectMemberListItemProps = {
    memberProject: CollaboratorUser;
    onRemove: () => void;
}