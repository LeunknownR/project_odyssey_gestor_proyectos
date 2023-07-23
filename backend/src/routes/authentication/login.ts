import express, { Request, Response } from "express";
import { ApiPathEndpointsAuthentication, ApiPathEndpointsGeneral } from "../apiPaths";
import UserController from "../../controllers/userController/user.controller";
import { GenerateResponseBody } from "../../utils/response/generateResponseBody";
import { AuthData } from "../../entities/user/types";
import { withErrorHandler } from "../helpers";
import { ResponseCodes, getResponseCodeIfMessageExists } from "../../utils/response/enums";
import UserCredentials from "./UserCredentials";

const router = express.Router();
router.post(
    ApiPathEndpointsAuthentication.Login, 
    withErrorHandler(async (req, res) => {
        const credentials: UserCredentials = new UserCredentials(req.body);
        const [data, message]  = await UserController.login(credentials);
        GenerateResponseBody.sendResponse<AuthData>(res, {
            code: getResponseCodeIfMessageExists(message, ResponseCodes.BadRequest),
            data,
            message
        });
    })
);
router.post(
    ApiPathEndpointsAuthentication.CheckCredentials,
    withErrorHandler(async (req, res) => {
        const credentials: UserCredentials = new UserCredentials(req.body);
        const message: string = await UserController.checkCredentials(credentials);
        GenerateResponseBody.sendResponse(res, {
            code: getResponseCodeIfMessageExists(message, ResponseCodes.BadRequest),
            data: null,
            message
        });
    })
)

export default router;