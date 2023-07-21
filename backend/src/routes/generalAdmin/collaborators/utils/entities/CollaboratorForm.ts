import { PositiveNumberNonZero } from "../../../../../utils/entities/PositiveNumberNonZero";
import { REG_EXP_EMAIL, REG_EXP_PASSWORD, REG_EXP_USERNAME } from "../../../../../utils/regex";
import { checkLength } from "../../../../../utils/strings";
import FormUserPhoto from "../../../../utils/FormUserPhoto";

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
    //#region Methods
    static checkPassword(password: string) {
        if (!checkLength(password, 8, 30) 
            || !REG_EXP_PASSWORD.test(password))
            throw new Error("Invalid password");
    }
    //#endregion
}
export class CollaboratorCreationForm extends CollaboratorForm {
    //#region Attributes
    readonly photoInBase64: string | null;
    readonly password: string;
    //#endregion
    constructor(body: any) {
        super(body);
        const {
            photoBase64, 
            password
        } = body;
        FormUserPhoto.checkPhotoInBase64(photoBase64);
        this.photoInBase64 = photoBase64;
        if (!checkLength(password, 8, 30) 
            || !REG_EXP_PASSWORD.test(password))
            throw new Error("Invalid password");
        CollaboratorForm.checkPassword(password);
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
        if (!checkLength(password, 8, 30) 
            || !REG_EXP_PASSWORD.test(password))
            throw new Error("Invalid password");
        if (password !== null)
            CollaboratorForm.checkPassword(password);
        this.password = password;
    }
    get id(): number {
        return this._id.value;
    }
}
export class CollaboratorDeletedForm {
    //#region Attributes
    private _collaboratorId: PositiveNumberNonZero;
    //#endregion
    constructor(params: any) {
        const {
            collaboratorId
        } = params;
        this._collaboratorId = new PositiveNumberNonZero(collaboratorId);
    }
    get collaboratorId(): number {
        return this._collaboratorId.value;
    }
}