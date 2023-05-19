import { InternalAxiosRequestConfig } from "axios";
import { tokenLocalStorage } from "../storage/user.local";
import { clearStorage } from "src/storage";
import { InterceptorMessages } from "./constants";
import { ApiPathEndpoints } from "src/services/apiPathsEndpoints";
import { APIHandler } from "src/config/api";
import { ResponseBody } from "src/services/types";
import { HandlerErrorWithModals } from "./types";
import { ResponseCodes } from "src/services/utils/enums";

const injectToken = (req: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    req.headers.Authorization = `Bearer ${tokenLocalStorage.get()}`;
    return req;
};
const isLoginEndpoint = (endpoint: string): boolean => {
    return endpoint === ApiPathEndpoints.Login;
}
const addHeadersToRequest = (req: InternalAxiosRequestConfig): void => {
    req.headers["Content-Type"] = "application/json";
}
export const initAxiosInterceptors = (handlerErrorWithModals: HandlerErrorWithModals): void => {
    const { api } = APIHandler;
    api.interceptors.request.use(req => {
        addHeadersToRequest(req);
        if (isLoginEndpoint(req.url || "")) return req;
        return injectToken(req);
    });
    api.interceptors.response.use(
        res => res.data,
        err => {
            if (err.response.status === ResponseCodes.Unauthorized) 
                clearStorage();
            const { data } = err.response;
            let responseBody: ResponseBody<unknown | null> = {
                code: ResponseCodes.BadRequest,
                data: null,
                message: InterceptorMessages.UnexpectedError
            };
            if (typeof data !== "object")
                responseBody = err.response.data;
            handlerErrorWithModals(responseBody.code, responseBody.message);
            return Promise.resolve(responseBody);
        }
    );
}