import { ChangeEvent } from "react";

export type CustomInputSearchHookParams<O> = {
    fillOptions: (value: string) => Promise<void>;
    clearOptions: () => void;
    onChange: (option: O | null) => void;
}
export type CustomInputSearchHook<O> = {
    selectOption: (option: O) => void,
    changeSearchText: (e: ChangeEvent<HTMLInputElement>) => void,
    searchedText: string,
    clear: () => void
}