import { PositiveNumberNonZero } from "../../../../../utils/entities/PositiveNumberNonZero";
import Validator from "../../../../utils/Validator";

export default class ChangeCollaboratorPasswordPayload {
    private _collaboratorId: PositiveNumberNonZero;
    readonly newPassword: string;
    constructor({
        collaboratorId,
        newPassword
    }: any) {
        this._collaboratorId = new PositiveNumberNonZero(collaboratorId);
        Validator.checkPassword(newPassword);
        this.newPassword = newPassword.trim();
    }
    get collaboratorId(): number {
        return this._collaboratorId.value;
    }
}
