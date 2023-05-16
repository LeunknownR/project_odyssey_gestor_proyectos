import { ProjectForm } from "../../../entities/project/types";
import { isPositiveNumber } from "../../../utils/numbers";
import { checkMaxLength, isString } from "../../../utils/string";
import { CreateProjectRequestBody } from "./types";

export const parseToProjectName = (params: any): string => {
    if (!checkMaxLength(params.projectName, 255))
        throw new Error("Invalid project name");
    return params.projectName;
}
export const parseToCollaboratorName = (params: any): string => {
    if (!checkMaxLength(params.collaboratorName, 100))
        throw new Error("Invalid collaborator name");
    return params.projectName;
}
export const parseToProjectForm = (body: any, withId: boolean): ProjectForm => {
    const {
        id, name, description,
        startDate, endDate, leaderId
    } = body;
    if ((withId && !isPositiveNumber(id)) ||
        !checkMaxLength(name, 255) || 
        !checkMaxLength(description, 200)  ||
        !isPositiveNumber(startDate) || 
        !isPositiveNumber(endDate) ||
        !isPositiveNumber(leaderId))
        throw new Error("Invalid project form");
    const projectForm: ProjectForm = {
        name,
        description,
        startDate,
        endDate,
        leaderId
    };
    if (withId)
        projectForm.id = id;
    return projectForm;
}
export const parseToCreateProjectRequestBody = (body: any): CreateProjectRequestBody => {
    const {
        userId, 
        project
    } = body;
    if (!isPositiveNumber(userId))
        throw new Error("Invalid user id");
    return {
        userId,
        projectForm: parseToProjectForm(project, false)
    };
}
export const parseToProjectFormToUpdate = (body: any): ProjectForm => {
    return parseToProjectForm(body, true);
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
// export const parseToUpdateProjectRequestBody = (body: any): ProjectForm => {
//     const {
//         id, name, description,
//         startDate, endDate, leaderId
//     } = body;
//     if (!isPositiveNumber(id) ||
//         !isLimitMaximString(name, 255) || 
//         !isLimitMaximString(description, 200)  ||
//         !isPositiveNumber(startDate) || 
//         !isPositiveNumber(endDate) ||
//         !isPositiveNumber(leaderId))
//         throw new Error("Invalid form to update project");
//     return {
//         id,
//         name,
//         description,
//         startDate,
//         endDate,
//         leaderId
//     };
// }