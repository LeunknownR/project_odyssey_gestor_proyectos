import db from "../../db";
import { StoredProcedures } from "../../db/storedProcedures";
import { AddCollaboratorsInProject, ProjectForm, UpdateEndDateForm } from "../../entities/project/types";
import { CreateProjectRequestBody } from "../../routes/generalAdmin/projects/types";

export default abstract class ProjectModel {
    static async getProjectListByGeneralAdmin(projectName: string): Promise<any[]> {
        const [resultset] = await db.query(
            StoredProcedures.GetProjectListByGeneralAdmin,
            [projectName]);
        return resultset;
    }
    static async searchCollaboratorByUsername(username: string): Promise<any[]> {
        const [resultset] = await db.query(
            StoredProcedures.SearchCollaborator,
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
        id,
        name,
        description,
        startDate,
        endDate,
        leaderId
    }: ProjectForm): Promise<number> {
        const information = await db.query(
            StoredProcedures.UpdateProject,
            [
                id,
                name,
                description,
                startDate,
                endDate,
                leaderId
            ]
        );
        return information.affectedRows;
    }
    static async getProjectListForCollaborator(projectName: string): Promise<any[]> {
        const [resultset] = await db.query(
            StoredProcedures.GetProjectListByCollaborator,
            [projectName]);
        return resultset;
    }
    static async updateEndDateProjectByLeader({
        projectId,
        endDate
    }: UpdateEndDateForm): Promise<number> {
        const [resultset] = await db.query(
            StoredProcedures.UpdateEndDateProjectByLeader,
            [
                projectId,
                endDate
            ]);
        return resultset.affectedRows;
    }
    static async SearchCollaboratorsForProjectMember(
        projectId,
        collaboratorName
    ): Promise<any[]> {
        const [resultset] = await db.query(
            StoredProcedures.SearchCollaboratorForProjectMember,
            [
                projectId,
                collaboratorName
            ]);
        return resultset;
    }
    static async addCollaboratorsInProject({
        projectId,
        membersIds
    }: AddCollaboratorsInProject): Promise<number> {
        const [resultset] = await db.query(
            StoredProcedures.AddCollaboratorsInProject,
            [
                projectId,
                membersIds
            ]);
        return resultset.affectedRows;
    }
}