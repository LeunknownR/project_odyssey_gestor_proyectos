import { ProjectLeader } from "../collaborator/types";
import { ProjectState } from "./enums";

export type ProjectBase = {
    name: string,
    description: string,
    startDate: number,
    endDate: number
};
export type Project = ProjectBase & {
    id: number,
    state: ProjectState,
    leader: ProjectLeader
};
export type ProjectByCollaborator = ProjectBase & {
    id: number,
    state: ProjectState,
};
export type ProjectForm = ProjectBase & {
    id?: number,
    userId?: number,
    leaderId: number
};
export type GroupedProjectList = {
    recents: Project[],
    all: Project[]
};
export type GroupedProjectListByCollaborator = {
    recents: ProjectByCollaborator[],
    all: ProjectByCollaborator[]
};