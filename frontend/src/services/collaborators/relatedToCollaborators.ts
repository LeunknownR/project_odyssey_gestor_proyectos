import { CollaboratorUser, ProjectRole } from "src/entities/collaborator/types";
import { APIRequestFunction, ResponseBody } from "../types";
import { ApiPathEndpoints } from "../apiPathEndpoints";
import { APIHandler } from "src/config/api";
import { getEndpointWithPathVariables } from "../utils/helpers";
import { getUserId } from "src/storage/user.local";
import { SearchCollaboratorRequestBody } from "./types";

export const requestSearchCollaboratorForGeneralAdmin: APIRequestFunction<
    CollaboratorUser[],
    string
> = async (collaboratorName: string) => {
    // /:collaboratorId/:projectName
    const path: string = getEndpointWithPathVariables(
        ApiPathEndpoints.SearchCollaborator,
        [collaboratorName]
    );
    const data: ResponseBody<CollaboratorUser[]> =
        await APIHandler.api.get(path);
    return data;
};
export const requestSearchCollaboratorToBeMemberForCollaborator: APIRequestFunction<
    CollaboratorUser[],
    SearchCollaboratorRequestBody
> = async ({
    collaboratorName,
    projectId
}: SearchCollaboratorRequestBody) => {
    // /:projectId/:collaboratorName
    const path: string = getEndpointWithPathVariables(
        ApiPathEndpoints.SearchCollaboratorMember,
        [projectId, collaboratorName]
    );
    const data: ResponseBody<CollaboratorUser[]> =
        await APIHandler.api.get(path);
    return data;
};