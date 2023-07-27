//#region Libraries
import { useState, forwardRef } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
//#endregion
//#region Styles
import {
    Container,
    Content,
    LabelContent,
    LensContainer,
    PasswordRevealer,
    TextField,
} from "./styles";
//#endregion
//#region Components
import ErrorMessage from "../ErrorMessage/ErrorMessage";
//#endregion
//#region Types
import { CustomTextFieldProps } from "./types";
//#endregion

const CustomTextField = forwardRef<HTMLInputElement, CustomTextFieldProps>(({
    className,
    placeholder,
    name, label,
    type, variant,
    size, width, maxWidth, minWidth,
    maxLength, disabled,
    value, error = null,
    onFocus, onBlur,
    // restriction,
    onChange, onKeyDown
}, ref) => {
    const [isPasswordRevealed, setIsPasswordRevealed] = useState(false);
    const getClassName = () => {
        const classList: string[] = [];
        className && classList.push(className);
        size && classList.push(size);
        variant && classList.push(variant);
        disabled && classList.push("disabled");
        error && classList.push("error");
        type === "password" && classList.push("password");
        return classList.join(" ");
    };
    const getType = () => {
        if (isPasswordRevealed)
            return "text";
        return type ? type : "text";
    };
    const togglePasswordRevealed = () => {
        setIsPasswordRevealed(prev => !prev);
    };
    const showPasswordRevealer = (): boolean => {
        return type === "password" && Boolean(value) && !disabled;
    };
    return (
        <Container width={width} maxWidth={maxWidth} minWidth={minWidth} className={getClassName()}>
            {label && <LabelContent className={getClassName()}>{label}</LabelContent>}
            <Content className={getClassName()}>
                <TextField
                    ref={ref}
                    disabled={disabled}
                    className={getClassName()}
                    name={name}
                    maxLength={maxLength}
                    type={getType()}
                    placeholder={type === "password" ? "********" : placeholder}
                    value={value}
                    onChange={onChange}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onKeyDown={onKeyDown}
                    // onKeyPress={RESTRICTIONS[restriction ? restriction : ""]}
                />
                {showPasswordRevealer() && (
                    <PasswordRevealer onClick={togglePasswordRevealed}>
                        <Icon icon={isPasswordRevealed ? "mdi:eye" : "mdi:eye-off"}/>
                    </PasswordRevealer>
                )}
                {variant?.includes("search") && (
                    <LensContainer>
                        <Icon icon="simple-line-icons:magnifier" />
                    </LensContainer>
                )}
                <ErrorMessage text={error} />
            </Content>
        </Container>
    );
});

export default CustomTextField;
