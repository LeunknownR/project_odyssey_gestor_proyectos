import { TextInputTarget } from "src/components/CustomTextField/types";
import { ModalProps } from "src/components/Modal/types";
import { User } from "src/entities/user/types";

export type ChangePasswordModalProps = {
    modalProps: ModalProps;
    currentCollaborator: User | null;
};
export type FirstPartModalProps = {
    verifyPassword: () => void;
    actualPassword: string;
    handlePasswords: ({ target: { name, value } }: TextInputTarget) => void;
};
export type SecondPartModalProps = {
    newPassword: string;
    confirmPassword: string;
    handlePasswords: ({ target: { name, value } }: TextInputTarget) => void;
}
export type PasswordFieldProps = {
    actualPassword: string;
    newPassword: string;
    confirmPassword: string;
};
