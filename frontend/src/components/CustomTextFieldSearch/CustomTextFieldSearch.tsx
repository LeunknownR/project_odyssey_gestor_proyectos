import { ChangeEvent, useState } from "react";
import { CustomTextFieldSearchProps } from "./types";
import CustomTextField from "../CustomTextField/CustomTextField";

const CustomTextFieldSearch = ({
    placeholder,
    variant,
    changeField,
}: CustomTextFieldSearchProps) => {
    const [searchText, setSearchText] = useState("");
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setSearchText(value);
        changeField(value);
    };
    return (
        <CustomTextField
            placeholder={placeholder}
            value={searchText}
            onChange={onChange}
            variant={variant}
        />
    );
};

export default CustomTextFieldSearch;
