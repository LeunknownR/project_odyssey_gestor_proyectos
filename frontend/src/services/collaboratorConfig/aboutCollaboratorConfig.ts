import { APIRequestFunction, ResponseBody } from "../types";
import { APIHandler } from "src/config/api";
import { ApiPathEndpoints } from "../apiPathEndpoints";
import {
    ChangePasswordRequestBody,
    CheckCredentialsRequestBody,
    CreateCollaboratorBody,
    GetCollaboratorsRequestBody,
    GetCollaboratorsResponseRequest,
    UpdateCollaboratorBody,
    UpdatePasswordRequestBody,
} from "./types";
import { getEndpointWithPathVariables } from "../utils/helpers";

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
export const requestDeleteCollaborator: APIRequestFunction<
    null,
    number
> = async (collaboratorId: number) => {
    const path: string = getEndpointWithPathVariables(
        ApiPathEndpoints.DeleteCollaborator,
        [collaboratorId]
    );
    const data: ResponseBody = await APIHandler.api.delete(path);
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
export const requestUpdatePhoto: APIRequestFunction<
    null,
    UpdatePasswordRequestBody
> = async ({ collaboratorId, photoInBase64 }: UpdatePasswordRequestBody) => {
    const body: UpdatePasswordRequestBody = {
        collaboratorId,
        photoInBase64,
    };
    const data: ResponseBody<null> = await APIHandler.api.patch(
        ApiPathEndpoints.UpdatePhoto,
        body
    );
    return data;
};
export const requestChangePassword: APIRequestFunction<
    null,
    ChangePasswordRequestBody
> = async ({ collaboratorId, newPassword }: ChangePasswordRequestBody) => {
    const body: ChangePasswordRequestBody = {
        collaboratorId,
        newPassword,
    };
    const data: ResponseBody<null> = await APIHandler.api.patch(
        ApiPathEndpoints.ChangePassword,
        body
    );
    return data;
};