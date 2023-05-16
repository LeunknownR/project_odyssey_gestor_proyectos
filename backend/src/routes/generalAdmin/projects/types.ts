import { ProjectForm, UpdateEndDateProjectRequestBody as UpdateEndDateProjectRequestBody } from "../../../entities/project/types"

export type CreateProjectRequestBody = {
    userId: number,
    projectForm: ProjectForm
};