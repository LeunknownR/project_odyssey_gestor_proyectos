import { isPositiveNumberNonZero } from "./numbers";
import { checkLength, isString } from "./strings";

const isArrayOf = (values: any[], validator: (value: any) => boolean) => {
    return values.every(validator);
}
export const isPositiveArrayNumber = (values: any[]): boolean => {
    return isArrayOf(values, isPositiveNumberNonZero);
}
export const isArrayString = (values: any[], min: number, max: number): boolean => {
    return isArrayOf(values, value => checkLength(value, min, max));
}