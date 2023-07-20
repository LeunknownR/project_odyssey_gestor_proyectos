import { Router } from "express";
import Authentication from "../../../utils/authentication";
import { DBRoles } from "../../../db/enums";
import { ApiPathEndpointsCollaborator } from "../../apiPaths";
import { withErrorHandler } from "../../helpers";
import UpdateCollaboratorPhotoPayload from "./utils/entities/UpdateCollaboratorPhotoPayload";
import { GenerateResponseBody } from "../../../utils/response/generateResponseBody";
import { ResponseCodes, ResponseMessages } from "../../../utils/response/enums";
import CollaboratorController from "../../../controllers/collaboratorController/collaborator.controller";

const router = Router();
router.use("/", Authentication.checkTokenInEndpoints(DBRoles.Collaborator));
router.get(ApiPathEndpointsCollaborator.UpdatePhoto,
    withErrorHandler(async (req, res) => {
        const payload: UpdateCollaboratorPhotoPayload = new UpdateCollaboratorPhotoPayload(req.body);
        const newUrlPhoto: string = await CollaboratorController.updateCollaboratorPhoto(payload);
        GenerateResponseBody.sendResponse<string>(res, {
            code: ResponseCodes.Ok,
            data: newUrlPhoto, 
            message: ResponseMessages.Success
        });
    })
);

export default router;