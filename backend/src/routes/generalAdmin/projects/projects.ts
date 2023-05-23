import { Router } from "express";
import Authentication from "../../../utils/authentication";
import { DBRoles } from "../../../db/enums";
import { ApiPathEndpointsGeneralAdmin } from "../../apiPaths";
import { GenerateResponseBody } from "../../../utils/response/generateResponseBody";
import ProjectController from "../../../controllers/projectController/projectController";
import { 
    parseToCreateProjectRequestBody, 
    parseToDeleteProjectRequestBody, 
    parseToProjectName, 
    parseToProjectFormToUpdate } from "./parsers";
import { parseToCollaboratorName } from "../../collaborator/projects/parsers";
import { withErrorHandler } from "../../helpers";
import { CreateProjectRequestBody, DeleteProjectRequestBody } from "./types";
import { GroupedProjectList, ProjectForm } from "../../../entities/project/types";
import { CollaboratorUser } from "../../../entities/collaborator/types";
import { ResponseCodes, ResponseMessages, getResponseCodeIfMessageExists } from "../../../utils/response/enums";

const router = Router();
router.use("/", Authentication.checkTokenInEndpoints(DBRoles.GeneralAdmin));
router.get(
    ApiPathEndpointsGeneralAdmin.GetProjectListByGeneralAdmin, 
    withErrorHandler(async (req, res) => {
        const projectName: string = parseToProjectName(req.params);
        const groupedProjectList: GroupedProjectList = await ProjectController.getProjectListByGeneralAdmin(projectName);
        GenerateResponseBody.sendResponse<GroupedProjectList>(res, {
            code: ResponseCodes.Ok,
            message: ResponseMessages.Success,
            data: groupedProjectList,
        });
    })); 
router.get(
    ApiPathEndpointsGeneralAdmin.SearchCollaborator,
    withErrorHandler(async (req, res) => {
        const username: string = parseToCollaboratorName(req.params);
        const collaboratorUserList: CollaboratorUser[] = await ProjectController.searchCollaboratorByUsername(username);
        GenerateResponseBody.sendResponse<CollaboratorUser[]>(res, {
            code: ResponseCodes.Ok,
            message: ResponseMessages.Success,
            data: collaboratorUserList
        });
    }));
router.post(
    ApiPathEndpointsGeneralAdmin.CreateProject,
    withErrorHandler(async (req, res) => {
        const createProjectRequestBody: CreateProjectRequestBody = parseToCreateProjectRequestBody(req.body);
        const message: string = await ProjectController.createProject(createProjectRequestBody);
        GenerateResponseBody.sendResponse<null>(res, {
            code: getResponseCodeIfMessageExists(message),
            message,
            data: null
        });
    }));
router.put(
    ApiPathEndpointsGeneralAdmin.UpdateProject,
    withErrorHandler(async (req, res) => {
        const updateProjectRequestBody: ProjectForm = parseToProjectFormToUpdate(req.body);
        const message: string = await ProjectController.updateProject(updateProjectRequestBody);
        GenerateResponseBody.sendResponse<null>(res, {
            code: getResponseCodeIfMessageExists(message),
            message,
            data: null
        });
    }));
router.delete(
    ApiPathEndpointsGeneralAdmin.DeleteProject,
    withErrorHandler(async (req, res) => {
        const deleteProjectRequestBody: DeleteProjectRequestBody = parseToDeleteProjectRequestBody(req.body);
        const message: string = await ProjectController.deleteProject(deleteProjectRequestBody);
        GenerateResponseBody.sendResponse<null>(res, {
            code: getResponseCodeIfMessageExists(message),
            message,
            data: null
        });
    }));

export default router;