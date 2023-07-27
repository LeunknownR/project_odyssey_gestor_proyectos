import { PasswordConditionsTypes, PasswordValidationsTypes } from "../types";

export const INITIAL_PASSWORD_VALIDATIONS: PasswordValidationsTypes = {
    minLength: false,
    containsNumber: false,
    containsMinus: false,
    containsMayus: false,
};
export const PASSWORD_CONDITIONS: PasswordConditionsTypes = {
    minLength: 8,
    containsNumber: /\d/,
    containsLowercase: /[a-z]/,
    containsUppercase: /[A-Z]/,
};