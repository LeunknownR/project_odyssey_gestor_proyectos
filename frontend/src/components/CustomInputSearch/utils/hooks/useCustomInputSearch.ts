import { ChangeEvent, useEffect, useState } from "react";
import { CustomInputSearchHook, CustomInputSearchHookParams } from "./types";

function useCustomInputSearch<O>({
    fillOptions, clearOptions,
    onChange,
}: CustomInputSearchHookParams<O>): CustomInputSearchHook<O> {
    //#region States
    const [searchedText, setSearchedText] = useState<string>("");
    const [timeoutToSearchId, setTimeoutId] = useState<NodeJS.Timeout | undefined>();
    //#endregion
    useEffect(() => {
        if (searchedText) return;
        clearOptions();
    }, [searchedText]);
    //#region Funciones
    const selectOption = (option: O): void => {
        setSearchedText("");
        onChange(option);
    };
    const changeSearchText = (e: ChangeEvent<HTMLInputElement>): void => {
        const { value } = e.target;
        setSearchedText(value);
        clearTimeout(timeoutToSearchId);
        const newTimeoutToSearchId: NodeJS.Timeout | undefined = setTimeout(() => {
            fillOptions(value);
        }, 500);
        setTimeoutId(newTimeoutToSearchId);
    };
    const clear = (): void => {
        setSearchedText("");
        clearOptions();
        onChange(null);
    }
    //#endregion
    return {
        selectOption,
        changeSearchText,
        searchedText,
        clear
    };
}
 
export default useCustomInputSearch;