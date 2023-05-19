//#region Libraries

//#endregion
//#region Styles
import { Icon } from "@iconify/react/dist/iconify.js";
import { Container, IconContainer } from "./styles";
import { InputDateProps } from "./types";
//#endregion

const InputDate = ({
    placeholder,
    error,
    text,
    disabled,
    onClick,
}: InputDateProps) => {
    const getClassName = (): string => {
        const classList = [];
        !text && classList.push("no-content");
        error && classList.push("error");
        disabled && classList.push("disabled");
        return classList.join(" ");
    };
    return (
        <Container
            className={getClassName()}
            onClick={disabled ? null : onClick}
        >
            <span>{text || placeholder}</span>
            <IconContainer><Icon icon="mdi:calendar-multiselect" /></IconContainer>
        </Container>
    );
};

export default InputDate;
