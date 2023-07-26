import { CollaboratorForm } from "../types";

export const TEXT_FIELD_PROPS = {
    COLLABORATOR_NAME: {
        label: "Nombres",
        placeholder: "Ejm: Joel Valentino",
        name: "collaboratorName",
        variant: "primary",
        maxLength: 50,
    },
    COLLABORATOR_SURNAME: {
        label: "Apellidos",
        placeholder: "Ejm: Kagasawa",
        name: "collaboratorSurname",
        variant: "primary",
        maxLength: 50,
    },
    COLLABORATOR_EMAIL: {
        label: "Correo electrónico",
        placeholder: "Ejm: example@gmail.com",
        name: "collaboratorEmail",
        variant: "primary",
        maxLength: 50,
    },
    COLLABORATOR_USER: {
        label: "Usuario",
        placeholder: "ralfc",
        name: "collaboratorUsername",
        variant: "primary",
        maxLength: 24,
    },
    COLLABORATOR_PASSWORD: {
        label: "Contraseña",
        name: "collaboratorPassword",
        variant: "primary",
        maxLength: 24,
        type: "password",
    },
    COLLABORATOR_CHANGE_PASSWORD: {
        label: "Cambiar contraseña",
        name: "toChangeCollaboratorPassword"
    }
};

export const INITIAL_COLLABORATOR_FORM: CollaboratorForm = {
    id: 0,
    collaboratorName: "",
    collaboratorSurname: "",
    collaboratorEmail: "",
    collaboratorUsername: "",
    collaboratorPassword: "",
    collaboratorUrlPhoto: null,
    collaboratorPhotoB64: null,
    collaboratorChangePhoto: false,
    toChangeCollaboratorPassword: true,
};
export const INITIAL_ERRORS = {
    collaboratorName: null,
    collaboratorSurname: null,
    collaboratorEmail: null,
    collaboratorUsername: null,
    collaboratorPassword: null,
    collaboratorPhoto: null,
}
export const DELETE_COLLABORATOR_APPEARANCE = {
    title: "COLABORADOR ELIMINADO",
    subtitle: "El colaborador ha sido eliminado correctamente",
    color: "var(--red-3)",
}