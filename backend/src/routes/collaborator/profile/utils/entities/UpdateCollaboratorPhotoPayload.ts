import { PositiveNumberNonZero } from "../../../../../utils/entities/PositiveNumberNonZero";
import { checkLength } from "../../../../../utils/strings";

export default class UpdateCollaboratorPhotoPayload {
    private _collaboratorId: PositiveNumberNonZero;
    readonly photoInBase64: string | null;
    constructor({
        collaboratorId,
        photoInBase64
    }: any) {
        this._collaboratorId = new PositiveNumberNonZero(collaboratorId);
        if (!checkLength(photoInBase64, 1))
            throw new Error("Invalid photo in base 64");
        this.photoInBase64 = photoInBase64;
    }
    get collaboratorId(): number {
        return this._collaboratorId.value;
    }
}