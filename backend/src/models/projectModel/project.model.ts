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
    SearchCollaboratorRequestBody, 
    UpdateEndDateProjectRequestBody } from "../../routes/collaborator/projects/types";
import { 
    CreateProjectRequestBody, 
    DeleteProjectRequestBody 
} from "../../routes/generalAdmin/projects/types";

export default abstract class ProjectModel {
    public static async getProjectListForGeneralAdmin(projectName: string | null): Promise<any[]> {
        // return PROJECT_LIST_FOR_GENERAL_ADMIN_RESULSTSET;
        const [resultset] = await DBConnection.query(
            StoredProcedures.GetProjectListForGeneralAdmin,
            [projectName]);
        return resultset;
    }
    public static async searchCollaboratorByUsername(username: string): Promise<any[]> {
        const [resultset] = await DBConnection.query(
            StoredProcedures.SearchCollaborator,
            [username]);
        return resultset;
    }
    public static async createProject({
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
    public static async updateProject({
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
    public static async getProjectListForCollaborator({
        projectName,
        collaboratorId
    }: GetProjectListForCollaboratorRequestBody): Promise<any[]> {
        const [resultset] = await DBConnection.query(
            StoredProcedures.GetProjectListForCollaborator,
            [projectName, collaboratorId]);
        return resultset;
    }
    public static async updateEndDateProjectByLeader({
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
    public static async deleteProject({
        userId, projectId
    }: DeleteProjectRequestBody): Promise<any> {
        const [[record]] = await DBConnection.query(
            StoredProcedures.DeleteProject,
            [projectId, userId]
        );
        return record;
    }
    public static async getProjectDetails(projectId: number): Promise<any[]> {
        const [resultset] = await DBConnection.query(
            StoredProcedures.GetProjectDetails,
            [projectId]
        );
        return resultset;
    }
    public static async searchCollaboratorsForProjectMember({
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
    public static async addProjectMembers({
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
    public static async deleteProjectMember({
        userId, projectHasCollaboratorId
    }: DeleteProjectMemberRequestBody): Promise<any> {
        const [[record]] = await DBConnection.query(
            StoredProcedures.DeleteProjectMember,
            [
                projectHasCollaboratorId,
                userId
            ]);
        return record;
    }
    public static async getProjectPanelDetail({
        projectId, userId
    }: GetProjectPanelDetailRequestBody): Promise<any> {
        const [resultset] = await DBConnection.query(
            StoredProcedures.GetProjectTableDetail,
            [
                projectId,
                userId
            ]);
        return resultset;
    }
}