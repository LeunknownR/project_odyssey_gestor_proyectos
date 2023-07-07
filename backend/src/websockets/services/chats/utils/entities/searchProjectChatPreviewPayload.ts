import { IntegerId } from "../../../../../utils/entities/integerId";
import { isString } from "../../../../../utils/strings";

export default class WSSearchProjectChatPreviewPayload {
    //#region Attributes
    private _collaboratorId: IntegerId;
    readonly searchedProject: string;
    //#endregion
    //#region Constantes
    private readonly ERROR: string = "Invalid payload to get project chat preview";
    //#endregion
    constructor(collaboratorId: number, searchedProject: string) {
        this._collaboratorId = new IntegerId(collaboratorId);
        if (!isString(searchedProject))
            throw new Error(this.ERROR);
        this.searchedProject = searchedProject;
    }
    get collaboratorId(): number {
        return this._collaboratorId.value;
    }
};