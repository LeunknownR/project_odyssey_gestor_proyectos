import DBConnection from "../../db";
import { StoredProcedures } from "../../db/storedProcedures";
import {
    ProjectForm
} from "../../entities/project/types";
import { AddProjectMembersRequestBody, DeleteProjectMemberRequestBody, GetProjectListForCollaboratorRequestBody, SearchCollaboratorRequestBody, UpdateEndDateProjectRequestBody } from "../../routes/collaborator/projects/types";
import { CreateProjectRequestBody, DeleteProjectRequestBody } from "../../routes/generalAdmin/projects/types";

export default abstract class ProjectModel {
    static async getProjectListByGeneralAdmin(projectName: string | null): Promise<any[]> {
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
    }: CreateProjectRequestBody): Promise<string> {
        const [[record]] = await DBConnection.query(
            StoredProcedures.CreateProject,
            [
                userId,
                projectForm.name,
                projectForm.description,
                new Date(projectForm.startDate),
                new Date(projectForm.endDate),
                projectForm.leaderId
            ]
        );
        return record;
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
                new Date(startDate),
                new Date(endDate),
                leaderId
            ]
        );
        return information.affectedRows;
    }
    static async getProjectListForCollaborator({
        projectName,
        collaboratorId
    }: GetProjectListForCollaboratorRequestBody): Promise<any[]> {
        const [resultset] = await DBConnection.query(
            StoredProcedures.GetProjectListByCollaborator,
            [projectName, collaboratorId]);
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
                new Date(endDate)
            ]);
        return information.affectedRows;
    }
    static async deleteProject({
        userId, projectId
    }: DeleteProjectRequestBody): Promise<any> {
        const [[record]] = await DBConnection.query(
            StoredProcedures.DeleteProject,
            [projectId, userId]
        );
        return record;
    }
    static async getProjectDetails(projectId: number): Promise<any[]> {
        const [resultset] = await DBConnection.query(
            StoredProcedures.GetProjectDetails,
            [projectId]
        );
        return resultset;
    }
    static async searchCollaboratorsForProjectMember({
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
        projectId, membersIds
    }: AddProjectMembersRequestBody): Promise<number> {
        const information = await DBConnection.query(
            StoredProcedures.AddProjectMembers,
            [
                projectId,
                membersIds.join(",")
            ]);
        return information.affectedRows;
    }
    static async deleteProjectMember({
        userId, projectHasMemberId
    }: DeleteProjectMemberRequestBody): Promise<number> {
        const information = await DBConnection.query(
            StoredProcedures.AddProjectMembers,
            [
                userId,
                projectHasMemberId
            ]);
        return information.affectedRows;
    }
}