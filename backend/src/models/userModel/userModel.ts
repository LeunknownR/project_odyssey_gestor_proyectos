import db from "../../db";
import { StoredProcedures } from "../../db/storedProcedures";

export default abstract class UserModel {
    static getUserPasswordByUsername = async (username: string): Promise<any> => {
        const [resultset] = await db.query(
            StoredProcedures.GetUserPasswordByUsername, 
            [username]);
        return resultset[0];
    }
    static getBasicUserInformation = async (username: string): Promise<any> => {
        const [resultset] = await db.query(
            StoredProcedures.GetBasicUserInformation, 
            [username]);
        return resultset[0];
    }
}