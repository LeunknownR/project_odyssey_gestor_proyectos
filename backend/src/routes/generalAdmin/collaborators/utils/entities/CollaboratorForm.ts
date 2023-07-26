import { PositiveNumberNonZero } from "../../../../../utils/entities/PositiveNumberNonZero";
import { REG_EXP_EMAIL, REG_EXP_USERNAME } from "../../../../../utils/regex";
import { checkLength } from "../../../../../utils/strings";
import FormUserPhoto from "../../../../utils/FormUserPhoto";
import Validator from "../../../../utils/Validator";
import { PASSWORD_MAX_LENGTH } from "../../../../utils/constants";

abstract class CollaboratorForm {
    //#region Attributes
    readonly name: string;
    readonly surname: string;
    readonly email: string;
    readonly username: string;
    //#endregion
    constructor({
        name, surname,
        email, username
    }: any) {
        if (!checkLength(name, 1, 50))
            throw new Error("Invalid name");
        if (!checkLength(surname, 1, 50))
            throw new Error("Invalid surname");
        if (!checkLength(email, 1, 50) || !REG_EXP_EMAIL.test(email))
            throw new Error("Invalid email");
        if (!checkLength(username, 3, 24) || !REG_EXP_USERNAME.test(username))
            throw new Error("Invalid username");
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.username = username;
    }
}
export class CollaboratorCreationForm extends CollaboratorForm {
    //#region Attributes
    readonly photoInBase64: string | null;
    readonly password: string;
    //#endregion
    constructor(body: any) {
        super(body);
        const {
            photoInBase64, 
            password
        } = body;
        FormUserPhoto.checkPhotoInBase64(photoInBase64);
        this.photoInBase64 = photoInBase64;
        Validator.checkPasswordOnlyLength(password);
        this.password = password;
    }
}
export class CollaboratorUpdatingForm extends CollaboratorForm {
    //#region Attributes
    private _id: PositiveNumberNonZero;
    readonly photo: FormUserPhoto;
    readonly password: string | null;
    //#endregion
    constructor(body: any) {
        super(body);
        const {
            id, photo, password
        } = body;
        this._id = new PositiveNumberNonZero(id);
        this.photo = new FormUserPhoto(photo);
        if (password !== null)
            Validator.checkPasswordOnlyLength(password);
        this.password = password;
    }
    get id(): number {
        return this._id.value;
    }
}