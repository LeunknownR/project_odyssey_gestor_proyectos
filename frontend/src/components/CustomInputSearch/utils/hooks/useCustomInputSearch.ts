import { ChangeEvent, useState } from "react";

const useCustomInputSearch = () => {
    const [searchText, setSearchText] = useState("");
    const selectOption = (option: CustomInputSearchOption) => {
        setSearchText(option.name);
        onChange(option);
        // clearOptions();
    };
    const changeSearchText = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setSearchText(value);
        fillOptions(value);
    };
    return (  );
}
 
export default useCustomInputSearch;