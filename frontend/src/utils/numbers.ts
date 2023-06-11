export const isPositiveNumber = (value: any): boolean => {
    const posibleNumber: unknown = parseInt(value);
    return typeof posibleNumber === "number" && posibleNumber > 0;
}
export const isPositiveNumberOrZero = (value: any): boolean => {
    const posibleNumber: unknown = parseInt(value);
    return typeof posibleNumber === "number" && posibleNumber >= 0;
}