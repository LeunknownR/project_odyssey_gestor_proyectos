//#region Libraries
import { useState, useEffect } from "react";
//#endregion
//#region Styles
import { 
    CalendarPicker, 
    Calendar, 
    ContainerHeader, 
    ContainerChangeMonthButton,
    WeekDays,
    Days } from "./styles";
//#endregion
//#region Icons
import ArrowIcon from "icons/ArrowIcon";
//#endregion
//#region Utils
import {
    getDatePartsByMillis, 
    getDayOfWeek, 
    getDaysInMonth, 
    WEEK_DAYS,
    MONTHS, 
    getTimestamp, 
    getTodayWithoutHourInMillis
 } from "../../utils/helpers";
//#endregion

const getCurrentDate = (value) => {
    const [year, month, date] = getDatePartsByMillis(value);
    return { year, month, date };
}

const SelectBlock = ({ 
    handlerChangeValue, 
    value,
    availableDays,
    period 
}) => {
    //#region States
    const [currentDate, setCurrentDate] = useState({
        year: 0, month: 0, date: 0 
    });
    const [currentMonthCalendar, setCurrentMonthCalendar] = useState({
        year: 0, month: 0 
    });
    //#endregion
    //#region Effects
    useEffect(() => {
        const newCurrentDate = getCurrentDate(value);
        if (value !== -1) 
            setCurrentDate(newCurrentDate);
        const { date, ...rest } = newCurrentDate;
        setCurrentMonthCalendar(rest);
    }, [value]);
    //#endregion
    //#region Functions
    const handlerChangeDate = (date) => {
        const { year, month } = currentMonthCalendar;
        handlerChangeValue(new Date(year, month, date).getTime());
        setCurrentDate({
            ...currentMonthCalendar, 
            date 
        });
    }
    const changeMonth = (direction) => {
        const { month, year } = currentMonthCalendar;
        if (direction < 0 
                ? month > 0 
                : month < 11) {
            setCurrentMonthCalendar(prev => ({
                ...prev, 
                month: month + direction
            }));
            return;
        }
        setCurrentMonthCalendar({
            month: direction < 0 ? 11 : 0, 
            year: year + direction
        });
    }
    const getDateMillis = date => {
        const { year, month } = currentMonthCalendar;
        return getTimestamp(year, month, date);
    }
    const isSelectedDay = (date) => {
        const currentDateTimestamp = getTimestamp(currentDate.year, currentDate.month, currentDate.date);
        const candidateDateSelected = getDateMillis(date);
        return currentDateTimestamp === candidateDateSelected;
    }
    const dayIsInPeriod = (date) => {
        const [minPeriodYear, minPeriodMonth, minPeriodDate] = period.min;
        const [maxPeriodYear, maxPeriodMonth, maxPeriodDate] = period.max;
        // Verificando si la fecha actual está dentro del periodo
        const currentDateTimestamp = getDateMillis(date);
        const minPeriodTimestamp = getTimestamp(minPeriodYear, minPeriodMonth, minPeriodDate);
        const maxPeriodTimestamp = getTimestamp(maxPeriodYear, maxPeriodMonth, maxPeriodDate);
        return currentDateTimestamp >= minPeriodTimestamp 
            && currentDateTimestamp <= maxPeriodTimestamp;
    }
    const isToday = date => {
        return getDateMillis(date) === getTodayWithoutHourInMillis();
    }
    const dayAllowed = date => {
        if (!availableDays) return true;
        const { year, month } = currentMonthCalendar;
        let currentDay = new Date(year, month, date).getDay();
        currentDay = currentDay || 7; 
        return availableDays.includes(currentDay)
    }
    //#endregion
    return (
        <CalendarPicker>
            <Header 
                currentMonthCalendar={currentMonthCalendar}
                changeMonth={changeMonth}
                period={period}/>
            <Calendar>
                <WeekDays>
                    {WEEK_DAYS.map((day, idx) => (
                        <span key={idx}>{day[0]}</span>
                    ))}
                </WeekDays>
                <Days>
                    {Array(getDayOfWeek(
                        currentMonthCalendar.month, currentMonthCalendar.year))
                        .fill(0).map((_, idx) => <span key={idx}></span>)}
                    {getDaysInMonth(currentMonthCalendar)
                        .map((date, idx) => {
                            const classList = ["day"];
                            // Si el día se selecciona
                            if (isSelectedDay(date))
                                classList.push("selected");
                            // Si el día está permitido
                            if (!dayIsInPeriod(date) || !dayAllowed(date))
                                classList.push("disabled");
                            if (isToday(date)) 
                                classList.push("today");
                            return (
                                <span key={idx}
                                    className={classList.join(" ")}
                                    onClick={() => {
                                        // Verificando si está habilitado
                                        if (dayIsInPeriod(date) && dayAllowed(date))
                                            handlerChangeDate(date);
                                    }}>
                                    {date}
                                </span>
                            );
                        })}
                </Days>
            </Calendar>
        </CalendarPicker>
    );
};

const Header = ({
    currentMonthCalendar, 
    changeMonth, period
}) => {
    //#region States
    const { month, year } = currentMonthCalendar;
    //#endregion
    //#region Functions
    const outOfMonthAndYear = (direction) => {
        const { year, month } = currentMonthCalendar;
        const [minPeriodYear, minPeriodMonth] = period.min;
        const [maxPeriodYear, maxPeriodMonth] = period.max;
        const currentMonthYearTimestamp = getTimestamp(year, month, 1);
        const minPeriodMonthYearTimestamp = getTimestamp(minPeriodYear, minPeriodMonth, 1);
        const maxPeriodMonthYearTimestamp = getTimestamp(maxPeriodYear, maxPeriodMonth, 1);
        return (
            direction < 0
                ? currentMonthYearTimestamp <= minPeriodMonthYearTimestamp 
                : currentMonthYearTimestamp >= maxPeriodMonthYearTimestamp
        );
    }
    //#endregion
    return (
        <ContainerHeader>
            <ChangeMonthButton 
                onClick={() => {
                    if (!outOfMonthAndYear(-1))
                        changeMonth(-1);
                }} 
                direction="left"
                disabled={outOfMonthAndYear(-1)}/>
            <h5>
                {`${MONTHS[month]} ${year}`}
            </h5>
            <ChangeMonthButton 
                onClick={() => {
                    if (!outOfMonthAndYear(1))
                        changeMonth(1);
                }} 
                direction="right"
                disabled={outOfMonthAndYear(1)}/>
        </ContainerHeader>
    );
}
const ChangeMonthButton = ({
    direction, 
    onClick,
    disabled
}) => {
    const getClassName = () => {
        const classList = [];
        classList.push(direction);
        disabled && classList.push("disabled");
        return classList.join(" ");
    }
    return (
        <ContainerChangeMonthButton 
            className={getClassName()}
            onClick={onClick}>
            <ArrowIcon/>
        </ContainerChangeMonthButton>
    );
}

export default SelectBlock;