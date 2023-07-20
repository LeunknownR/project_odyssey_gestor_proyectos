import { ChangeEvent } from "react";

export type InputFinderProps = {
    searchInput: (e: ChangeEvent<HTMLInputElement>) => void;
    searchedInput: string;
    clearSearchedInput: () => void;
};
