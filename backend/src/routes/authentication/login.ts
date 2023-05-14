import express, { Request, Response } from "express";
import { ApiPathEndpointsAuthentication, ApiPathEndpointsGeneral } from "../apiPaths";
import { ResponseCodes } from "../../utils/responseCodes";
import UserController from "../../controllers/userController/userController";
import { GenerateResponseBody } from "../../utils/generateResponseBody";
import { parseToCredentials } from "./parsers";
import { Credentials } from "../../entities/user/types";
import { ResponseBody } from "../../utils/types";

const router = express.Router();
router.post(
    ApiPathEndpointsAuthentication.Login, 
    async (req: Request, res: Response) => {
        const credentials: Credentials = parseToCredentials(req.body);
        const payload: ResponseBody = await UserController.login(credentials);
        GenerateResponseBody.sendResponse(res, payload);
    });

export default router;