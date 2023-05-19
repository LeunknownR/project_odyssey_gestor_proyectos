import { Credentials } from "../../entities/user/types";
import { checkLength } from "../../utils/string";

export const parseToCredentials = (body: any): Credentials => {
    const { username, password } = body;
    if (!checkLength(username, 1, 20) ||
        !checkLength(password, 1, 100))
        throw new Error("Invalid params to login");
    return { username, password };
}