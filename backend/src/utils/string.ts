export const isString = (value: any) => {
    return typeof value === "string";
}
export const isLimitMaximString = (value: any, limit: number) => {
    return value.length <= limit && value.length > 0 && typeof value === "string";
}