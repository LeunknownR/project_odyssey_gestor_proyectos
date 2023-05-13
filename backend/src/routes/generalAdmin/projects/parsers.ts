import { isPositiveNumber } from "../../../utils/numbers";
import { isString } from "../../../utils/string";
import { CreateProjectRequestBody, UpdateProjectRequestBody } from "./types";

export const parseToName = (params: any): string => {
    if (!isString(params.projectName))
        throw new Error("Invalid project name");
    return params.projectName;
}
export const parseToCreateProjectRequestBody = (body: any): CreateProjectRequestBody => {
    const {
        userId, name, description,
        startDate, endDate, leaderId
    } = body;
    if (!isPositiveNumber(userId) ||
        !isString(name) || !isString(description) ||
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
export const parseToUpdateProjectRequestBody = (body: any): UpdateProjectRequestBody => {
    const {
        id, name, description,
        startDate, endDate, leaderId
    } = body;
    if (!isPositiveNumber(id) ||
        !isString(name) || !isString(description) ||
        !isPositiveNumber(startDate) || !isPositiveNumber(endDate) ||
        !isPositiveNumber(leaderId))
        throw new Error("Invalid form to update project");
    return {
        projectForm: {
            id,
            name,
            description,
            startDate,
            endDate,
            leaderId
        }
    };
}