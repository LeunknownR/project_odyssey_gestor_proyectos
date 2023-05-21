export type CollaboratorUser = {
	id: number
	name: string,
	surname: string,
	urlPhoto: string | null,
};
export type ProjectLeader = {
	name: string,
	surname: string,
	email: string
	urlPhoto: string | null,
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