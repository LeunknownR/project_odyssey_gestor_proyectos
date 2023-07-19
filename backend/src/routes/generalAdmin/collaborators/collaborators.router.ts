import { Router } from "express";
import Authentication from "../../../utils/authentication";
import { DBRoles } from "../../../db/enums";
import { ApiPathEndpointsGeneralAdmin } from "../../apiPaths";
import { withErrorHandler } from "../../helpers";
import { GenerateResponseBody } from "../../../utils/response/generateResponseBody";
import { ResponseCodes, ResponseMessages } from "../../../utils/response/enums";
import { User } from "../../../entities/user/User";
import CollaboratorController from "../../../controllers/collaboratorController/collaborator.controller";
import SearchedCollaboratorPayload from "./utils/entities/SearchedCollaboratorPayload";

const router = Router();
router.use("/", Authentication.checkTokenInEndpoints(DBRoles.GeneralAdmin));
router.get(
    ApiPathEndpointsGeneralAdmin.GetCollaborators, 
    withErrorHandler(async (req, res) => {     
        const searchedCollaboratorPayload: SearchedCollaboratorPayload = new SearchedCollaboratorPayload(req.body);
        const collaboratorList: User[] = await CollaboratorController.getCollaboratorList(searchedCollaboratorPayload);
        GenerateResponseBody.sendResponse<User[]>(res, {
            code: ResponseCodes.Ok,
            message: ResponseMessages.Success,
            data: collaboratorList
        });
    })); 
router.get(
    ApiPathEndpointsGeneralAdmin.CreateCollaborator, 
    withErrorHandler(async (req, res) => {     
        const searchedCollaboratorPayload: SearchedCollaboratorPayload = new SearchedCollaboratorPayload(req.body);
        const collaboratorList: User[] = await CollaboratorController.getCollaboratorList(searchedCollaboratorPayload);
        GenerateResponseBody.sendResponse<User[]>(res, {
            code: ResponseCodes.Ok,
            message: ResponseMessages.Success,
            data: collaboratorList
        });
    })); 