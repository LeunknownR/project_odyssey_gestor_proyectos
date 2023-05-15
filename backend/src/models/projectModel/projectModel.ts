import DBConnection from "../../db";
import { StoredProcedures } from "../../db/storedProcedures";
import { AddProjectMembersRequestBody as AddProjectMembers, AddProjectMembersRequestBody, ProjectForm, SearchCollaboratorRequestBody, UpdateEndDateProjectRequestBody } from "../../entities/project/types";
import { CreateProjectRequestBody } from "../../routes/generalAdmin/projects/types";

export default abstract class ProjectModel {
    static async getProjectListByGeneralAdmin(projectName: string): Promise<any[]> {
        const [resultset] = await DBConnection.query(
            StoredProcedures.GetProjectListByGeneralAdmin,
            [projectName]);
        return resultset;
    }
    static async searchCollaboratorByUsername(username: string): Promise<any[]> {
        const [resultset] = await DBConnection.query(
            StoredProcedures.SearchCollaborator,
            [username]);
        return resultset;
    }
    static async createProject({
        userId,
        projectForm
    }: CreateProjectRequestBody): Promise<number> {
        const information = await DBConnection.query(
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
    static async updateProject({
        id,
        name,
        description,
        startDate,
        endDate,
        leaderId
    }: ProjectForm): Promise<number> {
        const information = await DBConnection.query(
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
        const [resultset] = await DBConnection.query(
            StoredProcedures.GetProjectListByCollaborator,
            [projectName]);
        return resultset;
    }
    static async updateEndDateProjectByLeader({
        projectId,
        endDate
    }: UpdateEndDateProjectRequestBody): Promise<number> {
        const information = await DBConnection.query(
            StoredProcedures.UpdateEndDateProjectByLeader,
            [
                projectId,
                endDate
            ]);
        return information.affectedRows;
    }
    static async deleteProject(projectId: number): Promise<number> {
        const information = await DBConnection.query(
            StoredProcedures.DeleteProject,
            [projectId]
        );
        return information.affectedRows;
    }
    static async getProjectDetails(projectId: number): Promise<any[]> {
        const [resultset] = await DBConnection.query(
            StoredProcedures.GetProjectDetails,
            [projectId]
        );
        return resultset;
    }
    static async searchCollaboratorsForProjectMember(
        {
            projectId,
            collaboratorName
        }: SearchCollaboratorRequestBody): Promise<any[]> {
        const [resultset] = await DBConnection.query(
            StoredProcedures.SearchCollaboratorForProjectMember,
            [
                projectId,
                collaboratorName
            ]);
        return resultset;
    }
    static async addProjectMembers({
        projectId,
        membersIds
    }: AddProjectMembersRequestBody): Promise<number> {
        const information = await DBConnection.query(
            StoredProcedures.AddProjectMembers,
            [
                projectId,
                membersIds
            ]);
        return information.affectedRows;
    }
}