import { isPositiveNumber } from "./numbers";

const isArrayOf = (values: any[], validator: (value: any) => boolean) => {
    return values.every(validator);
}
export const isPositiveArrayNumber = (values: any[]): boolean => {
    return isArrayOf(values, isPositiveNumber);
}