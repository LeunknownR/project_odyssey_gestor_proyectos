import { UpdateEndDateForm } from "../../../entities/project/types";
import { isPositiveNumber } from "../../../utils/numbers";
import { isString } from "../../../utils/string";

export const parseToCollaboratorName = (params: any): string => {
    if (!isString(params.collaboratorName))
        throw new Error("Invalid collaboratorName");
    return params.collaboratorName;
}
export const parseToUpdateEndDateProjectRequestBody = (body: any) : UpdateEndDateForm => {
    const {
        projectId,
        endDate
    } = body;
    if (!isPositiveNumber(projectId) ||
        !isPositiveNumber(endDate))
        throw new Error("Invalid form to update project");
    return {
            projectId ,
            endDate
    };
}