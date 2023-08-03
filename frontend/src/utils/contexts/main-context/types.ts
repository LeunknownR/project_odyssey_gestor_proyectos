import { PreloaderHook } from "src/components/Preloader/types";

export type MainContextFormat = {
    isMobile: boolean;
    preloader: PreloaderHook;
};