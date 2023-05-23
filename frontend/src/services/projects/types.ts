import { ProjectForm } from "src/entities/project/types";

export type CreateProjectRequestBody = {
    userId: number;
    project: ProjectForm;
};
export type DeleteProjectRequestBody = {
    userId: number;
    projectId: number;
};