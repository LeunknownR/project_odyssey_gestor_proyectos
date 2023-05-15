import express, { Request, Response } from "express";
import { ApiPathEndpointsAuthentication, ApiPathEndpointsGeneral } from "../apiPaths";
import UserController from "../../controllers/userController/userController";
import { GenerateResponseBody } from "../../utils/generateResponseBody";
import { parseToCredentials } from "./parsers";
import { Credentials } from "../../entities/user/types";
import { ResponseBody } from "../../utils/types";
import { withErrorHandler } from "../helpers";

const router = express.Router();
router.post(
    ApiPathEndpointsAuthentication.Login, 
    withErrorHandler(async (req: Request, res: Response) => {
        const credentials: Credentials = parseToCredentials(req.body);
        const payload: ResponseBody = await UserController.login(credentials);
        GenerateResponseBody.sendResponse(res, payload);
    }));

export default router;