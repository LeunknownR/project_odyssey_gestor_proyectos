import { CollaboratorUser } from "src/entities/collaborator/types"

export type MemberListItemProps = {
    memberProject: CollaboratorUser;
    onRemove: (projectMemberToDeleteId: number) => void
}