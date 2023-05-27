import { ChangeEvent } from "react";
import { SearchedItemToShow } from "./components/types";

export type CustomInputSearchProps<O> = {
    label?: string;
    placeholder?: string;
    maxLength?: number;
    options: O[];
    clearOptions: () => void;
    variant: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    value: string;
    selectOption: (option: O) => void;
    getSearchedItemToShow: (option: O) => SearchedItemToShow;
};
