import { AddProjectMembersRequestBody, DeleteProjectMemberRequestBody, GetProjectTableDetailRequestBody, SearchCollaboratorRequestBody, UpdateEndDateProjectRequestBody } from "./types";
import { isPast } from "../../../utils/datetime";
import { isPositiveArrayNumber, isPositiveNumber } from "../../../utils/numbers";
import { checkLength } from "../../../utils/string";
import { GetProjectListForCollaboratorRequestBody } from "./types";

export const parseToGetProjectListForCollaboratorRequestBody = (params: any): GetProjectListForCollaboratorRequestBody => {
    const { collaboratorId, projectName } = params;
    if (!isPositiveNumber(collaboratorId) ||
        (projectName && !checkLength(projectName, 1, 50)))
        throw new Error("Invalid request body to get project list");
    return {
        projectName: projectName || null,
        collaboratorId
    };
}
export const parseToSearchCollaboratorRequestBody = (params: any): SearchCollaboratorRequestBody => {
    const { projectId, collaboratorName } = params;
    if (!isPositiveNumber(projectId) ||
        !checkLength(collaboratorName, 0, 100))
        throw new Error("Invalid request body to search collaborator");
    return { projectId, collaboratorName };
}
export const parseToProjectId = (params: any): number => {
    if (!isPositiveNumber(params.projectId))
        throw new Error("Invalid project id");
    return params.projectId;
}
export const parseToProjectIdToGetDetails = (params: any) => {
    const { projectId } = params;
    if (!isPositiveNumber(projectId))
        throw new Error("Invalid project id");
    return projectId;
}
export const parseToUpdateEndDateProjectRequestBody = (body: any): UpdateEndDateProjectRequestBody => {
    const {
        projectId,
        endDate
    } = body;
    if (!isPositiveNumber(projectId) ||
        !isPositiveNumber(endDate) || isPast(endDate))
        throw new Error("Invalid form to update end date of the project");
    return {
        projectId,
        endDate
    };
}
export const parseToAddProjectMembersRequestBody = (body: any): AddProjectMembersRequestBody => {
    const {
        projectId,
        membersIds
    } = body;
    if (!isPositiveNumber(projectId) ||
        !isPositiveArrayNumber(membersIds))
        throw new Error("Invalid form to add project members");
    return {
        projectId,
        membersIds
    };
}
export const parseToDeleteProjectMemberRequestBody = (params: any): DeleteProjectMemberRequestBody => {
    const {
        userId,
        projectHasCollaboratorId
    } = params;
    if (!isPositiveNumber(userId) ||
        !isPositiveNumber(projectHasCollaboratorId))
        throw new Error("Invalid form to delete a project member");
    return {
        userId: parseInt(userId),
        projectHasCollaboratorId: parseInt(projectHasCollaboratorId)
    };
}
export const parseToGetProjectTableDetailRequestBody = (params: any): GetProjectTableDetailRequestBody => {
    const {
        projectId,
        userId
    } = params;
    if (!isPositiveNumber(projectId) ||
        !isPositiveNumber(userId))
        throw new Error("Invalid form to get project table detail ");
    return {
        projectId: parseInt(projectId),
        userId: parseInt(userId),
    };
}