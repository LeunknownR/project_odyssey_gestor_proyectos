import { APIHandler } from "src/config/api";
import { APIRequestFunction, ResponseBody } from "../types";
import { AuthData, Credentials } from "src/entities/user/types";
import { ApiPathEndpoints } from "../apiPathEndpoints";

export const requestLogin: APIRequestFunction<
    AuthData,
    Credentials
> = async credentials => {
    const data: ResponseBody<AuthData> = await APIHandler.api.post(
        ApiPathEndpoints.Login,
        credentials
    );
    return data;
};
