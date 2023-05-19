import { ProjectCollaborator, ProjectLeader } from "../collaborator/types";
import { ProjectState } from "./enums";

export type UpdateEndDateProjectRequestBody = {
    projectId: number,
    endDate: number
};
export type SearchCollaboratorRequestBody = {
    projectId: number,
    collaboratorName: string
}
export type AddProjectMembersRequestBody = {
    projectId: number,
    membersIds: number[]
};
export type DeleteProjectMemberRequestBody = {
    userId: number,
    projectHasMemberId: number
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
export type ProjectDetails = {
    id: number,
    name: string,
    description: string,
    period: string,
    endDate: number,
    collaborators: ProjectCollaborator[]
};