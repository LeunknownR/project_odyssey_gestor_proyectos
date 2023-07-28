import { TextInputTarget } from "src/components/CustomTextField/types";
import { PasswordFieldDisableProps } from "../../types";

export type SecondPartModalProps = {
    newPassword: string;
    confirmPassword: string;
    currentCollaboratorId?: number;
    handlePasswords: ({ target: { name, value } }: TextInputTarget) => void;
    passwordFieldDisable: PasswordFieldDisableProps;
    passwordFieldError: string | null;
    openConfirmationModal: () => void;
}
export type PasswordValidationsTypes = {
    minLength: boolean;
    containsNumber: boolean;
    containsMinus: boolean;
    containsMayus: boolean;
};
export type PasswordConditionsTypes = {
    minLength: number;
    containsNumber: RegExp;
    containsLowercase: RegExp;
    containsUppercase: RegExp;
};