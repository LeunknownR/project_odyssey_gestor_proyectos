import { PositiveNumberNonZero } from "../../../../../utils/entities/PositiveNumberNonZero";
import { checkLength } from "../../../../../utils/strings";

export default class WSPrivateMessage {
    private _receiverId: PositiveNumberNonZero;
    readonly content: string;
    private readonly ERROR = "Invalid message content";
    constructor({
        receiverId,
        content
    }: any) {
        this._receiverId = new PositiveNumberNonZero(receiverId);
        if (!checkLength(content, 1, 500)) 
            throw new Error(this.ERROR);
        this.content = content;
    }
    get receiverId(): number {
        return this._receiverId.value;
    }
}