import { 
    AddProjectMembersRequestBody, 
    DeleteProjectMemberRequestBody, 
    UpdateEndDateProjectRequestBody 
} from "./types";
import { isPast } from "../../../utils/datetime";
import { isPositiveNumber } from "../../../utils/numbers";
import { checkLength } from "../../../utils/strings";
import { GetProjectListForCollaboratorRequestBody } from "./types";
import { isPositiveArrayNumber } from "../../../utils/arrays";

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
        projectTeamMemberId
    } = params;
    if (!isPositiveNumber(userId) ||
        !isPositiveNumber(projectTeamMemberId))
        throw new Error("Invalid form to delete a project member");
    return {
        userId: parseInt(userId),
        projectTeamMemberId: parseInt(projectTeamMemberId)
    };
}