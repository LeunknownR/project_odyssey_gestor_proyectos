import { RESPONSE_REQUEST_CUSTOMERS } from "src/services/collaboratorConfig/constants";
import { CollaboratorFilters } from "../types";

export const INITIAL_COLLABORATOR_FILTERS: CollaboratorFilters = {
    searchedCollaborator: "",
};
export const FORM_VALIDATIONS: any = {
    collaboratorEmail: {
        regex: /^[A-Za-z0-9_]+(\.[A-Za-z0-9_]+)*@[A-Za-z0-9_]+\.[A-Za-z0-9_]+(\.[A-Za-z0-9_]+)*$/,
        text: "Ingresa un email válido",
    },
    collaboratorUsername: {
        regex: /^[^\s]{3,24}$/,
        text: "Mínimo 3 caracteres",
    },
    collaboratorPassword: {
        regex: /^[^\s]{8,24}$/,
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
