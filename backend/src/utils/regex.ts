
export const REG_EXP_EMAIL: RegExp = new RegExp("^[A-Za-z0-9_]+(\.[A-Za-z0-9_]+)*@[A-Za-z0-9_]+\.[A-Za-z0-9_]+(\.[A-Za-z0-9_]+)*$");
export const REG_EXP_USERNAME: RegExp = new RegExp("^[a-z0-9_]+$");
export const REG_EXP_PASSWORD: RegExp = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$");