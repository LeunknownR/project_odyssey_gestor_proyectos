import { PreloaderHook } from "src/components/Preloader/types";

export type InitMainContext = {
    isMobile: boolean;
    preloader: PreloaderHook;
};