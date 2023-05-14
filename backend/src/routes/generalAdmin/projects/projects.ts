import { Router } from "express";
import Authentication from "../../../utils/authentication";
import { DBRoles } from "../../../db/enums";
import { ApiPathEndpointsGeneralAdmin } from "../../apiPaths";
import { GenerateResponseBody } from "../../../utils/generateResponseBody";
import ProjectController from "../../../controllers/projectController/projectController";
import { ResponseBody } from "../../../utils/types";
import { parseToCollaboratorName } from "../../collaborator/projects/parsers";
import { parseToCreateProjectRequestBody, parseToProjectName, parseToUpdateProjectRequestBody } from "./parsers";

const router = Router();
router.use("/", Authentication.checkTokenInEndpoints(DBRoles.GeneralAdmin));
router.get(ApiPathEndpointsGeneralAdmin.GetProjectListByGeneralAdmin, async (req, res) => {
    try {
        const projectName = parseToProjectName(req.params);
        const payload: ResponseBody = await ProjectController.getProjectListByGeneralAdmin(projectName);
        GenerateResponseBody.sendResponse(res, payload);
    }
    catch (err) {
        console.log(err);
        GenerateResponseBody.sendResponse(res, GenerateResponseBody.FATAL_ERROR_RESPONSE);
    }
});
router.get(ApiPathEndpointsGeneralAdmin.SearchCollaborator, async (req, res) => {
    try {
        const username = parseToCollaboratorName(req.params);
        const payload: ResponseBody = await ProjectController.searchCollaboratorByUsername(username);
        GenerateResponseBody.sendResponse(res, payload);
    }
    catch (err) {
        console.log(err);
        GenerateResponseBody.sendResponse(res, GenerateResponseBody.FATAL_ERROR_RESPONSE);
    }
});
router.post(ApiPathEndpointsGeneralAdmin.CreateProject, async (req, res) => {
    try {
        const createProjectRequestBody = parseToCreateProjectRequestBody(req.body);
        const payload: ResponseBody = await ProjectController.createProject(createProjectRequestBody);
        GenerateResponseBody.sendResponse(res, payload);
    }
    catch (err) {
        console.log(err);
        GenerateResponseBody.sendResponse(res, GenerateResponseBody.FATAL_ERROR_RESPONSE);
    }
});
router.put(ApiPathEndpointsGeneralAdmin.UpdateProject, async (req, res) => {
    try {
        const updateProjectRequestBody = parseToUpdateProjectRequestBody(req.body);
        const payload: ResponseBody = await ProjectController.updateProject(updateProjectRequestBody);
        GenerateResponseBody.sendResponse(res, payload);
    }
    catch (err) {
        console.log(err);
        GenerateResponseBody.sendResponse(res, GenerateResponseBody.FATAL_ERROR_RESPONSE);
    }
});