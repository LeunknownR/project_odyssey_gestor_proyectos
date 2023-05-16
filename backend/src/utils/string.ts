export const isString = (value: any) => {
    return typeof value === "string";
}
export const checkMaxLength = (value: any, limit: number) => {
    return isString(value) && value.length > 0 && value.length <= limit;
}