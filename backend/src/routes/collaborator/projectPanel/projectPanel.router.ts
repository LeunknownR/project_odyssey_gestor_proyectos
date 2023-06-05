import { Router } from "express";
import Authentication from "../../../utils/authentication";
import { DBRoles } from "../../../db/enums";
import { ApiPathEndpointsCollaborator } from "../../apiPaths";
import ProjectController from "../../../controllers/projectController/project.controller";
import { GenerateResponseBody } from "../../../utils/response/generateResponseBody";
import {
    parseToGetProjectPanelDetailRequestBody
} from "./parsers";
import { withErrorHandler } from "../../helpers";
import {
    GetProjectPanelDetailRequestBody
} from "./types";
import { ResponseCodes, ResponseMessages } from "../../../utils/response/enums";
import { ProjectPanelDetails } from "../../../entities/project/entities";

const router = Router();
router.use("/", Authentication.checkTokenInEndpoints(DBRoles.Collaborator));
router.get(ApiPathEndpointsCollaborator.GetProjectPanelDetail,
    withErrorHandler(async (req, res) => {
        const getProjectPanelDetailRequestBody: GetProjectPanelDetailRequestBody = parseToGetProjectPanelDetailRequestBody(req.params);
        const projectTableDetail: ProjectPanelDetails = await ProjectController.getProjectPanelDetail(getProjectPanelDetailRequestBody);
        GenerateResponseBody.sendResponse<ProjectPanelDetails>(res, {
            code: ResponseCodes.Ok,
            message: ResponseMessages.Success,
            data: projectTableDetail
        });
    }));

export default router;