export const dayMonthFormat = (milliseconds: number): string => {
    const date = new Date(milliseconds);
    const day = date.getDate();
    const month = date.toLocaleString("es", { month: "long" });

    return `${day} ${month}`;
};
export const commentDateFormat = (milliseconds: number): string => {
    const date = new Date(milliseconds);
    const today = new Date();
    
    const isToday = date.toDateString() === today.toDateString();
    
    if (isToday) 
        return date.toLocaleString("es", {hour: 'numeric', minute: 'numeric', hour12: true});
    
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    const isYesterday = date.toDateString() === yesterday.toDateString();

    if (isYesterday) 
        return "Ayer";
    
    const day = date.getDate();
    const month = date.toLocaleString("es", { month: "long" });

    return `${day} ${month}`;
};
