import { APIRequestFunction, ResponseBody } from "../types";
import { APIHandler } from "src/config/api";
import { ApiPathEndpoints } from "../apiPathEndpoints";
import {
    CheckCredentialsRequestBody,
    CreateCollaboratorBody,
    GetCollaboratorsRequestBody,
    GetCollaboratorsResponseRequest,
    UpdateCollaboratorBody,
} from "./types";

export const requestGetCollaborators: APIRequestFunction<
    GetCollaboratorsResponseRequest,
    GetCollaboratorsRequestBody
> = async ({ searchedCollaborator, page }: GetCollaboratorsRequestBody) => {
    const body: GetCollaboratorsRequestBody = {
        searchedCollaborator,
        page,
    };
    const data: ResponseBody<GetCollaboratorsResponseRequest> =
        await APIHandler.api.post(ApiPathEndpoints.GetCollaborators, body);
    return data;
};
export const requestCreateCollaborator: APIRequestFunction<
    null,
    CreateCollaboratorBody
> = async (collaborator: CreateCollaboratorBody) => {
    const data: ResponseBody = await APIHandler.api.post(
        ApiPathEndpoints.CreateCollaborator,
        collaborator
    );
    return data;
};
export const requestUpdateCollaborator: APIRequestFunction<
    null,
    UpdateCollaboratorBody
> = async (collaborator: UpdateCollaboratorBody) => {
    const data: ResponseBody = await APIHandler.api.put(
        ApiPathEndpoints.UpdateCollaborator,
        collaborator
    );
    return data;
};
export const requestCheckCredentials: APIRequestFunction<
    null,
    CheckCredentialsRequestBody
> = async ({ username, password }: CheckCredentialsRequestBody) => {
    const body: CheckCredentialsRequestBody = {
        username,
        password,
    };
    const data: ResponseBody<null> = await APIHandler.api.post(
        ApiPathEndpoints.CheckCredentials,
        body
    );
    return data;
};
