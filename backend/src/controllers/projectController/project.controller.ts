import { 
    projectListByCollaboratorMapper, 
    projectListByGeneralAdminMapper, 
    projetPanelDetailsMapper
} from "../../entities/project/mappers";
import { 
    GroupedProjectList, ProjectDetails, ProjectForm, 
    ProjectPanelDetails } from "../../entities/project/entities";
import ProjectModel from "../../models/projectModel/project.model";
import { 
    AddProjectMembersRequestBody, 
    DeleteProjectMemberRequestBody, 
    GetProjectListForCollaboratorRequestBody, 
    UpdateEndDateProjectRequestBody 
} from "../../routes/collaborator/projects/types";
import { CreateProjectRequestBody, DeleteProjectRequestBody } from "../../routes/generalAdmin/projects/types";
import { ResponseMessages } from "../../utils/response/enums";
import { GetProjectPanelDetailRequestBody } from "../../routes/collaborator/projectPanel/types";
import { projectDetailsMapper } from "../../entities/project/mappers";
import { SearchCollaboratorRequestBody } from "../../routes/collaborator/types";
import BasicCollaboratorUser from "../../entities/collaborator/BasicCollaboratorUser";

export default abstract class ProjectController {
    public static async getProjectListForGeneralAdmin(projectName: string | null): Promise<GroupedProjectList> {
        const resultset: any[] = await ProjectModel.getProjectListForGeneralAdmin(projectName);
        const projectList: GroupedProjectList = projectListByGeneralAdminMapper(resultset);
        return projectList;
    }
    public static async createProject(createProjectRequestBody: CreateProjectRequestBody): Promise<string> {
        const record: any = await ProjectModel.createProject(createProjectRequestBody);
        if (!record)
            throw new Error("It couldn't be created the project");
        const message: string = record["message"];
        return message || ResponseMessages.FatalError;
    }
    public static async updateProject(projectForm: ProjectForm): Promise<string> {
        const affectedRows: number = await ProjectModel.updateProject(projectForm);
        return affectedRows > 0 ? ResponseMessages.Success : ResponseMessages.FatalError;
    }
    public static async getProjectListForCollaborator(getProjectListForCollaboratorRequestBody: GetProjectListForCollaboratorRequestBody): Promise<GroupedProjectList> {
        const resultset: any[] = await ProjectModel.getProjectListForCollaborator(getProjectListForCollaboratorRequestBody);
        const projectList: GroupedProjectList = projectListByCollaboratorMapper(resultset);
        return projectList;
    }
    public static async updateEndDateProjectByLeader(updateEndDateForm: UpdateEndDateProjectRequestBody): Promise<string> {
        const record: any = await ProjectModel.updateEndDateProjectByLeader(updateEndDateForm);
        if (!record)
            throw new Error("It couldn't be update end date of the project");
        const message: string = record["message"];
        return message || ResponseMessages.FatalError;
    }
    public static async deleteProject(deleteProjectRequestBody: DeleteProjectRequestBody): Promise<string> {
        const record: any = await ProjectModel.deleteProject(deleteProjectRequestBody);
        if (!record)
            throw new Error("It couldn't be deleted of the project");
        const message: string = record["message"];
        return message ? message : ResponseMessages.FatalError;
    }
    public static async getProjectDetails(projectId: number): Promise<ProjectDetails> {
        const resultset: any[] = await ProjectModel.getProjectDetails(projectId);
        if (resultset.length === 0)
            throw new Error("No details of the project");
        const projectDetails: ProjectDetails = projectDetailsMapper(resultset);
        return projectDetails;
    }
    public static async searchCollaboratorForProjectTeamMember(
        searchCollaboratorRequestBody: SearchCollaboratorRequestBody
    ): Promise<BasicCollaboratorUser[]> {
        const resultset: any[] = await ProjectModel.searchCollaboratorForProjectTeamMember(searchCollaboratorRequestBody);
        const collaboratorUserList: BasicCollaboratorUser[] = resultset.map(record => new BasicCollaboratorUser(record));
        return collaboratorUserList;
    }
    public static async addProjectMembers(addProjectMembersRequest: AddProjectMembersRequestBody): Promise<string> {
        const record: any = await ProjectModel.addProjectMembers(addProjectMembersRequest);
        if (!record)
            throw new Error("It couldn't be added project members");
        const message: string = record["message"];
        return message || ResponseMessages.FatalError;
    }
    public static async deleteProjectMember(deleteProjectRequestBody: DeleteProjectMemberRequestBody): Promise<string> {
        const record: any = await ProjectModel.deleteProjectMember(deleteProjectRequestBody);
        if (!record)
            throw new Error("It couldn't be deleted project member");
        const message: string = record["message"];
        return message || ResponseMessages.FatalError;
    }
    public static async getProjectPanelDetail(getProjectPanelDetailRequestBody: GetProjectPanelDetailRequestBody): Promise<ProjectPanelDetails> {
        const resultset: any = await ProjectModel.getProjectPanelDetail(getProjectPanelDetailRequestBody);
        const projectTableDetail: ProjectPanelDetails = projetPanelDetailsMapper(resultset);
        return projectTableDetail;
    }
}