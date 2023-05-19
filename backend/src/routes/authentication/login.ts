import express, { Request, Response } from "express";
import { ApiPathEndpointsAuthentication, ApiPathEndpointsGeneral } from "../apiPaths";
import UserController from "../../controllers/userController/userController";
import { GenerateResponseBody } from "../../utils/response/generateResponseBody";
import { parseToCredentials } from "./parsers";
import { AuthData, Credentials } from "../../entities/user/types";
import { withErrorHandler } from "../helpers";
import { ResponseCodes, getResponseCodeIfMessageExists } from "../../utils/response/enums";

const router = express.Router();
router.post(
    ApiPathEndpointsAuthentication.Login, 
    withErrorHandler(async (req: Request, res: Response) => {
        const credentials: Credentials = parseToCredentials(req.body);
        const [authData, message]  = await UserController.login(credentials);
        GenerateResponseBody.sendResponse<AuthData>(res, {
            code: getResponseCodeIfMessageExists(message, ResponseCodes.BadRequest),
            message,
            data: authData
        });
    }));

export default router;