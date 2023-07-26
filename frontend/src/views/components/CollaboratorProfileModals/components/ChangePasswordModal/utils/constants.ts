export const TEXT_FIELD_PROPS = {
    ACTUAL_PASS: {
        label: "Contraseña actual",
        name: "actualPassword",
        variant: "primary",
        maxLength: 24,
        type: "password",
        width: "55%",
    },
    NEW_PASS: {
        label: "Nueva contraseña",
        name: "newPassword",
        variant: "primary",
        maxLength: 24,
        type: "password",
        width: "55%",
    },
    CONFIRM_PASS: {
        label: "Confirmar contraseña",
        name: "confirmPassword",
        variant: "primary",
        maxLength: 24,
        type: "password",
        width: "55%",
    },
};
export const BUTTON_PROPS = {
    VERIFY_PASS: {
        content: "Verificar",
        size: "normal",
        alignSelf: "flex-end",
        icon: "mdi:password-check",
        variant: "main",
    },
    UPDATE_PASS: {
        content: "Actualizar",
        alignSelf: "flex-end",
        variant: "main",
    },
};
export const INIT_PASSWORD_FIELD = {
    actualPassword: "",
    newPassword: "",
    confirmPassword: "",
};
export const INIT_PASSWORD_FIELD_DISABLE = {
    actualPassword: false,
    newPassword: true,
    confirmPassword: true,
};
export const INIT_PASSWORD_FIELD_ERRORS = {
    actualPassword: null,
    newPassword: null,
    confirmPassword: null,
};
export const INVALID_PASSWORD = "Contraseña inválida";
