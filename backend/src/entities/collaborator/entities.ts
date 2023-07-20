import { UserBase } from "../user/UserBase";

export type ProjectRole = {
    id: number;
    name: string;
};
export type ProjectCollaborator = UserBase & {
    id: number;
	projectTeamMemberId: number;
    projectRole: ProjectRole;
};