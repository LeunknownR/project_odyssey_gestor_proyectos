import { Router } from "express";
import Authentication from "../../../utils/authentication";
import { DBRoles } from "../../../db/enums";
import { ApiPathEndpointsCollaborator } from "../../apiPaths";
import { ResponseBody } from "../../../utils/types";
import ProjectController from "../../../controllers/projectController/projectController";
import { GenerateResponseBody } from "../../../utils/generateResponseBody";
import { parseToAddProjectMembersRequestBody, parseToCollaboratorName, parseToProjectId, parseToSearchCollaboratorRequestBody, parseToUpdateEndDateProjectRequestBody } from "./parsers";
import { parseToProjectName } from "../../generalAdmin/projects/parsers";

const router = Router();
router.use("/", Authentication.checkTokenInEndpoints(DBRoles.Collaborator));
router.get(ApiPathEndpointsCollaborator.GetProjectListForCollaborator, async (req, res) => {
    const projectName = parseToProjectName(req.params);
    const payload: ResponseBody = await ProjectController.getProjectListForCollaborator(projectName);
    GenerateResponseBody.sendResponse(res, payload);
});
router.patch(ApiPathEndpointsCollaborator.UpdateEndDateProject, async (req, res) => {
    const updateEndDateProjectRequestBody = parseToUpdateEndDateProjectRequestBody(req.body);
    const payload: ResponseBody = await ProjectController.updateEndDateProjectByLeader(updateEndDateProjectRequestBody);
    GenerateResponseBody.sendResponse(res, payload);
});
router.get(ApiPathEndpointsCollaborator.SearchCollaboratorMember, async (req, res) => {
    const searchCollaboratorRequestBody = parseToSearchCollaboratorRequestBody(req.params)
    const payload: ResponseBody = await ProjectController.searchCollaboratorsMembersByLeader(searchCollaboratorRequestBody);
    GenerateResponseBody.sendResponse(res, payload);
});
router.patch(ApiPathEndpointsCollaborator.AddProjectMembers, async (req, res) => {
    const addCollaboratorsInProject = parseToAddProjectMembersRequestBody(req.body);
    const payload: ResponseBody = await ProjectController.addProjectMembers(addCollaboratorsInProject);
    GenerateResponseBody.sendResponse(res, payload);
});