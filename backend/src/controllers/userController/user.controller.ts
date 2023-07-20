import UserModel from "../../models/userModel/user.model";
import Authentication from "../../utils/authentication";
import { isCorrectPassword } from "./helpers";
import { AuthData, Credentials } from "../../entities/user/types";
import { ResponseMessages } from "../../utils/response/enums";
import { SessionUser } from "../../entities/user/User";

export default abstract class UserController {
    public static login = async ({ username, password }: Credentials): Promise<[AuthData, string]> => {
        const recordPassword: any = await UserModel.getUserPasswordByUsername(username);
        const currentPasswordHashed: string = recordPassword["userpassword"];
        if (!currentPasswordHashed)
            return [null, "INVALID_USER"];
        if (!await isCorrectPassword(password, currentPasswordHashed))
            return [null, "INVALID_PASSWORD"];
        const recordBasicUserInformation: any = await UserModel.getBasicUserInformation(username);
        const user: SessionUser = new SessionUser(recordBasicUserInformation);
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
};