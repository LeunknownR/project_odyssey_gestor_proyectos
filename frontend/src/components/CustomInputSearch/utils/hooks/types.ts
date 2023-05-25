import { ChangeEvent } from "react";

export type CustomInputSearchHookParams<O> = {
    fillOptions: (value: string) => Promise<void>;
    clearOptions: () => void;
    onChange: (option: O | null) => void; 
}
export type CustomInputSearchHook= {
    selectOption: (option: CustomInputSearchOption) => void,
    changeSearchText: (e: ChangeEvent<HTMLInputElement>) => void,
    searchText: string,
    clear: () => void
}