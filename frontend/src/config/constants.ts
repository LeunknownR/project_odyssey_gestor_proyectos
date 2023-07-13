import { getBackendDevHost, getBackendProdHost } from "./host";

export const MOBILE_WIDTH: number = 600;
export const IS_PRODUCTION: boolean = process.env.NODE_ENV === "production";
export const BACKEND_HOSTNAME: string = IS_PRODUCTION 
    ? getBackendProdHost() : getBackendDevHost();
export const HOST_HTTP = `${window.location.protocol}//${BACKEND_HOSTNAME}`;
export const HOST_WS = `${window.location.protocol.startsWith("https") ? "wss" : "ws"}://${BACKEND_HOSTNAME}`;