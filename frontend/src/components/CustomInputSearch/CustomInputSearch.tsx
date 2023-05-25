//#region Libraries
import { ChangeEvent, useState } from "react";
//#endregion
//#region Styles
import { Container, List } from "./styles";
//#endregion
//#region Types
import { CustomInputSearchProps } from "./types";
import CustomTextField from "../CustomTextField/CustomTextField";
import SearchedItem from "./components/SearchedItem";
import { SearchedItemToShow } from "./components/types";
//#endregion

function CustomInputSearch<O>({
    label, placeholder,
    variant, maxLength,
    value, onChange,
    options, selectOption,
    getSearchedItemToShow
}: CustomInputSearchProps<O>) {
    return (
        <Container>
            <CustomTextField
                label={label}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                variant={variant}
                maxLength={maxLength}
            />
            {options.length > 0 && (
                <List>
                    {options.map((option, idx) => {
                        const searchedItemToShow: SearchedItemToShow = getSearchedItemToShow(option);
                        return (
                            <SearchedItem
                                key={searchedItemToShow.value || idx}
                                item={searchedItemToShow}
                                onClick={() => selectOption(option)}
                            />
                        );
                    })}
                </List>
            )}
            {/* {value && <CleanBtn onClick={clearInput}>Limpiar</CleanBtn>} */}
        </Container>
    );
}

export default CustomInputSearch;
