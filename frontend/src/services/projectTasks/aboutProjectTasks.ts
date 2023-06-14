import { SearchCollaboratorRequestBody } from "src/entities/project/entities";
import { APIRequestFunction, ResponseBody } from "../types";
import { CollaboratorUser } from "src/entities/collaborator/entities";
import { APIHandler } from "src/config/api";
import { ApiPathEndpoints } from "../apiPathEndpoints";
import { getEndpointWithPathVariables } from "../utils/helpers";
import { ProjectTaskPriority } from "src/entities/projectTasks/entities";

export const requestGetTeamMembers: APIRequestFunction<
    CollaboratorUser[],
    SearchCollaboratorRequestBody
> = async ({
    collaboratorName,
    projectId
}: SearchCollaboratorRequestBody) => {
    const path: string = getEndpointWithPathVariables(
        ApiPathEndpoints.SearchProjectTeamMembers,
        [projectId, collaboratorName]
    );
    const res: ResponseBody<CollaboratorUser[]> =
        await APIHandler.api.get(path);
    return res;
};
export const requestGetTaskPriority = async () => {
    const res: ResponseBody<ProjectTaskPriority[]> =
        await APIHandler.api.get(ApiPathEndpoints.SearchTaskPriorities);
    return res;
};