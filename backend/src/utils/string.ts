export const isString = (value: any) => {
    return typeof value === "string";
}
export const checkLength = (value: any, min: number, max: number) => {
    if (!isString(value))
        return false;
    return value.length >= min && value.length <= max;
}