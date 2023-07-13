export const getBackendProdHost = (): string => {
    return window.location.host;
};
export const getBackendDevHost = (): string => {
    return new URL(import.meta.env.VITE_API_URL).host;
};