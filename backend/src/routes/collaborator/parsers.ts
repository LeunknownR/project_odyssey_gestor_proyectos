import { isPositiveNumberNonZero } from "../../utils/numbers";
import { checkLength } from "../../utils/strings";
import { SearchCollaboratorRequestBody } from "./types";

export const parseToSearchCollaboratorRequestBody = (params: any, errorMessage: string): SearchCollaboratorRequestBody => {
    const { projectId, collaboratorName } = params;
    if (!isPositiveNumberNonZero(projectId) ||
        !checkLength(collaboratorName, 0, 100))
        throw new Error(errorMessage);
    return { projectId, collaboratorName };
}