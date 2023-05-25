// import { HOST_HTTP } from "./constants";

export const getBackendProdHost = (): string => {
    return window.location.host;
}
export const getBackendDevHost = (): string => {
    const { 
        VITE_API_URL
    } = process.env;
    return `${VITE_API_URL}`;
}
// export const getUrlImage = (path: string | null): string | null => {
//     return path ? `${HOST_HTTP}${path}` : null;
// }