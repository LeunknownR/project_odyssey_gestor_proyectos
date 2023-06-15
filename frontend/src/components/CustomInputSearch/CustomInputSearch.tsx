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
    handler: {
        searchedText,
        changeSearchText,
        selectOption
    },
    options, clearOptions, 
    fillOptions,
    getSearchedItemToShow
}: CustomInputSearchProps<O>) {
    return (
        <Container tabIndex={0} onBlur={() => clearOptions()}>
            <CustomTextField
                label={label}
                placeholder={placeholder}
                value={searchedText}
                onChange={changeSearchText}
                variant={variant}
                maxLength={maxLength}
                onFocus={() => fillOptions(searchedText)}
            />
            {options.length > 0 && (
                <List>
                    {options.map((option, idx) => {
                        const searchedItemToShow: SearchedItemToShow = getSearchedItemToShow(option);
                        return (
                            <SearchedItem
                                key={searchedItemToShow.value || idx}
                                item={searchedItemToShow}
                                onSelect={() => selectOption(option)}
                            />
                        );
                    })}
                </List>
            )}
        </Container>
    );
}

export default CustomInputSearch;
