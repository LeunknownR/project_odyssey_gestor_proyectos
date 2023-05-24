export type UserBase = {
	name: string,
	surname: string,
	urlPhoto: string | null,
}
export type CollaboratorUser = UserBase & {
	id: number
	email: string
};
export type ProjectLeader = UserBase & {
	email: string
};
export type ProjectRole = {
    id: number;
    name: string;
};
export type ProjectCollaborator = UserBase & {
    id: number,
    projectRole: ProjectRole
};