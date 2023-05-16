import { Router } from "express";
import Authentication from "../../../utils/authentication";
import { DBRoles } from "../../../db/enums";
import { ApiPathEndpointsCollaborator } from "../../apiPaths";
import { ResponseBody } from "../../../utils/types";
import ProjectController from "../../../controllers/projectController/projectController";
import { GenerateResponseBody } from "../../../utils/generateResponseBody";
import { parseToAddProjectMembersRequestBody, parseToSearchCollaboratorRequestBody, parseToUpdateEndDateProjectRequestBody } from "./parsers";
import { parseToProjectName } from "../../generalAdmin/projects/parsers";
import { AddProjectMembersRequestBody, SearchCollaboratorRequestBody, UpdateEndDateProjectRequestBody } from "../../../entities/project/types";
import { withErrorHandler } from "../../helpers";

const router = Router();
router.use("/", Authentication.checkTokenInEndpoints(DBRoles.Collaborator));
router.get(ApiPathEndpointsCollaborator.GetProjectListForCollaborator,
    withErrorHandler(async (req, res) => {
        const projectName: string = parseToProjectName(req.params);
        const payload: ResponseBody = await ProjectController.getProjectListForCollaborator(projectName);
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

export default router;