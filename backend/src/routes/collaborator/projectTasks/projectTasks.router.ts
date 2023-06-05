import { Router } from "express";
import Authentication from "../../../utils/authentication";
import { DBRoles } from "../../../db/enums";
import { ApiPathEndpointsCollaborator } from "../../apiPaths";
import { GenerateResponseBody } from "../../../utils/response/generateResponseBody";
import { withErrorHandler } from "../../helpers";
import { ResponseCodes, ResponseMessages } from "../../../utils/response/enums";
import { ProjectTaskPriority } from "../../../entities/projectTasks/entities";
import ProjectTasksController from "../../../controllers/projectTaskController/projectTasks.controller";

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

export default router;