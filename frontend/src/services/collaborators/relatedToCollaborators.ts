import { CollaboratorUser } from "src/entities/collaborator/types";
import { APIRequestFunction, ResponseBody } from "../types";
import { ApiPathEndpoints } from "../apiPathEndpoints";
import { APIHandler } from "src/config/api";
import { getEndpointWithPathVariables } from "../utils/helpers";

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