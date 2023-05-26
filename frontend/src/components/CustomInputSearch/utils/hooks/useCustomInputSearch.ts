import { ChangeEvent, useEffect, useState } from "react";
import { CustomInputSearchHookParams } from "./types";

function useCustomInputSearch<O>({
    fillOptions, clearOptions,
    onChange,
}: CustomInputSearchHookParams<O>) {
    //#region States
    const [searchText, setSearchText] = useState<string>("");
    const [timeoutToSearchId, setTimeoutId] = useState<NodeJS.Timeout | undefined>();
    //#endregion
    useEffect(() => {
        if (searchText) return;
        clearOptions();
    }, [searchText]);
    //#region Funciones
    const selectOption = (option: O): void => {
        setSearchText("");
        onChange(option);
    };
    const changeSearchText = (e: ChangeEvent<HTMLInputElement>): void => {
        const { value } = e.target;
        setSearchText(value);
        clearTimeout(timeoutToSearchId);
        const newTimeoutToSearchId: NodeJS.Timeout | undefined = setTimeout(() => {
            fillOptions(value);
        }, 500);
        setTimeoutId(newTimeoutToSearchId);
    };
    const clear = (): void => {
        setSearchText("");
        clearOptions();
        onChange(null);
    }
    //#endregion
    return {
        selectOption,
        changeSearchText,
        searchText,
        clear
    };
}
 
export default useCustomInputSearch;