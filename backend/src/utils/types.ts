import { ResponseCodes } from "./responseCodes";

export type TokenPayload = {
    username: string,
    roleId: string
};
export type ResponseBody<T> = {
    code: ResponseCodes,
    message: string | null,
    data: T | null
};