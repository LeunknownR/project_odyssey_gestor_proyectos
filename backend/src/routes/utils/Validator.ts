import { REG_EXP_PASSWORD } from "../../utils/regex";
import { checkLength } from "../../utils/strings";

export default abstract class Validator {
    static checkPassword(password: string) {
        if (!checkLength(password, 8, 30) 
            || !REG_EXP_PASSWORD.test(password))
            throw new Error("Invalid password");
    }
}