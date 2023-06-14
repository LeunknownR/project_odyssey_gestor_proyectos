import { Router } from "express";
import Authentication from "../../../utils/authentication";
import { DBRoles } from "../../../db/enums";
import { ApiPathEndpointsCollaborator } from "../../apiPaths";
import { GenerateResponseBody } from "../../../utils/response/generateResponseBody";
import { withErrorHandler } from "../../helpers";
import { ResponseCodes, ResponseMessages } from "../../../utils/response/enums";
import { ProjectTaskPriority } from "../../../entities/projectTasks/entities";
import ProjectTasksController from "../../../controllers/projectTaskController/projectTasks.controller";
import { SearchCollaboratorRequestBody } from "../types";
import { parseToSearchCollaboratorRequestBody } from "../parsers";
import { CollaboratorUser } from "../../../entities/collaborator/entities";

const router = Router();
router.use("/", Authentication.checkTokenInEndpoints(DBRoles.Collaborator));
router.get(ApiPathEndpointsCollaborator.GetTaskPriorityList,
    withErrorHandler(async (_, res) => {
        const taskPrioritiesList: ProjectTaskPriority[] = await ProjectTasksController.getTaskPriorityList();
        GenerateResponseBody.sendResponse<ProjectTaskPriority[]>(res, {
            code: ResponseCodes.Ok,
            message: ResponseMessages.Success,
            data: taskPrioritiesList
        });
    }));
router.get(ApiPathEndpointsCollaborator.SearchProjectTeamMember,
    withErrorHandler(async (req, res) => {
        const searchProjectTeamMemberRequestBody: SearchCollaboratorRequestBody = parseToSearchCollaboratorRequestBody(req.params, "Invalid request body to search project team member");
        const projectTeamMemberList: CollaboratorUser[] = await ProjectTasksController.searchProjectTeamMember(searchProjectTeamMemberRequestBody);
        GenerateResponseBody.sendResponse<CollaboratorUser[]>(res, {
            code: ResponseCodes.Ok,
            message: ResponseMessages.Success,
            data: projectTeamMemberList
        });
    }));
    
export default router;