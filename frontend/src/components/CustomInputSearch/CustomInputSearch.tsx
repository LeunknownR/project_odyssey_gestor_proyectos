//#region Libraries
import { ChangeEvent, useState } from "react";
//#endregion
//#region Styles
import { Container, List, Item } from "./styles";
//#endregion
//#region Types
import { CustomInputSearchOption, CustomInputSearchProps } from "./types";
import CustomTextField from "../CustomTextField/CustomTextField";
//#endregion

const CustomInputSearch = ({
    label, placeholder,
    variant, maxLength, 
    value, onChange, 
    options, fillOptions,
    // clearOptions
}: CustomInputSearchProps) => {
    const [searchText, setSearchText] = useState("");
    const selectOption = (option: CustomInputSearchOption) => {
        setSearchText(option.name);
        onChange(option);
        // clearOptions();
    }
    const changeSearchText = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setSearchText(value);
        fillOptions(value);
    }
    // const clearInput = () => {
    //     setSearchText("");
    //     onChange(null);
    //     clearOptions();
    // }
    return (
        <Container>
            <CustomTextField
                label={label}
                placeholder={placeholder}
                value={searchText}
                onChange={changeSearchText}
                variant={variant}
            />
            {/* {options.length > 0 && (
                <List>
                    {options.map(option => {
                        const { id, name } = option;
                        return (
                            <Item key={id} onClick={() => selectOption(option)}>
                                {name}
                            </Item>
                        );
                    })}
                </List>
            )} */}
            {/* {value && <CleanBtn onClick={clearInput}>Limpiar</CleanBtn>} */}
        </Container>
    );
};

export default CustomInputSearch;