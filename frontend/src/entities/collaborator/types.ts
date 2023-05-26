import { DBProjectRoles } from "src/config/roles";

export type UserBase = {
    name: string;
    surname: string;
    urlPhoto: string | null;
};
export type CollaboratorUser = UserBase & {
    id: number;
    email: string;
};
export type ProjectRole = {
    id: DBProjectRoles;
    name: string;
};
export type ProjectCollaborator = UserBase & {
    id: number;
    email: string;
    projectRole: ProjectRole;
};
