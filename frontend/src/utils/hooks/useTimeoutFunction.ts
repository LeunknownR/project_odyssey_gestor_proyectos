import { useState } from "react";

const useTimeoutFunction = (
    func: () => void
): (() => void)  => {
    const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | undefined>();
    return () => {
        clearTimeout(timeoutId);
        const newTimeoutId: NodeJS.Timeout | undefined = setTimeout(() => {
            func();
        }, 350);
        setTimeoutId(newTimeoutId);
    };
}

export default useTimeoutFunction;