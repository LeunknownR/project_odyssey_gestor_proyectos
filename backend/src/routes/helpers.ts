import { Request, Response } from "express"
import { GenerateResponseBody } from "../utils/response/generateResponseBody"

export const withErrorHandler = (handler: (req: Request, res: Response) => Promise<void>) => {
    return (req: Request, res: Response) => {
        handler(req, res)
        .catch((err: any) => {
            console.log(err);
            GenerateResponseBody.sendFatalErrorResponse(res);
        });
    };
};