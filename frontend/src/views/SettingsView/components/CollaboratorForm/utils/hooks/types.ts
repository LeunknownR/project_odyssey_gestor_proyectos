import { User } from "src/entities/user/types";
import { FormCollaboratorTypes } from "../../types";

export type FormCollaboratorHook = {
    form: FormCollaboratorTypes;
    getCollaboratorFromForm: () => User;
    // errors: ErrorsTypes;
};