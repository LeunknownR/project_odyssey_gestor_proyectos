import { ProjectCollaborator, CollaboratorUser } from "../collaborator/types";
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
    projectMemberCount: number,
    leader?: CollaboratorUser,
};
export type ProjectForm = ProjectBase & {
    id?: number,
    leaderId: number
};
export type GroupedProjectList = {
    recents: Project[],
    all: Project[]
};
export type ProjectDetails = {
    id: number,
    name: string,
    description: string,
    period: string,
    endDate: number,
    collaborators: ProjectCollaborator[]
};