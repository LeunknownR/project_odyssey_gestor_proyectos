import { DBRoles } from "../../db/enums";
import Authentication from "../../utils/authentication";

export const checkWSCollaboratorToken = Authentication.checkTokenInWSService(DBRoles.Collaborator);