export type LoginFormTypes = {
    username: string;
    password: string;
};
export type ErrorMessagesTypes = {
    INVALID_USER: string;
    INVALID_PASSWORD: string;
    FATAL_ERROR: string;
    [key:string]: any;
};
