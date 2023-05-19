import { DAY_IN_MILLIS, MONTHS, WEEK_DAYS } from "./constants";

const getQuantityDaysInMonth = (year: number, month: number): number => {
    const date = new Date(year, month + 1, 0);
    setOffsetDate(date);
    return date.getDate();
}
const setOffsetDate = (date: Date): number => {
    return date.setMinutes(date.getMinutes() + date.getTimezoneOffset());
}
export const getQuantityWeeksInMonth = (dateMillis: number): number => {
    const date = new Date(dateMillis === -1 ? Date.now(): dateMillis);
    const quantityDaysInMonth = getQuantityDaysInMonth(date.getFullYear(), date.getMonth());
    let offset = new Date(date.getFullYear(), date.getMonth()).getDay();
    offset = offset === 0 ? 7 : offset;
    offset -= 1;
    return Math.ceil((quantityDaysInMonth + offset)/7);
}
export const getFirstDateOfWeekByMonth = (dateMillis: number): number => {
    dateMillis = dateMillis === -1 ? getTodayWithoutHourInMillis() : dateMillis;
    const date = new Date(dateMillis);
    let days = date.getDay();
    days = days === 0 ? 7 : days;
    days -= 1;
    if (getCurrentWeekInMonth(dateMillis) === 1)
        return dateMillis - (date.getDate() - 1)*DAY_IN_MILLIS;
    return dateMillis - days*DAY_IN_MILLIS;
}
export const getFirstDateOfBeforeWeekByMonth = (dateMillis: number): number => {
    const firstDateAWeekBefore = new Date(getFirstDateOfWeekByMonth(Number(new Date(dateMillis - DAY_IN_MILLIS)))).getTime();
    return firstDateAWeekBefore;
}
export const getDaysBetweenFromFirstDayWeekToLastDayWeekOnlyOneMonth = (first: number, last: number): number => {
    let days = (last - first)/DAY_IN_MILLIS;
    if (days < 7)
        days++;
    return days;
}
export const getLastDateOfWeekByMonthV2 = (dateMillis: number): number => {
    dateMillis = dateMillis === -1 ? Date.now() : dateMillis;
    const date = new Date(dateMillis);
    let days = date.getDay();
    days = days === 0 ? 7 : days;
    days = 7 - days;
    const [year, month] = getDatePartsByMillis(dateMillis);
    const quantityDays = getQuantityDaysInMonth(year, month);
    const dateDiff = quantityDays - date.getDate();
    if (dateDiff < 7) 
        return dateMillis + dateDiff*DAY_IN_MILLIS;
    return dateMillis + days*DAY_IN_MILLIS;
}
export const getLastDateOfWeekByMonth = (dateMillis: number): number => {
    dateMillis = dateMillis === -1 ? getTodayWithoutHourInMillis() : dateMillis;
    const date = new Date(dateMillis);
    let days = date.getDay();
    days = days === 0 ? 7 : days;
    days = 7 - days;
    return dateMillis + days*DAY_IN_MILLIS;
}
export const getFirstDateOfNextWeekByMonth = (dateMillis: number): number => {
    const firstDateAWeekBefore = new Date(getFirstDateOfWeekByMonth(Number(new Date(dateMillis - DAY_IN_MILLIS)))).getTime();
    return firstDateAWeekBefore;
}
export const getCurrentWeekInMonth = (dateMillis: number): number => {
    const date = new Date(dateMillis === -1 ? Date.now(): dateMillis);
    const quantityDaysInMonth = getQuantityDaysInMonth(date.getFullYear(), date.getMonth());
    const getCurrentDate = (dateNumber: number) => {
        return new Date(date.getFullYear(), date.getMonth(), dateNumber);
    }
    // Obteniendo semana actual inicial
    let currentWeek = getCurrentDate(1).getDay();
    currentWeek = currentWeek === 1 ? 0 : 1;
    for (let dateNumber = 1; dateNumber <= quantityDaysInMonth; dateNumber++) {
        const currentDate = getCurrentDate(dateNumber);
        const currentDayNumber = currentDate.getDay();
        // Cambiando de semana si es lunes
        if (currentDayNumber === 1) 
            currentWeek++;
        // Revisando si la fecha actual es igual a la pasada como argumento
        if (dateNumber === date.getDate())
            break; 
    }
    return currentWeek;
}
export const getDayOfWeek = (month: number, year: number): number => {
    return new Date(year, month, 1).getDay();
};
export const getDayOfDateByTimestamp = (date: number): string => {
    return WEEK_DAYS[new Date(date).getDay()];
}
export const getDayIdByTimestamp = (timestamp: number): number => {
    const day = new Date(timestamp).getDay();
    return day === 0 ? 7 : day;
}
export const getDatePartsByMillis = (millis: number): number[] => {
    const dateObj = new Date(
        millis > 0 
        ? millis 
        : Date.now());
    return [
        dateObj.getFullYear(), 
        dateObj.getMonth(), 
        dateObj.getDate()
    ];
}
export const getTimestamp = (year: number, month: number, date: number): number => {
    const dateObj = new Date(year, month, date);
    return dateObj.getTime();
}
export const getToday = (): number[] => {
    const date = new Date();
    return [
        date.getFullYear(), 
        date.getMonth(), 
        date.getDate()
    ];
}
export const getTodayWithoutHourInMillis = (): number => {
    let now = new Date();
    now = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    return now.getTime();
}
export const getDateAsNumericText = ([year, month, day]: number[]): string => {
    return `${day.toString().length === 1
        ? 0 : ""}${day}/${month.toString().length === 1
            ? 0 : ""}${month + 1}/${year}`;
}
export const getText = ([year, ...restDate]: any): string => {
    return `${getDateMonthString(restDate)}, ${year}`;
}
export const getDateMonthString = ([month, date]: number[], form = 0): string => {
    if (form === 1)
        return `${date} de ${MONTHS[month]}`;
    return `${date} ${MONTHS[month].toLowerCase().substring(0, 3)}`;
}
export const getDateFormattedWithMillis = (millis: number): string => {
    const date = new Date(millis);
    return `${WEEK_DAYS[date.getDay()]}, ${date.getDate()} ${MONTHS[date.getMonth()].toLowerCase().substring(0, 3)}.`;
}
export const getDateMonthStringByTimestamp = (millis: number, form: number) => {
    return getDateMonthString(getDatePartsByMillis(millis).splice(1, 3), form);
}
export const getFullExtendedDateByTimestamp = (timestamp: number, today: number): string => {
    const [year, month, dateNumber] = getDatePartsByMillis(timestamp);
    const dayName = getDayOfDateByTimestamp(timestamp);
    const dateNumberFormatted = `${dateNumber.toString().length === 1 ? 0 : ""}${dateNumber}`;
    const todayPrefix = timestamp === (today || getTodayWithoutHourInMillis()) ? "Hoy, " : "";
    return `${todayPrefix}${dayName} ${dateNumberFormatted} de ${MONTHS[month]} ${year}`;
}
export const getDaysInMonth = ({ month, year }: {month: number, year: number}): number[] => {
    return Array(getQuantityDaysInMonth(year, month))
            .fill(0).map((_, idx) => idx + 1);
}
export const getWeekStringRange = (date: Date, separator = "al", form: number): string => {
    const [mondayDateObj, sundayDateObj] = getWeekDateRange(date);
    const startDateWeekString = getDateMonthString([mondayDateObj.getMonth(), mondayDateObj.getDate()], form);
    const endDateWeekString = getDateMonthString([sundayDateObj.getMonth(), sundayDateObj.getDate()], form);
    return `${startDateWeekString} ${separator} ${endDateWeekString}`;
}
export const getWeekStringRangeOf = ([start, end]: number[], separator = "al", form: number): string => {
    const startObj = new Date(start), 
        endObj = new Date(end);
    const startDateWeekString = getDateMonthString([startObj.getMonth(), startObj.getDate()], form);
    if (startObj.getTime() === endObj.getTime()) 
        return startDateWeekString;
    const endDateWeekString = getDateMonthString([endObj.getMonth(), endObj.getDate()], form);
    return `${startDateWeekString} ${separator} ${endDateWeekString}`;
}
export const getWeekDateRange = (date = new Date()): Date[] => {
    let day = date.getDay();
    day = day === 0 ? 7 : day;
    // Restando la cantidad de días pasados desde el lunes
    let mondayDateObj = new Date(
        date.getTime() - (day - 1)*DAY_IN_MILLIS);
    mondayDateObj = new Date(
        mondayDateObj.getFullYear(), 
        mondayDateObj.getMonth(), 
        mondayDateObj.getDate());
    const sundayDateObj = new Date(mondayDateObj.getTime() + (6*DAY_IN_MILLIS));
    return [mondayDateObj, sundayDateObj];
}
export const abreviationToCompleteDayMonth = (value: string): string => {
    const [dateDay, month] = value.split(" ");
    const abrevMonth = month.split(".")[0];
    const monthFullName = MONTHS.find(month => month.includes(abrevMonth));
    return `${dateDay} de ${monthFullName}`;
}
