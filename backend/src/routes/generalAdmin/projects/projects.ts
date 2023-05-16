import { Router } from "express";
import Authentication from "../../../utils/authentication";
import { DBRoles } from "../../../db/enums";
import { ApiPathEndpointsGeneralAdmin } from "../../apiPaths";
import { GenerateResponseBody } from "../../../utils/generateResponseBody";
import ProjectController from "../../../controllers/projectController/projectController";
import { ResponseBody } from "../../../utils/types";
import { 
    parseToCreateProjectRequestBody, 
    parseToDeleteProjectRequestBody, 
    parseToProjectName, 
    parseToProjectFormToUpdate } from "./parsers";
import { parseToCollaboratorName } from "../../collaborator/projects/parsers";
import { withErrorHandler } from "../../helpers";
import { CreateProjectRequestBody, DeleteProjectRequestBody } from "./types";
import { ProjectForm } from "../../../entities/project/types";

const router = Router();
router.use("/", Authentication.checkTokenInEndpoints(DBRoles.GeneralAdmin));
router.get(
    ApiPathEndpointsGeneralAdmin.GetProjectListByGeneralAdmin, 
    withErrorHandler(async (req, res) => {
        const projectName: string = parseToProjectName(req.params);
        const payload: ResponseBody = await ProjectController.getProjectListByGeneralAdmin(projectName);
        GenerateResponseBody.sendResponse(res, payload);
    })); 
router.get(
    ApiPathEndpointsGeneralAdmin.SearchCollaborator,
    withErrorHandler(async (req, res) => {
        const username: string = parseToCollaboratorName(req.params);
        const payload: ResponseBody = await ProjectController.searchCollaboratorByUsername(username);
        GenerateResponseBody.sendResponse(res, payload);
    }));
router.post(
    ApiPathEndpointsGeneralAdmin.CreateProject,
    withErrorHandler(async (req, res) => {
        const createProjectRequestBody: CreateProjectRequestBody = parseToCreateProjectRequestBody(req.body);
        const payload: ResponseBody = await ProjectController.createProject(createProjectRequestBody);
        GenerateResponseBody.sendResponse(res, payload);
    }));
router.put(
    ApiPathEndpointsGeneralAdmin.UpdateProject,
    withErrorHandler(async (req, res) => {
        const updateProjectRequestBody: ProjectForm = parseToProjectFormToUpdate(req.body);
        const payload: ResponseBody = await ProjectController.updateProject(updateProjectRequestBody);
        GenerateResponseBody.sendResponse(res, payload);
    }));
router.delete(
    ApiPathEndpointsGeneralAdmin.DeleteProject,
    withErrorHandler(async (req, res) => {
        const deleteProjectRequestBody: DeleteProjectRequestBody = parseToDeleteProjectRequestBody(req.body);
        const payload: ResponseBody = await ProjectController.deleteProject(deleteProjectRequestBody);
        GenerateResponseBody.sendResponse(res, payload);
    }));

export default router;