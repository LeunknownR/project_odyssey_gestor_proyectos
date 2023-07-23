import UserModel from "../../models/userModel/user.model";
import Authentication from "../../utils/authentication";
import { isCorrectPassword } from "./helpers";
import { AuthData } from "../../entities/user/types";
import { ResponseMessages } from "../../utils/response/enums";
import { SessionUser } from "../../entities/user/User";
import UserCredentials from "../../routes/authentication/UserCredentials";

export default abstract class UserController {
    private static async getPasswordByUsername(username: string): Promise<string | null> {
        const record: any = await UserModel.getUserPasswordByUsername(username);
        return record["userpassword"];
    }
    static async login({ 
        username, password 
    }: UserCredentials): Promise<[AuthData, string]> {
        const currentPasswordHashed: string | null = await this.getPasswordByUsername(username);
        if (!currentPasswordHashed)
            return [null, "INVALID_USER"];
        if (!await isCorrectPassword(password, currentPasswordHashed))
            return [null, "INVALID_PASSWORD"];
        const record: any = await UserModel.getBasicUserInformation(username);
        const user: SessionUser = new SessionUser(record);
        return [
            {
                user,
                token: Authentication.createToken({ 
                    username: user.username, 
                    roleId: user.role.id
                })
            }, 
            ResponseMessages.Success
        ];
    }
    static async checkCredentials({ 
        username, password 
    }: UserCredentials): Promise<string> {
        const currentPasswordHashed: string | null = await this.getPasswordByUsername(username);
        const matches: boolean = await isCorrectPassword(password, currentPasswordHashed);
        if (!matches)
            return "INVALID_CREDENTIALS";
        return ResponseMessages.Success;
    }
};