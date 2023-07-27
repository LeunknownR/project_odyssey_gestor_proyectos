import { TextInputTarget } from "src/components/CustomTextField/types";
import { PasswordFieldDisableProps } from "../../types";

export type FirstPartModalProps = {
    verifyPassword: () => void;
    actualPassword: string;
    handlePasswords: ({ target: { name, value } }: TextInputTarget) => void;
    passwordFieldDisable: PasswordFieldDisableProps;
    passwordFieldError: string | null;
};