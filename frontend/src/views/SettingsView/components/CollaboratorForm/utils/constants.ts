import { CollaboratorForm } from "../types";

export const TEXT_FIELD_PROPS = {
    COLLABORATOR_NAME: {
        label: "Nombres",
        placeholder: "Ejm: Joel Valentino",
        name: "name",
        variant: "primary",
    },
    COLLABORATOR_SURNAME: {
        label: "Apellidos",
        placeholder: "Ejm: Kagasawa",
        name: "surname",
        variant: "primary",
    },
    COLLABORATOR_EMAIL: {
        label: "Correo electrónico",
        placeholder: "Ejm: example@gmail.com",
        name: "email",
        variant: "primary",
    },
    COLLABORATOR_USER: {
        label: "Usuario",
        placeholder: "ralfc",
        name: "user",
        variant: "primary",
        width: "60%",
    },
    COLLABORATOR_PASSWORD: {
        label: "Contraseña",
        name: "password",
        variant: "primary",
        maxLength: 24,
        type: "password",
    },
};

export const INITIAL_COLLABORATOR_FORM: CollaboratorForm = {
    id: 0,
    customerName: "",
    customerSurname: "",
    customerEmail: "",
    customerUsername: "",
    customerPassword: "",
    customerPhotoUrl: null,
    customerPhotoB64: null,
    customerChangePhoto: false,
    toChangeCustomerPassword: true,
};