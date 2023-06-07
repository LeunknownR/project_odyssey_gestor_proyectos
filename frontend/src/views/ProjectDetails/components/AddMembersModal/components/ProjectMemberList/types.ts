import { CollaboratorUser } from "src/entities/collaborator/entities";

export type ProjectMemberToAddListProps = {
    projectMemberList: CollaboratorUser[];
    removeProjectMember: (projectMemberIdToDelete: number) => void; 
};