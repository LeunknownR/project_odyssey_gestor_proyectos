//#region Libraries
import { useEffect, useState, useRef } from "react";
//#endregion
//#region Styles
import { 
    Container,
    Content } from "./styles";
//#endregion
//#region Components
// import ErrorMessage from "components/ErrorMessage/ErrorMessage";
import SelectBlock from "./components/SelectBlock/SelectBlock";
import InputDate from "./components/InputDate/InputDate";
//#endregion
//#region Utils
import {
    getDatePartsByMillis, 
    getText, 
    getToday
 } from "./utils/helpers";
import { CustomDatePickerProps } from "./types";
import { Row } from "../styles";
//#endregion
 
const CustomDatePicker = ({
    label, 
    placeholder = "Elige una fecha",
    onChange, value = -1,
    period = {
        min: getToday(),
        max: [3000, 1, 1]
    },
    availableDays,
    error = false,
    // errorText,
    disabled = false,
    width
}: CustomDatePickerProps) => {
    //#region States
    const [showSelectBlock, setShowSelectBlock] = useState(false);
    const [calendarAbove, setCalendarAbove] = useState(false);
    //#endregion
    const $calendarRef = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        if (!$calendarRef || !$calendarRef.current) return;
        const rect = $calendarRef.current.getBoundingClientRect();
        const position = rect.top + rect.height;
        if (position > window.innerHeight)
            setCalendarAbove(true)
    }, [showSelectBlock]);
    //#region Functions
    const toggleShowSelectBlock = () => {
        setShowSelectBlock(prev => !prev);
    }
    const changeValue = (timestamp: number): void => {
        onChange && onChange(timestamp);
        toggleShowSelectBlock();
    }
    const getTextForInput = () => {
        if (value === -1)
            return null;
        return getText(getDatePartsByMillis(value));
    }
    const getClassName = () => {
        const classList = [];
        disabled && classList.push("disabled");
        return classList.join(" ");
    }
    //#endregion
    const className = getClassName();
    return (
        <Container 
            className={className}
            width={width}>
            {label && 
            <Row justify="flex-start" gap="5px">
                <label>{label}</label>
            </Row>}
            <Content
                className={className}
                tabIndex={0}
                onBlur={() => setShowSelectBlock(false)}>
                <InputDate 
                    placeholder={placeholder}
                    disabled={disabled}
                    text={getTextForInput()} 
                    error={error}
                    onClick={toggleShowSelectBlock}/>
                {showSelectBlock && 
                <SelectBlock 
                    value={value}
                    handlerChangeValue={changeValue}
                    availableDays={availableDays}
                    period={period}
                    ref={$calendarRef}
                    calendarAbove={calendarAbove}/>}
                {/* <ErrorMessage
                    text={errorText}
                    error={error}/> */}
            </Content>
        </Container>
    );
}

export default CustomDatePicker;
