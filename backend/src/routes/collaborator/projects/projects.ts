import { Router } from "express";
import Authentication from "../../../utils/authentication";
import { DBRoles } from "../../../db/enums";
import { ApiPathEndpointsCollaborator } from "../../apiPaths";
import { parseToName } from "../../generalAdmin/projects/parsers";
import { ResponseBody } from "../../../utils/types";
import ProjectController from "../../../controllers/projectController/projectController";
import { GenerateResponseBody } from "../../../utils/generateResponseBody";

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