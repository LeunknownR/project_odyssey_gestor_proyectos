export type DeviceSizeHook = {
    isMobile: boolean;
};
export type CheckExpirationTimeTokenHook = {
    clear: () => void;
    init: () => NodeJS.Timeout | undefined;
};