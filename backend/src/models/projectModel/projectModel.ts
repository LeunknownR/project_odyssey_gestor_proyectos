import db from "../../db";
import { StoredProcedures } from "../../db/storedProcedures";
import { ProjectForm } from "../../entities/project/types";
import { CreateProjectRequestBody } from "../../routes/generalAdmin/projects/types";

export default abstract class ProjectModel {
    static async getProjectList(projectName: string): Promise<any[]> {
        const [resultset] = await db.query(
            StoredProcedures.GetProjectList, 
            [projectName]);
        return resultset;
    }
    static async createProject({
        userId,
        projectForm
    }: CreateProjectRequestBody): Promise<number> {
        const information = await db.query(
            StoredProcedures.CreateProject,
            [
                userId,
                projectForm.name,
                projectForm.description,
                projectForm.startDate,
                projectForm.endDate,
                projectForm.leaderId
            ]
        );
        return information.affectedRows;
    }
}