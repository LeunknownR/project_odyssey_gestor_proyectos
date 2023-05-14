import { Router } from "express";
import Authentication from "../../../utils/authentication";
import { DBRoles } from "../../../db/enums";
import { ApiPathEndpointsCollaborator } from "../../apiPaths";
import { ResponseBody } from "../../../utils/types";
import ProjectController from "../../../controllers/projectController/projectController";
import { GenerateResponseBody } from "../../../utils/generateResponseBody";
import { parseToAddCollaboratorsInProjectRequestBody, parseToCollaboratorName, parseToProjectId, parseToUpdateEndDateProjectRequestBody } from "./parsers";
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
    const projectId = parseToProjectId(req.params);
    const collaboratorName = parseToCollaboratorName(req.params);
    const payload: ResponseBody = await ProjectController.SearchCollaboratorsMembersByLeader(projectId,collaboratorName );
    GenerateResponseBody.sendResponse(res, payload);
});
router.patch(ApiPathEndpointsCollaborator.AddCollaboratorsInProject, async (req, res) => {
    const addCollaboratorsInProject = parseToAddCollaboratorsInProjectRequestBody(req.body);
    const payload: ResponseBody = await ProjectController.AddCollaboratorsInProject(addCollaboratorsInProject);
    GenerateResponseBody.sendResponse(res, payload);
});