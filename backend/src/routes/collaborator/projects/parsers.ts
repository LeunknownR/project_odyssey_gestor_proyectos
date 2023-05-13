import { isString } from "../../../utils/string";

export const parseToCollaboratorName = (params: any): string => {
    if (!isString(params.collaboratorName))
        throw new Error("Invalid collaboratorName");
    return params.collaboratorName;
}