import { AddCollaboratorsInProject, UpdateEndDateForm } from "../../../entities/project/types";
import { isPositiveArrayNumber, isPositiveNumber } from "../../../utils/numbers";
import { isLimitMaximString, isString } from "../../../utils/string";

export const parseToCollaboratorName = (params: any): string => {
    if (!isLimitMaximString(params.collaboratorName,100))
        throw new Error("Invalid collaboratorName");
    return params.collaboratorName;
}

export const parseToProjectId = (params: any): number => {
    if (!isPositiveNumber(params.projectId))
        throw new Error("Invalid projectId");
    return params.projectId;
}
export const parseToUpdateEndDateProjectRequestBody = (body: any): UpdateEndDateForm => {
    const {
        projectId,
        endDate
    } = body;
    if (!isPositiveNumber(projectId) ||
        !isPositiveNumber(endDate))
        throw new Error("Invalid form to update end date of the project");
    return {
        projectId,
        endDate
    };
}
export const parseToAddCollaboratorsInProjectRequestBody = (body: any): AddCollaboratorsInProject => {
    const {
        projectId,
        membersIds
    } = body;
    if (!isPositiveNumber(projectId) ||
        !isPositiveArrayNumber(membersIds))
        throw new Error("Invalid form to add collaborators in the project");
    return {
        projectId,
        membersIds
    };
}