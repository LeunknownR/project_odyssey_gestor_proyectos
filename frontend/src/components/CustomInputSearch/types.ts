import { SearchedItemToShow } from "./components/types";
import { CustomInputSearchHook } from "./utils/hooks/types";

export type CustomInputSearchProps<O> = {
    label?: string;
    placeholder?: string;
    maxLength?: number;
    options: O[];
    clearOptions: () => void;
    fillOptions: (searchedText: string) => Promise<void>;
    variant: string;
    handler: CustomInputSearchHook<O>;
    getSearchedItemToShow: (option: O) => SearchedItemToShow;
};
