export type CollaboratorUser = {
	id: number
	name: string,
	surname: string,
	urlPhoto: string | null,
};
export type ProjectLeader = {
	name: string,
	surname: string,
	urlPhoto: string | null,
	email: string,
	projectRole: string
};
export type ProjectRole = {
    id: number;
    name: string;    
};
export type ProjectCollaborator = {
    id: number,
    name: string,
    surname: string,
    urlPhoto: string | null,
    projectRole: ProjectRole
};