import DBConnection from "../../db";
import { StoredProcedures } from "../../db/storedProcedures";

export default abstract class ProjectTasksModel {
    static async getTaskBoardByProjectId(projectId: number): Promise<any[]> {
        const [resultset] = await DBConnection.query(
            StoredProcedures.GetProjectTaskBoard,
            [projectId]);
        return resultset;
    }
}