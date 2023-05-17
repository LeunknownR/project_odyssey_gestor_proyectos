//#region Icons
import CalendarIcon from "icons/CalendarIcon";
//#endregion
//#region Styles
import { 
    Container } from "./styles";
//#endregion

const InputDate = ({
    placeholder, 
    error, 
    text,
    disabled, 
    onClick 
}) => {
    const getClassName = () => {
        const classList = [];
        !text && classList.push("no-content");
        error && classList.push("error");
        disabled && classList.push("disabled");
        return classList.join(" ");
    }
    return (
        <Container 
            className={getClassName()} 
            onClick={disabled ? null : onClick}>
            <span>{text || placeholder}</span>
            <CalendarIcon/>
        </Container>
    );
}

export default InputDate;