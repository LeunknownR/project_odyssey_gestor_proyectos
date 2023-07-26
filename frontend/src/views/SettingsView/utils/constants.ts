import { RESPONSE_REQUEST_CUSTOMERS } from "src/services/collaboratorConfig/constants";
import { CollaboratorFilters } from "../types";

export const INITIAL_COLLABORATOR_FILTERS: CollaboratorFilters = {
    searchedCollaborator: "",
};
export const FORM_VALIDATIONS: any = {
    collaboratorPassword: {
        regex: /^(?=.*[a-zñáéíóú])(?=.*[A-ZÑÁÉÍÓÚ])(?=.*\\d).+$/,
        text: "Mínimo 8 caracteres",
    },
};
export const ERROR_TEXTS_AFTER_REQUEST = {
    [RESPONSE_REQUEST_CUSTOMERS.EMAIL_ALREADY_EXISTS]: {
        field: "collaboratorEmail",
        text: "Correo ya existente",
    },
    [RESPONSE_REQUEST_CUSTOMERS.USERNAME_ALREADY_EXISTS]: {
        field: "collaboratorUsername",
        text: "Usuario ya existente",
    },
};