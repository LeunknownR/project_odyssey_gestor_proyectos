import { type } from "os";
import { Collaborator, ProjectLeader } from "../collaborator/types";
import { ProjectState } from "./enums";

export type UpdateEndDateForm = {
    projectId: number,
    endDate: number
};
export type AddCollaboratorsInProject = {
    projectId: number,
    membersIds: number[]
};
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
export type GroupedProjectListForGeneralAdmin = {
    recents: Project[],
    all: Project[]
};
export type GroupedProjectListForCollaborator = {
    recents: ProjectByCollaborator[],
    all: ProjectByCollaborator[]
};
