import { PositiveNumberNonZero } from "../../../../../utils/entities/PositiveNumberNonZero";
import { checkLength } from "../../../../../utils/strings";

export default class WSProjectMessage {
    private _projectId: PositiveNumberNonZero;
    readonly content: string;
    private readonly ERROR = "Invalid message content";
    constructor({
        projectId,
        content
    }: any) {
        this._projectId = new PositiveNumberNonZero(projectId);
        if (!checkLength(content, 1, 500)) 
            throw new Error(this.ERROR);
        this.content = content;
    }
    get projectId(): number {
        return this._projectId.value;
    }
}