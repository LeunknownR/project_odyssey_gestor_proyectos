import { CollaboratorUser, ProjectRole } from "src/entities/collaborator/types";
import { APIRequestFunction, ResponseBody } from "../types";
import { ApiPathEndpoints } from "../apiPathEndpoints";
import { APIHandler } from "src/config/api";
import { getEndpointWithPathVariables } from "../utils/helpers";
import { getUserId } from "src/storage/user.local";
import { DeleteCollaboratorRequestBody} from "./types.ts"

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
export const requestGetCollaboratorForProyect: APIRequestFunction<
    CollaboratorUser[],
    string
> = async (SearchCollaboratorRequestBody: string) => {
    const path: string = getEndpointWithPathVariables(
        ApiPathEndpoints.SearchCollaboratorMember,
        [SearchCollaboratorRequestBody]
    );
    const data: ResponseBody<CollaboratorUser[]> =
        await APIHandler.api.get(path);
    return data;
};
export const requestDeleteCollaborator: APIRequestFunction<
    null,
    number
> = async (projectHasCollaboratorId: number) => {
    const body: DeleteCollaboratorRequestBody = { 
        userId: getUserId(), 
        projectHasCollaboratorId,
    };
    const data: ResponseBody = await APIHandler.api.delete(
        ApiPathEndpoints.DeleteProjectMember,
        { data: body }
    );
    return data;
};