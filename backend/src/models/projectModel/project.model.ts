import DBConnection from "../../db";
import { StoredProcedures } from "../../db/storedProcedures";
import {
    ProjectForm
} from "../../entities/project/entities";
import { GetProjectPanelDetailRequestBody } from "../../routes/collaborator/projectPanel/types";
import { 
    AddProjectMembersRequestBody, 
    DeleteProjectMemberRequestBody, 
    GetProjectListForCollaboratorRequestBody, 
    UpdateEndDateProjectRequestBody } from "../../routes/collaborator/projects/types";
import { SearchCollaboratorRequestBody } from "../../routes/collaborator/types";
import { 
    CreateProjectRequestBody, 
    DeleteProjectRequestBody 
} from "../../routes/generalAdmin/projects/types";

export default abstract class ProjectModel {
    static async getProjectIdsByCollaborator(collaboratorId: number): Promise<any[]> {
        const [resultset] = await DBConnection.query(
            StoredProcedures.GetProjectIdsByCollaborator,
            [collaboratorId]);
        return resultset;
    }
    static async getProjectListForGeneralAdmin(projectName: string | null): Promise<any[]> {
        const [resultset] = await DBConnection.query(
            StoredProcedures.GetProjectListForGeneralAdmin,
            [projectName]);
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
            StoredProcedures.GetProjectListForCollaborator,
            [projectName, collaboratorId]);
        return resultset;
    }
    static async updateEndDateProjectByLeader({
        projectId,
        endDate
    }: UpdateEndDateProjectRequestBody): Promise<any> {
        const [[record]] = await DBConnection.query(
            StoredProcedures.UpdateEndDateProjectByLeader,
            [
                projectId,
                new Date(endDate)
            ]);
        return record;
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
    static async searchCollaboratorForProjectTeamMember({
        projectId,
        collaboratorName
    }: SearchCollaboratorRequestBody): Promise<any[]> {
        const [resultset] = await DBConnection.query(
            StoredProcedures.SearchCollaboratorForProjectTeamMember,
            [
                projectId,
                collaboratorName
            ]);
        return resultset;
    }
    static async addProjectMembers({
        projectId, membersIds
    }: AddProjectMembersRequestBody): Promise<any> {
        const [[record]] = await DBConnection.query(
            StoredProcedures.AddProjectMembers,
            [
                projectId,
                membersIds.join(",")
            ]);
        return record;
    }
    static async deleteProjectMember({
        userId, projectTeamMemberId
    }: DeleteProjectMemberRequestBody): Promise<any> {
        const [[record]] = await DBConnection.query(
            StoredProcedures.DeleteProjectMember,
            [
                projectTeamMemberId,
                userId
            ]);
        return record;
    }
    static async getProjectPanelDetail({
        projectId, userId
    }: GetProjectPanelDetailRequestBody): Promise<any> {
        const [resultset] = await DBConnection.query(
            StoredProcedures.GetProjectPanelDetails,
            [
                projectId,
                userId
            ]);
        return resultset;
    }
}