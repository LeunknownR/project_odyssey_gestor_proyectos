import { isString } from "../../../../../utils/strings";

export class WSSearchedChat {
    //#region Attributes
    readonly value: string;
    //#endregion
    //#region Constants
    private readonly ERROR: string = "Invalid searched chat";
    //#endregion
    constructor(value: unknown) {
        if (!isString(value)) 
            throw new Error(this.ERROR);
        this.value = value as string;
    }
}