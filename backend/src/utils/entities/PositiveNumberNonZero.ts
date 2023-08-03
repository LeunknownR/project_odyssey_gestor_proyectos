import { isPositiveNumberNonZero } from "../numbers";

export class PositiveNumberNonZero {
    //#region Attributes
    readonly value: number;
    //#endregion
    constructor(value: unknown) {
        if (!isPositiveNumberNonZero(value))
            throw new Error("Invalid positive number non zero");
        this.value = Number(value);
    }
}