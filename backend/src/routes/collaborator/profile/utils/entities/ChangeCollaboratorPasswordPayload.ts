import { PositiveNumberNonZero } from "../../../../../utils/entities/PositiveNumberNonZero";
import { REG_EXP_PASSWORD } from "../../../../../utils/regex";
import { checkLength } from "../../../../../utils/strings";

export default class ChangeCollaboratorPasswordPayload {
    private _collaboratorId: PositiveNumberNonZero;
    readonly newPassword: string;
    constructor({
        collaboratorId,
        newPassword
    }: any) {
        this._collaboratorId = new PositiveNumberNonZero(collaboratorId);
        if (!checkLength(newPassword, 8, 30) 
            || !REG_EXP_PASSWORD.test(newPassword))
            throw new Error("Invalid password");
        this.newPassword = newPassword;
    }
    get collaboratorId(): number {
        return this._collaboratorId.value;
    }
}
