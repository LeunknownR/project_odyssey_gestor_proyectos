import db from "../../db";
import { StoredProcedures } from "../../db/storedProcedures";
import { ProjectForm, UpdateEndDateForm } from "../../entities/project/types";
import { CreateProjectRequestBody, UpdateProjectRequestBody } from "../../routes/generalAdmin/projects/types";

export default abstract class ProjectModel {
    static async getProjectList(projectName: string): Promise<any[]> {
        const [resultset] = await db.query(
            StoredProcedures.GetProjectList, 
            [projectName]);
        return resultset;
    }
    static async searchCollaboratorByUsername(username: string): Promise<any[]> {
        const [resultset] = await db.query(
            StoredProcedures.SearchCollaborators,
            [username]);
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
    static async UpdateProject({
        projectForm
    }: UpdateProjectRequestBody): Promise<number> {
        const information = await db.query(
            StoredProcedures.UpdateProject,
            [
                projectForm.id,
                projectForm.name,
                projectForm.description,
                projectForm.startDate,
                projectForm.endDate,
                projectForm.leaderId
            ]
        );
        return information.affectedRows;
    }
    static async getProjectListByCollaborator(collaboratorName: string): Promise<any[]> {
        const [resultset] = await db.query(
            StoredProcedures.GetProjectListByCollaborator, 
            [collaboratorName]);
        return resultset;
    }
    static async updateEndDateProjectByLeader({
        projectId,
        endDate
    } : UpdateEndDateForm ): Promise<number> {
        const [resultset] = await db.query(
            StoredProcedures.UpdateEndDateProjectByLeader, 
            [
                projectId,
                endDate
            ]);
        return resultset.affectedRows;
    }
}