import { useState, useEffect } from "react";
import { MOBILE_WIDTH } from "src/config/constants";
import { DeviceSizeHook } from "./types";

const useDeviceSize = (): DeviceSizeHook => {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const toggleIsMobile = () => setIsMobile(window.innerWidth < MOBILE_WIDTH);
        toggleIsMobile();
        window.addEventListener("resize", toggleIsMobile);
        return () => window.removeEventListener("resize", toggleIsMobile);
    }, []);
    return {
        isMobile,
    };
};

export default useDeviceSize;
