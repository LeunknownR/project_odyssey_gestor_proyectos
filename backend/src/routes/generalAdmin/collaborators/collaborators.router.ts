import { Router } from "express";
import Authentication from "../../../utils/authentication";
import { DBRoles } from "../../../db/enums";
import { ApiPathEndpointsGeneralAdmin } from "../../apiPaths";
import { withErrorHandler } from "../../helpers";
import { GenerateResponseBody } from "../../../utils/response/generateResponseBody";
import { ResponseCodes, ResponseMessages, getResponseCodeIfMessageExists } from "../../../utils/response/enums";
import { User } from "../../../entities/user/User";
import CollaboratorController from "../../../controllers/collaboratorController/collaborator.controller";
import SearchedCollaboratorPayload from "./utils/entities/SearchedCollaboratorPayload";
import BasicCollaboratorUser from "../../../entities/collaborator/BasicCollaboratorUser";
import { parseToCollaboratorName } from "../projects/parsers";
import { PaginableList } from "../../../utils/types";
import { CollaboratorCreationForm, CollaboratorDeletedForm, CollaboratorUpdatingForm } from "./utils/entities/CollaboratorForm";

const router = Router();
router.use("/", Authentication.checkTokenInEndpoints(DBRoles.GeneralAdmin));
router.get(
    ApiPathEndpointsGeneralAdmin.SearchCollaborator,
    withErrorHandler(async (req, res) => {
        const username: string = parseToCollaboratorName(req.params);
        const collaboratorUserList: BasicCollaboratorUser[] = await CollaboratorController.searchCollaborator(username);
        GenerateResponseBody.sendResponse<BasicCollaboratorUser[]>(res, {
            code: ResponseCodes.Ok,
            message: ResponseMessages.Success,
            data: collaboratorUserList
        });
    })
);
router.get(
    ApiPathEndpointsGeneralAdmin.GetCollaborators,
    withErrorHandler(async (req, res) => {
        const searchedCollaboratorPayload: SearchedCollaboratorPayload = new SearchedCollaboratorPayload(req.body);
        const paginableCollaboratorList = await CollaboratorController.getCollaboratorList(searchedCollaboratorPayload);
        GenerateResponseBody.sendResponse<PaginableList<User>>(res, {
            code: ResponseCodes.Ok,
            data: paginableCollaboratorList,
            message: ResponseMessages.Success
        });
    })
);
router.post(
    ApiPathEndpointsGeneralAdmin.CreateCollaborator,
    withErrorHandler(async (req, res) => {
        const form: CollaboratorCreationForm = new CollaboratorCreationForm(req.body);
        const message: string = await CollaboratorController.createCollaborator(form);
        GenerateResponseBody.sendResponse(res, {
            code: getResponseCodeIfMessageExists(message, ResponseCodes.BadRequest),
            data: null,
            message
        });
    })
);
router.put(
    ApiPathEndpointsGeneralAdmin.UpdateCollaborator,
    withErrorHandler(async (req, res) => {
        const form: CollaboratorUpdatingForm = new CollaboratorUpdatingForm(req.body);
        const message: string = await CollaboratorController.updateCollaborator(form);
        GenerateResponseBody.sendResponse(res, {
            code: getResponseCodeIfMessageExists(message, ResponseCodes.BadRequest),
            data: null,
            message
        });
    })
);
router.delete(
    ApiPathEndpointsGeneralAdmin.DeleteCollaborator,
    withErrorHandler(async (req, res) => {
        const deleteCollaboratorById: CollaboratorDeletedForm =  new CollaboratorDeletedForm(req.params);
        const message: string = await CollaboratorController.deleteCollaborator(deleteCollaboratorById);
        GenerateResponseBody.sendResponse(res, {
            code: getResponseCodeIfMessageExists(message, ResponseCodes.BadRequest),
            data: null,
            message
        });
    })
);

export default router;