import { ProjectState } from "./enums";

export type ProjectLeader = {
	name: string,
	surname: string,
	urlPhoto: string | null,
	email: string,
    projectRole: string
};
export type Project = {
    id: number,
    name: string,
    description: string,
    state: ProjectState,
    startDate: number,
    endDate: number,
    leader: ProjectLeader
};
export type GroupedProjectList = {
    recents: Project[],
    all: Project[]
};