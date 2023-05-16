export const isDateAfterDaysFromToday = (dateInMillis: number, days: number): boolean => {
    const date: Date  = new Date();
    date.setDate(date.getDate() + days);
    return dateInMillis >= date.getTime();
}
const getTodayOnlyDate = (): number => {
    const today: Date = new Date();
    today.setHours(0, 0, 0, 0);
    return today.getTime();
}
export const isPast = (dateInMillis: number): boolean => {
    return dateInMillis < getTodayOnlyDate()
}