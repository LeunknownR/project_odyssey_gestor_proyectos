import { useEffect, useRef } from "react";

function usePrevious<S>(state: S) {
    const previous = useRef<S | null>(null);
    useEffect(() => {
        previous.current = state;
    }, [state]);
    return previous.current;
}

export default usePrevious;