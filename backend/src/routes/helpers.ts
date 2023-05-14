import { NextFunction, Request, Response } from "express"
import { GenerateResponseBody } from "../utils/generateResponseBody";

export const fatalErrorEndpointHandler = async (
    err: any,
    _: Request, 
    res: Response, 
    next: NextFunction) => {
    console.log(err);
    if (!err) {
        next();
        return;
    }
    GenerateResponseBody.sendResponse(res, GenerateResponseBody.FATAL_ERROR_RESPONSE);
}