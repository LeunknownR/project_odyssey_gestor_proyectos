export const dayMonthFormat = (milliseconds: number): string => {
    const date = new Date(milliseconds);
    const day = date.getDate();
    const month = date.toLocaleString("es", { month: "long" });

    return `${day} ${month}`;
};
export const messageDateFormat = (milliseconds: number): string => {
    const date = new Date(milliseconds);
    const today = new Date();

    const isToday = date.toDateString() === today.toDateString();

    if (isToday)
        return date.toLocaleString("es", {
            hour: "numeric",
            minute: "numeric",
            hour12: true,
        });

    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    const isYesterday = date.toDateString() === yesterday.toDateString();

    if (isYesterday) return "Ayer";

    const day = date.getDate();
    const month = date.toLocaleString("es", { month: "long" });

    return `${day} ${month}`;
};
export const getDayMonthYearTwoDigitsFormat = (milliseconds: number): string => {
    const date = new Date(milliseconds);
    const day = date.getDate();
    const month = date.toLocaleString("es", { month: "2-digit" });
    const year = date.toLocaleString("es", { year: "2-digit" });
    return `${day}/${month}/${year}`;
};
export const getHour = (milliseconds: number): string => {
    const date = new Date(milliseconds);
    const hour = date.toLocaleString("es", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
    });
    return hour;
};
export const isDateBeforeToday = (milliseconds: number): boolean => {
    if (milliseconds === -1) return false;
    const date = new Date(milliseconds);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    return date.getTime() < yesterday.getTime();
};
