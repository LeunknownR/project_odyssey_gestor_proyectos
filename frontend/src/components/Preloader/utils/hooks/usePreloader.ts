import { PreloaderHook, PreloaderProps } from "components/Preloader/types";
import { useState } from "react";
import { INIT_PRELOADER } from "../constants";

const usePreloader = (): PreloaderHook => {
    const [preloader, setPreloader] = useState<PreloaderProps>({ 
        ...INIT_PRELOADER 
    });
    const hide = () => {
        setPreloader(prev => ({
            ...prev,
            hidden: true
        }));
    }
    const show = (message: string | null) => {
        setPreloader({
            hidden: false,
            message: message || INIT_PRELOADER.message
        });
    }
    return {
        value: preloader,
        hide, show
    };
}

export default usePreloader;