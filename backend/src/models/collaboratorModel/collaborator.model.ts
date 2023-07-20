import DBConnection from "../../db";
import { StoredProcedures } from "../../db/storedProcedures";

export default abstract class CollaboratorModel {
    static getCollaboratorList = async (
        searchedCollaborator: string, 
        offset: number
    ): Promise<any[]> => {
        const [resultset] = await DBConnection.query(
            StoredProcedures.GetCollaboratorList, 
            [
                searchedCollaborator, 
                offset
            ]);
        return resultset;
    }
    public static async searchCollaborator(username: string): Promise<any[]> {
        const [resultset] = await DBConnection.query(
            StoredProcedures.SearchCollaborator,
            [username]);
        return resultset;
    }
}