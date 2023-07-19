import { DBProjectRoles } from "src/config/roles";

export type UserBase = {
    name: string;
    surname: string;
    urlPhoto: string | null;
    email: string;
};
export type CollaboratorUser = UserBase & {
    id: number;
};
export type ProjectRole = {
    id: DBProjectRoles;
    name: string;
};
export type ProjectCollaborator = UserBase & {
    id: number;
    projectTeamMemberId: number;
    projectRole: ProjectRole;
};
