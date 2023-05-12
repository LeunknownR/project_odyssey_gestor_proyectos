import { ChangeEvent, useState } from "react";
import { CustomTextFieldSearchProps } from "./types";
import CustomTextField from "../CustomTextField/CustomTextField";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Container, IconContainer } from "./styles";

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
        <Container>
            <CustomTextField
                placeholder={placeholder}
                value={searchText}
                onChange={onChange}
                variant={variant}
            />
            <IconContainer>
                <Icon icon="simple-line-icons:magnifier" />
            </IconContainer>
        </Container>
    );
};

export default CustomTextFieldSearch;
