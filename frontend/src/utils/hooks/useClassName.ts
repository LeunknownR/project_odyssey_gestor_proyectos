import { useState } from "react";
import { ClassNameHook } from "./types";

const useClassName = (): ClassNameHook => {
    const [classList, setClassList] = useState<string[]>([]);
    const addClassName = (className: string): void => {
        setClassList(prev => [
            ...new Set<string>([
                ...prev,
                className
            ]).values()
        ]);
    }
    const containsClassName = (className: string): boolean => {
        return classList.includes(className);
    }
    const removeClassName = (className: string): void => {
        setClassList(prev => prev.filter(value => value !== className));
    }
    return {
        value: classList.join(" "),
        add: addClassName,
        remove: removeClassName,
        contains: containsClassName
    };
}

export default useClassName;