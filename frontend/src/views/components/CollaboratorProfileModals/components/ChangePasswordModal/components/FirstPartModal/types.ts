export type FirstPartModalProps = {
    verifyPassword: () => void;
    actualPassword: string;
    handlePasswords: ({ target: { name, value } }: TextInputTarget) => void;
    passwordFieldDisable: boolean;
    passwordFieldError: string | null;
};