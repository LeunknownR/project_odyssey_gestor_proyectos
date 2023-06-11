import { CollaboratorUser } from "src/entities/collaborator/entities";
import { APIRequestFunction, ResponseBody } from "../types";
import { ApiPathEndpoints } from "../apiPathEndpoints";
import { APIHandler } from "src/config/api";
import { getEndpointWithPathVariables } from "../utils/helpers";
import { AddProjectMembersRequestBody, SearchCollaboratorRequestBody } from "./types";

export const requestSearchCollaboratorForGeneralAdmin: APIRequestFunction<
    CollaboratorUser[],
    string
> = async (collaboratorName: string) => {
    const path: string = getEndpointWithPathVariables(
        ApiPathEndpoints.SearchCollaborator,
        [collaboratorName]
    );
    const res: ResponseBody<CollaboratorUser[]> =
        await APIHandler.api.get(path);
    return res;
};
export const requestSearchCollaboratorToBeMemberForCollaborator: APIRequestFunction<
    CollaboratorUser[],
    SearchCollaboratorRequestBody
> = async ({
    collaboratorName,
    projectId
}: SearchCollaboratorRequestBody) => {
    const path: string = getEndpointWithPathVariables(
        ApiPathEndpoints.SearchCollaboratorMember,
        [projectId, collaboratorName]
    );
    const res: ResponseBody<CollaboratorUser[]> =
        await APIHandler.api.get(path);
    return res;
};
export const requestAddMemberToProject: APIRequestFunction<
null,
AddProjectMembersRequestBody
> = async (addProjectMembersRequestBody: AddProjectMembersRequestBody) => {
    const res: ResponseBody = await APIHandler.api.patch(
        ApiPathEndpoints.AddProjectMembers,
        addProjectMembersRequestBody
    );
    return res;
}