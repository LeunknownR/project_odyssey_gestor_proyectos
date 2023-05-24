//#region Libraries
import { ChangeEvent, useState } from "react";
//#endregion
//#region Styles
import { Container, List } from "./styles";
//#endregion
//#region Types
import { CustomInputSearchOption, CustomInputSearchProps } from "./types";
import CustomTextField from "../CustomTextField/CustomTextField";
import SearchedItem from "./components/SearchedItem";
//#endregion

const CustomInputSearch = ({
    label,
    placeholder,
    variant,
    maxLength,
    value,
    onChange,
    options,
    fillOptions,
}: // clearOptions
CustomInputSearchProps) => {
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
    // const clearInput = () => {
    //     setSearchText("");
    //     onChange(null);
    //     clearOptions();
    // }
    return (
        <Container>
            <CustomTextField
                placeholder={placeholder}
                value={searchText}
                onChange={changeSearchText}
                variant={variant}
                maxLength={maxLength}
            />
            {options.length > 0 && (
                <List>
                    {options.map(option => {
                        const { id } = option;
                        return (
                            <SearchedItem
                                key={id}
                                {...option}
                                onClick={() => selectOption(option)}
                            />
                        );
                    })}
                </List>
            )}
            {/* {value && <CleanBtn onClick={clearInput}>Limpiar</CleanBtn>} */}
        </Container>
    );
};

export default CustomInputSearch;
