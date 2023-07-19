import { ProjectForm } from "../../../entities/project/entities";
import { isPositiveNumberNonZero } from "../../../utils/numbers";
import { checkLength } from "../../../utils/strings";
import { CreateProjectRequestBody, DeleteProjectRequestBody } from "./types";

export const parseToProjectName = (params: any): string | null => {
    const { projectName } = params;
    if (projectName && !checkLength(params.projectName, 1, 255))
        throw new Error("Invalid project name");
    return projectName || null;
}
export const parseToCollaboratorName = (params: any): string => {
    if (!checkLength(params.collaboratorName, 1, 100))
        throw new Error("Invalid collaborator name");
    return params.collaboratorName;
}
export const parseToProjectForm = (body: any, withId: boolean): ProjectForm => {
    const {
        id, name, description,
        startDate, endDate, leaderId
    } = body;
    if ((withId && !isPositiveNumberNonZero(id)) ||
        !checkLength(name, 1, 255) || 
        !checkLength(description, 1, 200)  ||
        !isPositiveNumberNonZero(startDate) || 
        !isPositiveNumberNonZero(endDate) ||
        !isPositiveNumberNonZero(leaderId))
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
    if (!isPositiveNumberNonZero(userId))
        throw new Error("Invalid user id");
    return {
        userId,
        projectForm: parseToProjectForm(project, false)
    };
}
export const parseToProjectFormToUpdate = (body: any): ProjectForm => {
    return parseToProjectForm(body, true);
}
export const parseToDeleteProjectRequestBody = (body: any): DeleteProjectRequestBody => {
    const { userId, projectId } = body;
    if (!isPositiveNumberNonZero(userId) || !isPositiveNumberNonZero(projectId))
        throw new Error("Invalid form to delete project");
    return { userId, projectId };
}