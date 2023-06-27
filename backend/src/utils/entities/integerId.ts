import { isPositiveNumber } from "../numbers";

export class IntegerId {
    //#region Attributes
    readonly value: number;
    //#endregion
    constructor(value: unknown) {
        if (!isPositiveNumber(value))
            throw new Error("Invalid integer id");
        this.value = value as number;
    }
}