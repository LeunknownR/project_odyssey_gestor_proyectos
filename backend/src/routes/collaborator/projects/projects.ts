import { Router } from "express";
import Authentication from "../../../utils/authentication";
import { DBRoles } from "../../../db/enums";
import { ApiPathEndpointsCollaborator } from "../../apiPaths";
import { ResponseBody } from "../../../utils/types";
import ProjectController from "../../../controllers/projectController/projectController";
import { GenerateResponseBody } from "../../../utils/generateResponseBody";
import {
    parseToAddProjectMembersRequestBody,
    parseToGetProjectListForCollaboratorRequestBody,
    parseToProjectIdToGetDetails,
    parseToSearchCollaboratorRequestBody,
    parseToUpdateEndDateProjectRequestBody
} from "./parsers";
import {
    AddProjectMembersRequestBody,
    SearchCollaboratorRequestBody,
    UpdateEndDateProjectRequestBody
} from "../../../entities/project/types";
import { withErrorHandler } from "../../helpers";
import { GetProjectListForCollaboratorRequestBody } from "./types";

const router = Router();
router.use("/", Authentication.checkTokenInEndpoints(DBRoles.Collaborator));
router.get(ApiPathEndpointsCollaborator.GetProjectListForCollaborator,
    withErrorHandler(async (req, res) => {
<<<<<<< HEAD
        const projectName: string = parseToProjectName(req.params);
        console.log(projectName)
        const payload: ResponseBody = await ProjectController.getProjectListForCollaborator(projectName);
=======
        const getProjectListForCollaboratorRequestBody: GetProjectListForCollaboratorRequestBody = parseToGetProjectListForCollaboratorRequestBody(req.params);
        const payload: ResponseBody = await ProjectController.getProjectListForCollaborator(getProjectListForCollaboratorRequestBody);
>>>>>>> 39f30bac3a6e0e143642f2aa3c357c16c53d6ef0
        GenerateResponseBody.sendResponse(res, payload);
    }));
router.patch(ApiPathEndpointsCollaborator.UpdateEndDateProject,
    withErrorHandler(async (req, res) => {
        const updateEndDateProjectRequestBody: UpdateEndDateProjectRequestBody = parseToUpdateEndDateProjectRequestBody(req.body);
        const payload: ResponseBody = await ProjectController.updateEndDateProjectByLeader(updateEndDateProjectRequestBody);
        GenerateResponseBody.sendResponse(res, payload);
    }));
router.get(ApiPathEndpointsCollaborator.SearchCollaboratorMember,
    withErrorHandler(async (req, res) => {
        const searchCollaboratorRequestBody: SearchCollaboratorRequestBody = parseToSearchCollaboratorRequestBody(req.params)
        const payload: ResponseBody = await ProjectController.searchCollaboratorsMembersByLeader(searchCollaboratorRequestBody);
        GenerateResponseBody.sendResponse(res, payload);
    }));
router.patch(ApiPathEndpointsCollaborator.AddProjectMembers,
    withErrorHandler(async (req, res) => {
        const addProjectMembersRequestBody: AddProjectMembersRequestBody = parseToAddProjectMembersRequestBody(req.body);
        const payload: ResponseBody = await ProjectController.addProjectMembers(addProjectMembersRequestBody);
        GenerateResponseBody.sendResponse(res, payload);
    }));
router.get(
    ApiPathEndpointsCollaborator.GetProjectDetails,
    withErrorHandler(async (req, res) => {
        const projectId: number = parseToProjectIdToGetDetails(req.params);
        const payload: ResponseBody = await ProjectController.getProjectDetails(projectId);
        GenerateResponseBody.sendResponse(res, payload);
    }));

export default router;