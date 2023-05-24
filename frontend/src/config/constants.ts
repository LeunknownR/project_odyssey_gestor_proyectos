import { getBackendDevHost, getBackendProdHost } from "./helpers";

export const IS_PRODUCTION: boolean = process.env.NODE_ENV === "production";
// export const BACKEND_HOSTNAME: string = IS_PRODUCTION ? getBackendProdHost() : getBackendDevHost();
// export const HOST_HTTP = `${window.location.protocol}//${BACKEND_HOSTNAME}`;
