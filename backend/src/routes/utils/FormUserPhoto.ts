import { checkLength } from "../../utils/strings";

export default class FormUserPhoto {
    readonly base64: string | null;
    readonly changePhoto: boolean;
    constructor({
        base64, changePhoto
    }: any) {
        FormUserPhoto.checkPhotoInBase64(base64);
        this.base64 = base64;
        if (typeof changePhoto !== "boolean")
            throw new Error("Invalid change photo value");
        this.changePhoto = changePhoto;
    }
    static checkPhotoInBase64(base64: any): void {
        if (base64 !== null && !checkLength(base64, 1))
            throw new Error("Invalid base 64 or it's not empty photo");
    }
};