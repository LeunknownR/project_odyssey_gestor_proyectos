import { Router } from "express";
import Authentication from "../../../utils/authentication";
import { DBRoles } from "../../../db/enums";
import { ApiPathEndpointsCollaborator } from "../../apiPaths";
import { ResponseBody } from "../../../utils/types";
import ProjectController from "../../../controllers/projectController/projectController";
import { GenerateResponseBody } from "../../../utils/response/generateResponseBody";
import {
    parseToAddProjectMembersRequestBody,
    parseToDeleteProjectMemberRequestBody,
    parseToGetProjectListForCollaboratorRequestBody,
    parseToProjectIdToGetDetails,
    parseToSearchCollaboratorRequestBody,
    parseToUpdateEndDateProjectRequestBody
} from "./parsers";
import {
    AddProjectMembersRequestBody,
    DeleteProjectMemberRequestBody,
    GroupedProjectListForCollaborator,
    ProjectDetails,
    SearchCollaboratorRequestBody,
    UpdateEndDateProjectRequestBody
} from "../../../entities/project/types";
import { withErrorHandler } from "../../helpers";
import { GetProjectListForCollaboratorRequestBody } from "./types";
import { ResponseCodes, ResponseMessages, getResponseCodeIfMessageExists } from "../../../utils/response/enums";
import { CollaboratorUser } from "../../../entities/collaborator/types";

const router = Router();
router.use("/", Authentication.checkTokenInEndpoints(DBRoles.Collaborator));
router.get(ApiPathEndpointsCollaborator.GetProjectListForCollaborator,
    withErrorHandler(async (req, res) => {
        const getProjectListForCollaboratorRequestBody: GetProjectListForCollaboratorRequestBody = parseToGetProjectListForCollaboratorRequestBody(req.params);
        const groupedProjectListForCollaborator: GroupedProjectListForCollaborator = await ProjectController.getProjectListForCollaborator(getProjectListForCollaboratorRequestBody);
        GenerateResponseBody.sendResponse<GroupedProjectListForCollaborator>(res, {
            code: ResponseCodes.Ok,
            message: ResponseMessages.Success,
            data: groupedProjectListForCollaborator,
        });
    }));
router.patch(ApiPathEndpointsCollaborator.UpdateEndDateProject,
    withErrorHandler(async (req, res) => {
        const updateEndDateProjectRequestBody: UpdateEndDateProjectRequestBody = parseToUpdateEndDateProjectRequestBody(req.body);
        const message: string = await ProjectController.updateEndDateProjectByLeader(updateEndDateProjectRequestBody);
        GenerateResponseBody.sendResponse<null>(res, {
            code: getResponseCodeIfMessageExists(message),
            message,
            data: null
        });
    }));
router.get(ApiPathEndpointsCollaborator.SearchCollaboratorMember,
    withErrorHandler(async (req, res) => {
        const searchCollaboratorRequestBody: SearchCollaboratorRequestBody = parseToSearchCollaboratorRequestBody(req.params)
        const collaboratorUserList: CollaboratorUser[] = await ProjectController.searchCollaboratorsMembersByLeader(searchCollaboratorRequestBody);
        GenerateResponseBody.sendResponse<CollaboratorUser[]>(res, {
            code: ResponseCodes.Ok,
            message: ResponseMessages.Success,
            data: collaboratorUserList
        });
    }));
router.patch(ApiPathEndpointsCollaborator.AddProjectMembers,
    withErrorHandler(async (req, res) => {
        const addProjectMembersRequestBody: AddProjectMembersRequestBody = parseToAddProjectMembersRequestBody(req.body);
        const message: string = await ProjectController.addProjectMembers(addProjectMembersRequestBody);
        GenerateResponseBody.sendResponse<null>(res, {
            code: getResponseCodeIfMessageExists(message),
            message,
            data: null
        });
    }));
router.get(
    ApiPathEndpointsCollaborator.DeleteProjectMember,
    withErrorHandler(async (req, res) => {
        const deleteProjectMemberRequestBody: DeleteProjectMemberRequestBody = parseToDeleteProjectMemberRequestBody(req.params);
        const message: string = await ProjectController.deleteProjectMember(deleteProjectMemberRequestBody);
        GenerateResponseBody.sendResponse<null>(res, {
            code: getResponseCodeIfMessageExists(message),
            message,
            data: null
        });
    }));
router.get(
    ApiPathEndpointsCollaborator.GetProjectDetails,
    withErrorHandler(async (req, res) => {
        const projectId: number = parseToProjectIdToGetDetails(req.params);
        const projectDetails: ProjectDetails = await ProjectController.getProjectDetails(projectId);
        GenerateResponseBody.sendResponse<ProjectDetails>(res, {
            code: ResponseCodes.Ok,
            message: ResponseMessages.Success,
            data: projectDetails
        });
    }));

export default router;