import { collaboratorMemberMapper, collaboratorUserMapper } from "../../entities/collaborator/mappers";
import { CollaboratorUser } from "../../entities/collaborator/types";
import { projectDetailsMapper, projectListByCollaboratorMapper, projectListByGeneralAdminMapper } from "../../entities/project/mappers";
import { 
    GroupedProjectList, ProjectForm, 
    ProjectDetails } from "../../entities/project/types";
import ProjectModel from "../../models/projectModel/projectModel";
import { AddProjectMembersRequestBody, DeleteProjectMemberRequestBody, GetProjectListForCollaboratorRequestBody, SearchCollaboratorRequestBody, UpdateEndDateProjectRequestBody } from "../../routes/collaborator/projects/types";
import { CreateProjectRequestBody, DeleteProjectRequestBody } from "../../routes/generalAdmin/projects/types";
import { ResponseMessages } from "../../utils/response/enums";

export default abstract class ProjectController {
    static async getProjectListByGeneralAdmin(projectName: string | null): Promise<GroupedProjectList> {
        const resultset: any[] = await ProjectModel.getProjectListByGeneralAdmin(projectName);
        const projectList: GroupedProjectList = projectListByGeneralAdminMapper(resultset);
        return projectList;
    }
    static async searchCollaboratorByUsername(username: string): Promise<CollaboratorUser[]> {
        const resultset: any[] = await ProjectModel.searchCollaboratorByUsername(username);
        const collaborators: CollaboratorUser[] = resultset.map(collaboratorUserMapper);
        return collaborators;
    }
    static async createProject(createProjectRequestBody: CreateProjectRequestBody): Promise<string> {
        const record: any = await ProjectModel.createProject(createProjectRequestBody);
        if (!record)
            throw new Error("It couldn't be created the project");
        const message: string = record["message"];
        return message ? message : ResponseMessages.FatalError;
    }
    static async updateProject(projectForm: ProjectForm): Promise<string> {
        const affectedRows: number = await ProjectModel.updateProject(projectForm);
        return affectedRows > 0 ? ResponseMessages.Success : ResponseMessages.FatalError;
    }
    static async getProjectListForCollaborator(getProjectListForCollaboratorRequestBody: GetProjectListForCollaboratorRequestBody): Promise<GroupedProjectList> {
        const resultset: any[] = await ProjectModel.getProjectListForCollaborator(getProjectListForCollaboratorRequestBody);
        const projectList: GroupedProjectList = projectListByCollaboratorMapper(resultset);
        return projectList;
    }
    static async updateEndDateProjectByLeader(updateEndDateForm: UpdateEndDateProjectRequestBody): Promise<string> {
        const affectedRows: number = await ProjectModel.updateEndDateProjectByLeader(updateEndDateForm);
        return affectedRows > 0 ? ResponseMessages.Success : ResponseMessages.FatalError;
    }
    static async deleteProject(deleteProjectRequestBody: DeleteProjectRequestBody): Promise<string> {
        const record: any = await ProjectModel.deleteProject(deleteProjectRequestBody);
        if (!record)
            throw new Error("It couldn't be deleted of the project");
        const message: string = record["message"];
        return message ? message : ResponseMessages.FatalError;
    }
    static async getProjectDetails(projectId: number): Promise<ProjectDetails> {
        const resultset: any[] = await ProjectModel.getProjectDetails(projectId);
        if (resultset.length === 0)
            throw new Error("No details of the project");
        const projectDetails: ProjectDetails = projectDetailsMapper(resultset);
        return projectDetails;
    }
    static async searchCollaboratorsMembersByLeader(
        searchCollaboratorRequestBody: SearchCollaboratorRequestBody
    ): Promise<CollaboratorUser[]> {
        const resultset: any[] = await ProjectModel.searchCollaboratorsForProjectMember(searchCollaboratorRequestBody);
        const collaboratorUserList: CollaboratorUser[] = resultset.map(collaboratorMemberMapper);
        return collaboratorUserList;
    }
    static async addProjectMembers(addProjectMembersRequest: AddProjectMembersRequestBody): Promise<string> {
        const affectedRows: number = await ProjectModel.addProjectMembers(addProjectMembersRequest);
        return affectedRows > 0 ? ResponseMessages.Success : ResponseMessages.FatalError;
    }
    static async deleteProjectMember(deleteProjectRequestBody: DeleteProjectMemberRequestBody): Promise<string> {
        const affectedRows: number = await ProjectModel.deleteProjectMember(deleteProjectRequestBody);
        return affectedRows > 0 ? ResponseMessages.Success : ResponseMessages.FatalError;
    }
}