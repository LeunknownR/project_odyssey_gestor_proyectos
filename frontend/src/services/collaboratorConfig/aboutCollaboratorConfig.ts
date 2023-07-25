import { APIRequestFunction, ResponseBody } from "../types";
import { APIHandler } from "src/config/api";
import { ApiPathEndpoints } from "../apiPathEndpoints";
import {
    CheckCredentialsRequestBody,
    GetCollaboratorsRequestBody,
    GetCollaboratorsResponseRequest,
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
    console.log(data);
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
    console.log(data);
    return data;
};
