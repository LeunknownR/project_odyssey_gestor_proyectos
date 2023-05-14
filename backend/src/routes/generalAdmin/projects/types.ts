import { ProjectForm, UpdateEndDateForm as UpdateEndDateForm } from "../../../entities/project/types"

export type CreateProjectRequestBody = {
    userId: number,
    projectForm: ProjectForm
};