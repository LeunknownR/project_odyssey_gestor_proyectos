import { Response } from "express";
import { ResponseCodes } from "./responseCodes";
import { ResponseBody } from "./types";

export abstract class GenerateResponseBody {
    public static readonly INVALID_PARAMS_RESPONSE: any = {
        code: ResponseCodes.BAD_REQUEST,
        message: "INVALID_PARAMS"
    };
    public static readonly FATAL_ERROR_RESPONSE: any = {
        code: ResponseCodes.INTERNAL_SERVER_ERROR,
        message: "FATAL_ERROR"
    };
    public static sendResponse = (res: Response, body: ResponseBody): void => {
        res.status(200).send(body);
    }
    public static sendUnauthorizedResponse = (res: Response): void => {
        res.status(ResponseCodes.UNAUTHORIZED).send({
            code: ResponseCodes.UNAUTHORIZED,
            message: "UNAUTHORIZED"
        });
    }
}