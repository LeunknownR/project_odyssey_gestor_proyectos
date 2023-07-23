import { checkLength } from "../../utils/strings";
import { PASSWORD_MAX_LENGTH } from "../utils/constants";

export default class UserCredentials {
    readonly username: string;
    readonly password: string;
    constructor({
        username, password
    }: any) {
        if (!checkLength(username, 1, 24) ||
            !checkLength(password, 1, PASSWORD_MAX_LENGTH))
            throw new Error("Invalid params to login");
        this.username = username;
        this.password = password;
    }
}