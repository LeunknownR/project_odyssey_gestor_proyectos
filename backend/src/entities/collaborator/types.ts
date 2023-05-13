export type Collaborator = {
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
