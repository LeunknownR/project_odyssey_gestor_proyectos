export enum ResponseMessages {
    Success = "SUCCESS",
    FatalError = "FATAL_ERROR",
    Unauthorized = "UNAUTHORIZED"
}
export enum ResponseCodes {
    Ok = 200,
    BadRequest = 400,
    Unauthorized = 401,
    InternalServerError = 500
}
export const getResponseCodeIfMessageExists = (message: string, alternativeResponseCode?: ResponseCodes): ResponseCodes => {
    return message === ResponseMessages.Success 
        ? ResponseCodes.Ok 
        : alternativeResponseCode || ResponseCodes.InternalServerError;
}