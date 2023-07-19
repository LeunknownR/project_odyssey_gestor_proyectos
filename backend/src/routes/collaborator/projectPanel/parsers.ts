import { GetProjectPanelDetailRequestBody } from "./types";
import { isPositiveNumberNonZero } from "../../../utils/numbers";

export const parseToGetProjectPanelDetailRequestBody = (params: any): GetProjectPanelDetailRequestBody => {
    const {
        projectId,
        userId
    } = params;
    if (!isPositiveNumberNonZero(projectId) ||
        !isPositiveNumberNonZero(userId))
        throw new Error("Invalid form to get project table detail");
    return {
        projectId: parseInt(projectId),
        userId: parseInt(userId),
    };
}