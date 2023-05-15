import { DBMessages } from "../../db/dbMessages";
import { collaboratorMapper } from "../../entities/collaborator/mappers";
import { CollaboratorUser } from "../../entities/collaborator/types";
import { projectDetailsMapper, projectListByCollaboratorMapper, projectListByGeneralAdminMapper } from "../../entities/project/mappers";
import { AddProjectMembersRequestBody, GroupedProjectListForGeneralAdmin, GroupedProjectListForCollaborator, ProjectForm, UpdateEndDateProjectRequestBody, ProjectDetails, SearchCollaboratorRequestBody } from "../../entities/project/types";
import ProjectModel from "../../models/projectModel/projectModel";
import { CreateProjectRequestBody } from "../../routes/generalAdmin/projects/types";
import { ResponseCodes } from "../../utils/responseCodes";
import { ResponseBody } from "../../utils/types";

export default abstract class ProjectController {
    static async getProjectListByGeneralAdmin(projectName: string): Promise<ResponseBody & { data: GroupedProjectListForGeneralAdmin }> {
        const resultset: any[] = await ProjectModel.getProjectListByGeneralAdmin(projectName);
        const projectList: GroupedProjectListForGeneralAdmin = projectListByGeneralAdminMapper(resultset);
        return {
            code: ResponseCodes.OK,
            message: DBMessages.Success,
            data: projectList
        };
    }
    static async searchCollaboratorByUsername(username: string): Promise<ResponseBody & { data: CollaboratorUser[] }> {
        const resultset: any[] = await ProjectModel.searchCollaboratorByUsername(username);
        const collaborators: CollaboratorUser[] = resultset.map(collaboratorMapper);
        return {
            code: ResponseCodes.OK,
            message: DBMessages.Success,
            data: collaborators
        };
    }
    static async createProject(createProjectRequestBody: CreateProjectRequestBody): Promise<ResponseBody> {
        const affectedRows: number = await ProjectModel.createProject(createProjectRequestBody);
        if (affectedRows === 0)
            throw new Error("It couldn't be create the project");
        return {
            code: ResponseCodes.OK,
            message: DBMessages.Success
        };
    }
    static async updateProject(projectForm: ProjectForm): Promise<ResponseBody> {
        const affectedRows: number = await ProjectModel.updateProject(projectForm);
        if (affectedRows === 0)
            throw new Error("It couldn't be update the project");
        return {
            code: ResponseCodes.OK,
            message: DBMessages.Success
        };
    }
    static async getProjectListForCollaborator(projectName: string): Promise<ResponseBody & { data: GroupedProjectListForCollaborator }> {
        const resultset: any[] = await ProjectModel.getProjectListForCollaborator(projectName);
        const projectList: GroupedProjectListForCollaborator = projectListByCollaboratorMapper(resultset);
        return {
            code: ResponseCodes.OK,
            message: DBMessages.Success,
            data: projectList
        };
    }
    static async updateEndDateProjectByLeader(updateEndDateForm: UpdateEndDateProjectRequestBody): Promise<ResponseBody> {
        const affectedRows: number = await ProjectModel.updateEndDateProjectByLeader(updateEndDateForm);
        if (affectedRows === 0)
            throw new Error("It couldn't be update end date of the project");
        return {
            code: ResponseCodes.OK,
            message: DBMessages.Success
        };
    }
    static async deleteProject(projectId: number): Promise<ResponseBody> {
        const affectedRows: number = await ProjectModel.deleteProject(projectId);
        if (affectedRows === 0)
            throw new Error("It couldn't be deleted of the project");
        return {
            code: ResponseCodes.OK,
            message: DBMessages.Success
        };
    }
    static async getProjectDetails(projectId: number): Promise<ResponseBody & { data: ProjectDetails }> {
        const resultset: any[] = await ProjectModel.getProjectDetails(projectId);
        if (resultset.length === 0)
            throw new Error("No details of the project");
        const projectDetails: ProjectDetails = projectDetailsMapper(resultset);
        return {
            code: ResponseCodes.OK,
            message: DBMessages.Success,
            data: projectDetails
        };
    }
    static async searchCollaboratorsMembersByLeader(
        {
            projectId,
            collaboratorName
        }: SearchCollaboratorRequestBody
    ): Promise<ResponseBody & { data: CollaboratorUser[] }> {
        const resultset: any[] = await ProjectModel.searchCollaboratorsForProjectMember(
            {
                projectId,
                collaboratorName
            });
        const collaborators: CollaboratorUser[] = resultset.map(collaboratorMapper);
        return {
            code: ResponseCodes.OK,
            message: DBMessages.Success,
            data: collaborators
        };
    }
    static async addProjectMembers(addProjectMembersRequest: AddProjectMembersRequestBody): Promise<ResponseBody> {
        const affectedRows: number = await ProjectModel.addProjectMembers(addProjectMembersRequest);
        if (affectedRows === 0)
            throw new Error("It couldn't be add collaborators in the project");
        return {
            code: ResponseCodes.OK,
            message: DBMessages.Success
        };
    }
}