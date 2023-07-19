import { 
    AddProjectMembersRequestBody, 
    DeleteProjectMemberRequestBody, 
    UpdateEndDateProjectRequestBody 
} from "./types";
import { isPast } from "../../../utils/datetime";
import { isPositiveNumberNonZero } from "../../../utils/numbers";
import { checkLength } from "../../../utils/strings";
import { GetProjectListForCollaboratorRequestBody } from "./types";
import { isPositiveArrayNumber } from "../../../utils/arrays";

export const parseToGetProjectListForCollaboratorRequestBody = (params: any): GetProjectListForCollaboratorRequestBody => {
    const { collaboratorId, projectName } = params;
    if (!isPositiveNumberNonZero(collaboratorId) ||
        (projectName && !checkLength(projectName, 1, 50)))
        throw new Error("Invalid request body to get project list");
    return {
        projectName: projectName || null,
        collaboratorId
    };
}
export const parseToProjectId = (params: any): number => {
    if (!isPositiveNumberNonZero(params.projectId))
        throw new Error("Invalid project id");
    return params.projectId;
}
export const parseToProjectIdToGetDetails = (params: any) => {
    const { projectId } = params;
    if (!isPositiveNumberNonZero(projectId))
        throw new Error("Invalid project id");
    return projectId;
}
export const parseToUpdateEndDateProjectRequestBody = (body: any): UpdateEndDateProjectRequestBody => {
    const {
        projectId,
        endDate
    } = body;
    if (!isPositiveNumberNonZero(projectId) ||
        !isPositiveNumberNonZero(endDate) || isPast(endDate))
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
    if (!isPositiveNumberNonZero(projectId) ||
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
    if (!isPositiveNumberNonZero(userId) ||
        !isPositiveNumberNonZero(projectTeamMemberId))
        throw new Error("Invalid form to delete a project member");
    return {
        userId: parseInt(userId),
        projectTeamMemberId: parseInt(projectTeamMemberId)
    };
}