export const APP_CONFIG = {
    IS_PRODUCTION: false,
    FRONTEND_DIR: ""
};
export const initAppConfig = (): void => {
    APP_CONFIG.IS_PRODUCTION = process.env.NODE_ENV === "production";
    APP_CONFIG.FRONTEND_DIR = APP_CONFIG.IS_PRODUCTION ? "../frontend" : "../../frontend/dist";
};