import { Credentials } from "../../entities/user/types";

export const parseToCredentials = (body: any): Credentials => {
    const { username, password } = body;
    if (typeof username !== "string" ||
        typeof password !== "string" ||
        username?.length === 0 || 
        password?.length === 0 || 
        username?.length > 20 || 
        password?.length > 100)
        throw new Error();
    return { username, password };
}