import { Router } from "express";
import Authentication from "../../../utils/authentication";
import { DBRoles } from "../../../db/enums";
import { ApiPathEndpointsCollaborator } from "../../apiPaths";
import { ResponseBody } from "../../../utils/types";
import ProjectController from "../../../controllers/projectController/projectController";
import { GenerateResponseBody } from "../../../utils/generateResponseBody";
import { parseToUpdateEndDateProjectRequestBody } from "./parsers";
import { parseToName } from "../../generalAdmin/projects/parsers";

const router = Router();
router.use("/", Authentication.checkTokenInEndpoints(DBRoles.Collaborator));
router.get(ApiPathEndpointsCollaborator.GetProjectList, async (req, res) => {
    try {
        const collaboratorName = parseToName(req.params);
        const payload: ResponseBody = await ProjectController.getProjectListByCollaborator(collaboratorName);
        GenerateResponseBody.sendResponse(res, payload);
    }
    catch (err) {
        console.log(err);
        GenerateResponseBody.sendResponse(res, GenerateResponseBody.FATAL_ERROR_RESPONSE);
    }
});
router.patch(ApiPathEndpointsCollaborator.UpdateEndDateProject, async (req, res) => {
    try {
        const updateEndDateProjectRequestBody = parseToUpdateEndDateProjectRequestBody(req.params);
        const payload: ResponseBody = await ProjectController.updateEndDateProjectByLeader(updateEndDateProjectRequestBody);
        GenerateResponseBody.sendResponse(res, payload);
    }
    catch (err) {
        console.log(err);
        GenerateResponseBody.sendResponse(res, GenerateResponseBody.FATAL_ERROR_RESPONSE);
    }
});