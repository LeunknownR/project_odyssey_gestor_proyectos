import { Router } from "express";
import Authentication from "../../../utils/authentication";
import { DBRoles } from "../../../db/enums";
import { ApiPathEndpointsCollaborator, ApiPathEndpointsGeneralAdmin } from "../../apiPaths";
import { GenerateResponseBody } from "../../../utils/generateResponseBody";
import ProjectController from "../../../controllers/projectController/projectController";
import { ResponseBody } from "../../../utils/types";
import { parseToCreateProjectRequestBody, parseToProjectIdToDelete, parseToProjectIdToGetDetails, parseToProjectName, parseToUpdateProjectRequestBody } from "./parsers";
import { parseToCollaboratorName } from "../../collaborator/projects/parsers";
import { withErrorHandler } from "../../helpers";

const router = Router();
router.use("/", Authentication.checkTokenInEndpoints(DBRoles.GeneralAdmin));
router.get(
    ApiPathEndpointsGeneralAdmin.GetProjectListByGeneralAdmin, 
    withErrorHandler(async (req, res) => {
        const projectName = parseToProjectName(req.params);
        const payload: ResponseBody = await ProjectController.getProjectListByGeneralAdmin(projectName);
        GenerateResponseBody.sendResponse(res, payload);
    }));
router.get(
    ApiPathEndpointsGeneralAdmin.SearchCollaborator,
    withErrorHandler(async (req, res) => {
        const username = parseToCollaboratorName(req.params);
        const payload: ResponseBody = await ProjectController.searchCollaboratorByUsername(username);
        GenerateResponseBody.sendResponse(res, payload);
    }));
router.post(
    ApiPathEndpointsGeneralAdmin.CreateProject,
    withErrorHandler(async (req, res) => {
        const createProjectRequestBody = parseToCreateProjectRequestBody(req.body);
        const payload: ResponseBody = await ProjectController.createProject(createProjectRequestBody);
        GenerateResponseBody.sendResponse(res, payload);
    }));
router.put(
    ApiPathEndpointsGeneralAdmin.UpdateProject,
    withErrorHandler(async (req, res) => {
        const updateProjectRequestBody = parseToUpdateProjectRequestBody(req.body);
        const payload: ResponseBody = await ProjectController.updateProject(updateProjectRequestBody);
        GenerateResponseBody.sendResponse(res, payload);
    }));
router.delete(
    ApiPathEndpointsGeneralAdmin.DeleteProject,
    withErrorHandler(async (req, res) => {
        const projectId = parseToProjectIdToDelete(req.params);
        const payload: ResponseBody = await ProjectController.deleteProject(projectId);
        GenerateResponseBody.sendResponse(res, payload);
    }));
router.get(
    ApiPathEndpointsCollaborator.GetProjectDetails,
    withErrorHandler(async (req, res) => {
        const projectId = parseToProjectIdToGetDetails(req.params);
        const payload: ResponseBody = await ProjectController.getProjectDetails(projectId);
        GenerateResponseBody.sendResponse(res, payload);
    }));

export default router;