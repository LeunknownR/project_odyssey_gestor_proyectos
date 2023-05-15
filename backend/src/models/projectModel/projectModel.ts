import db from "../../db";
import { StoredProcedures } from "../../db/storedProcedures";

export default abstract class ProjectModel {
    static async getProjectList(projectName: string): Promise<any[]> {
        const [resultset] = await db.query(
            StoredProcedures.GetProjectList, 
            [projectName]);
        return resultset;
    }
}