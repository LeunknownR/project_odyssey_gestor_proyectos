import { HOST_HTTP } from "./constants";

export const getUrlImage = (path: string | null): string | null => {
    return path ? `${HOST_HTTP}${path}` : null;
}