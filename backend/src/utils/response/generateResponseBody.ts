import { Response } from "express";
import { ResponseBody } from "../types";
import { ResponseCodes, ResponseMessages } from "./enums";

export abstract class GenerateResponseBody {
    public static sendResponse<T>(res: Response<ResponseBody<T>>, body: ResponseBody<T>): void {
        res.status(body.code).send(body);
    }
    public static sendUnauthorizedResponse = (res: Response<ResponseBody<null>>): void => {
        res.status(ResponseCodes.Unauthorized)
            .send({
                code: ResponseCodes.Unauthorized,
                message: ResponseMessages.Unauthorized,
                data: null
            });
    }
    public static sendFatalErrorResponse = (res: Response<ResponseBody<null>>): void => {
        res.status(ResponseCodes.Unauthorized)
            .send({
                code: ResponseCodes.InternalServerError,
                message: ResponseMessages.FatalError,
                data: null
            });
    }
}