import { ProjectForm } from "../../../entities/project/types";
import { isPositiveNumber } from "../../../utils/numbers";
import { isLimitMaximString, isString } from "../../../utils/string";
import { CreateProjectRequestBody } from "./types";

export const parseToProjectName = (params: any): string => {
    if (!isLimitMaximString(params.projectName,255))
        throw new Error("Invalid project name");
    return params.projectName;
}
export const parseToCollaboratorName = (params: any): string => {
    if (!isLimitMaximString(params.collaboratorName,100))
        throw new Error("Invalid collaborator name");
    return params.projectName;
}
export const parseToCreateProjectRequestBody = (body: any): CreateProjectRequestBody => {
    const {
        userId, name, description,
        startDate, endDate, leaderId
    } = body;
    if (!isPositiveNumber(userId) ||
        !isLimitMaximString(name,255) || !isString(description) ||
        !isPositiveNumber(startDate) || !isPositiveNumber(endDate) ||
        !isPositiveNumber(leaderId))
        throw new Error("Invalid form to create project");
    return {
        userId,
        projectForm: {
            name,
            description,
            startDate,
            endDate,
            leaderId
        }
    };
}
const parseToProjectId = (params: any, error: string) => {
    const { projectId } = params;
    if (!isPositiveNumber(projectId))
        throw new Error(error);
    return projectId;
}
export const parseToProjectIdToDelete = (params: any): number => {
    return parseToProjectId(params, "Invalid params to delete project");
}
export const parseToProjectIdToGetDetails = (params: any): number => {
    return parseToProjectId(params, "Invalid project id");
}
export const parseToUpdateProjectRequestBody = (body: any): ProjectForm => {
    const {
        id, name, description,
        startDate, endDate, leaderId
    } = body;
    if (!isPositiveNumber(id) ||
        !isLimitMaximString(name,255) || !isString(description) ||
        !isPositiveNumber(startDate) || !isPositiveNumber(endDate) ||
        !isPositiveNumber(leaderId))
        throw new Error("Invalid form to update project");
    return {
        id,
        name,
        description,
        startDate,
        endDate,
        leaderId
    };
}