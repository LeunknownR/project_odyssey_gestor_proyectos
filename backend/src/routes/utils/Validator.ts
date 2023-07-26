import { REG_EXP_PASSWORD } from "../../utils/regex";
import { checkLength } from "../../utils/strings";
import { PASSWORD_MAX_LENGTH } from "./constants";

export default abstract class Validator {
    static checkPasswordOnlyLength(password: any): void {
        if (!checkLength(password, 8, PASSWORD_MAX_LENGTH))
            throw new Error("Invalid password");
    }
    static checkPassword(password: any) {
        this.checkPasswordOnlyLength(password);
        if (!REG_EXP_PASSWORD.test(password))
            throw new Error("Invalid password");
    }
}