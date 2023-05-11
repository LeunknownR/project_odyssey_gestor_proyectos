import { DBMessages } from "../db/dbMessages";

export enum ResponseCodes {
    OK = 200,
    BAD_REQUEST = 400,
    NOT_FOUND = 404,
    UNAUTHORIZED = 401,
    FORBIDDEN = 403,
    INTERNAL_SERVER_ERROR = 500
}
export const getResponseCodeFromDBMessage = (message: string): number => {
    return message === DBMessages.Success 
        ? ResponseCodes.OK 
        : ResponseCodes.BAD_REQUEST;
}