import { Router } from "express";
import Authentication from "../../../utils/authentication";
import { DBRoles } from "../../../db/enums";
import { ApiPathEndpointsGeneralAdmin } from "../../apiPaths";
import { GenerateResponseBody } from "../../../utils/generateResponseBody";
import ProjectController from "../../../controllers/projectController/projectController";
import { ResponseBody } from "../../../utils/types";
import { parseToCreateProjectRequestBody, parseToProjectName } from "./parsers";

const router = Router();
router.use("/", Authentication.checkTokenInEndpoints(DBRoles.GeneralAdmin));
router.get(ApiPathEndpointsGeneralAdmin.GetProjectList, async (req, res) => {
    try {
        const projectName = parseToProjectName(req.params);
        const payload: ResponseBody = await ProjectController.getProjectList(projectName);
        GenerateResponseBody.sendResponse(res, payload);
    }
    catch (err) {
        console.log(err);
        GenerateResponseBody.sendResponse(res, GenerateResponseBody.FATAL_ERROR_RESPONSE);
    }
});
router.post(ApiPathEndpointsGeneralAdmin.CreateProject, async (req, res) => {
    try {
        const createProjectRequestBody = parseToCreateProjectRequestBody(req.params);
        const payload: ResponseBody = await ProjectController.createProject(createProjectRequestBody);
        GenerateResponseBody.sendResponse(res, payload);
    }
    catch (err) {
        console.log(err);
        GenerateResponseBody.sendResponse(res, GenerateResponseBody.FATAL_ERROR_RESPONSE);
    }
});