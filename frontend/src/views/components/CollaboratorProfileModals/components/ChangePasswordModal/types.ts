import { ModalProps } from "src/components/Modal/types";
import { SessionUser } from "src/entities/user/types";

export type ChangePasswordModalProps = {
    modalProps: ModalProps;
    currentCollaborator: SessionUser | null;
};

export type PasswordFieldProps = {
    actualPassword: string;
    newPassword: string;
    confirmPassword: string;
};
export type PasswordFieldDisableProps = {
    actualPassword: boolean;
    newPassword: boolean;
    confirmPassword: boolean;
    verifyButton: boolean;
    [key:string]: boolean;
};
