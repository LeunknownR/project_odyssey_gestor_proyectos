import { useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import {
    Container,
    Content,
    LabelContent,
    LensContainer,
    PasswordRevealer,
    TextField,
} from "./styles";
import { CustomTextFieldProps } from "./types";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
// import { RESTRICTIONS } from "./utils/restrictions";

const CustomTextField = ({
    placeholder,
    name, label,
    type, variant,
    size, width, maxWidth,
    maxLength, disabled,
    value, error = null,
    onBlur,
    // restriction,
    onChange,
}: CustomTextFieldProps) => {
    const [isPasswordRevealed, setIsPasswordRevealed] = useState(false);
    const getClassName = () => {
        const classList: string[] = [];
        size && classList.push(size);
        variant && classList.push(variant);
        disabled && classList.push("disabled");
        type === "password" && classList.push("password");
        return classList.join(" ");
    };
    const getType = () => {
        if ((disabled && type === "password") || isPasswordRevealed)
            return "text";
        return type ? type : "text";
    };
    const className: string = getClassName();
    const togglePasswordRevealed = () => {
        setIsPasswordRevealed(prev => !prev);
    };
    const showPasswordRevealer = (): boolean => {
        return type === "password" && Boolean(value) && !disabled;
    };
    return (
        <Container width={width} maxWidth={maxWidth} className={className}>
            {label && <LabelContent className={className}>{label}</LabelContent>}
            <Content className={className}>
                <TextField
                    disabled={disabled}
                    className={className}
                    name={name}
                    maxLength={maxLength}
                    type={getType()}
                    placeholder={type === "password" ? "********" : placeholder}
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    // onKeyPress={RESTRICTIONS[restriction ? restriction : ""]}
                />
                {showPasswordRevealer() && (
                    <PasswordRevealer onClick={togglePasswordRevealed}>
                        <Icon
                            icon={
                                isPasswordRevealed ? "mdi:eye" : "mdi:eye-off"
                            }
                        />
                    </PasswordRevealer>
                )}
                {variant?.includes("search") && (
                    <LensContainer>
                        <Icon icon="simple-line-icons:magnifier" />
                    </LensContainer>
                )}
            </Content>
            <ErrorMessage text={error} />
        </Container>
    );
};

export default CustomTextField;
