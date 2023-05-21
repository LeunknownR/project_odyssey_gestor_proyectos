import { ErrorMessagesTypes, LoginFormTypes } from "../types";

export const INITIAL_CREDENTIALS: LoginFormTypes = {
    username: "",
    password: "",
};
export const ERROR_MESSAGES: ErrorMessagesTypes = {
    INVALID_USER: "Las credenciales no coinciden",
    INVALID_PASSWORD: "La contraseña introducida es incorrecta",
    FATAL_ERROR: "Ha ocurrido un error inesperado, inténtalo más tarde"
};
export const CUSTOM_TEXT_FIELD: any = {
    width: "100%",
    maxWidth: "unset",
    maxLength: 100,
    autoComplete: "on" 
};