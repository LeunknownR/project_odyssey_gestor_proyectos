import UserModel from "../../models/userModel/userModel";
import { ResponseCodes } from "../../utils/responseCodes";
import Authentication from "../../utils/authentication";
import { DBMessages } from "../../db/dbMessages";
import { isCorrectPassword } from "./helpers";
import { Credentials, User } from "../../entities/user/types";
import { userFromRecordMapper } from "../../entities/user/mappers";

export default abstract class UserController {
    static login = async ({ username, password }: Credentials) => {
        const recordPassword: any = await UserModel.getUserPasswordByUsername(username);
        const currentPasswordHashed: string = recordPassword["userpassword"];
        if (!currentPasswordHashed)
            return {
                message: "INVALID_USER",
                code: ResponseCodes.BAD_REQUEST,
                data: null
            };
        if (!await isCorrectPassword(password, currentPasswordHashed))
            return {
                message: "INVALID_PASSWORD",
                code: ResponseCodes.BAD_REQUEST,
                data: null
            };
        const recordBasicUserInformation: any = await UserModel.getBasicUserInformation(username);
        const user: User = userFromRecordMapper(recordBasicUserInformation);
        return {
            message: DBMessages.Success,
            code: ResponseCodes.OK,
            data: {
                user,
                token: Authentication.createToken({ 
                    username: user.username, 
                    roleId: user.role.id
                })
            }
        };
    }
};