import { ProjectForm } from "../../../entities/project/entities"

export type CreateProjectRequestBody = {
    userId: number,
    projectForm: ProjectForm
};
export type DeleteProjectRequestBody = {
    userId: number,
    projectId: number
};