export const isString = (value: any) => {
    return typeof value === "string";
}
export const isLimitMaximString = (value: any, limit: number) => {
    return isString(value) && value.length <= limit && value.length > 0;
}