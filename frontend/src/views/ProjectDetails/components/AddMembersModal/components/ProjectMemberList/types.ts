import { CollaboratorUser } from "src/entities/collaborator/types";

export type ProjectMemberToAddListProps = {
    projectMemberList: CollaboratorUser[];
    removeProjectMember: (projectMemberIdToDelete: number) => void; 
};