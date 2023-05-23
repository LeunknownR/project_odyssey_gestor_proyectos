import { ProjectForm } from "src/entities/project/types";

export type CreateProjectRequestBody = {
    userId: number;
    project: ProjectForm
};
