export type TokenPayload = {
    username: string,
    roleId: string
};
export type ResponseBody = {
    code: number,
    message?: string,
    data?: any
};