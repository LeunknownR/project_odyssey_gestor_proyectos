import express, { Request, Response } from "express";
import { ApiPathEndpointsAuthentication, ApiPathEndpointsGeneral } from "../apiPaths";
import { ResponseCodes } from "../../utils/responseCodes";
import UserController from "../../controllers/userController/userController";
import { GenerateResponseBody } from "../../utils/generateResponseBody";
import { parseToCredentials } from "./parsers";
import { ResponseBody } from "../../types/response";
import { Credentials } from "../../entities/user/types";

const router = express.Router();
router.post(
    ApiPathEndpointsAuthentication.Login, 
    async (req: Request, res: Response) => {
        try {
            const credentials: Credentials = parseToCredentials(req.body);
            const payload: ResponseBody = await UserController.login(credentials);
            GenerateResponseBody.sendResponse(res, payload);
        }
        catch (err) {
            GenerateResponseBody.sendResponse(res, {
                code: ResponseCodes.BAD_REQUEST,
                message: "FATAL_ERROR",
                data: null
            });
        }
    });

export default router;