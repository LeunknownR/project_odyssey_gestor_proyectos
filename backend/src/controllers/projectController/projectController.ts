import { DBMessages } from "../../db/dbMessages";
import { collaboratorMapper } from "../../entities/collaborator/mappers";
import { Collaborator } from "../../entities/collaborator/types";
import { projectListByCollaboratorMapper, projectListMapper } from "../../entities/project/mappers";
import { GroupedProjectList, GroupedProjectListByCollaborator, UpdateEndDateForm } from "../../entities/project/types";
import ProjectModel from "../../models/projectModel/projectModel";
import { CreateProjectRequestBody, UpdateProjectRequestBody } from "../../routes/generalAdmin/projects/types";
import { ResponseCodes } from "../../utils/responseCodes";
import { ResponseBody } from "../../utils/types";

export default abstract class ProjectController {
    static async getProjectList(projectName: string): Promise<ResponseBody & { data: GroupedProjectList }> {
        const resultset: any[] = await ProjectModel.getProjectList(projectName);
        const projectList = projectListMapper(resultset);
        return {
            code: ResponseCodes.OK,
            message: DBMessages.Success,
            data: projectList
        };
    }
    static async searchCollaboratosByUsername(username: string): Promise<ResponseBody & { data: Collaborator }> {
        const resultset: Collaborator[] = await ProjectModel.searchCollaboratorByUsername(username);
        const collaborators = collaboratorMapper(resultset);
        return {
            code: ResponseCodes.OK,
            message: DBMessages.Success,
            data: collaborators
        };
    }
    static async createProject(createProjectRequestBody: CreateProjectRequestBody): Promise<ResponseBody> {
        const affectedRows = await ProjectModel.createProject(createProjectRequestBody);
        if (affectedRows === 0)
            throw new Error("It couldn't be create the project");
        return {
            code: ResponseCodes.OK,
            message: DBMessages.Success
        };
    }
    static async updateProject(updateProjectRequestBody: UpdateProjectRequestBody): Promise<ResponseBody> {
        const affectedRows = await ProjectModel.UpdateProject(updateProjectRequestBody);
        if (affectedRows === 0)
            throw new Error("It couldn't be update the project");
        return {
            code: ResponseCodes.OK,
            message: DBMessages.Success
        };
    }

    static async getProjectListByCollaborator(collaboratorName: string): Promise<ResponseBody & { data: GroupedProjectListByCollaborator }> {
        const resultset: any[] = await ProjectModel.getProjectListByCollaborator(collaboratorName);
        const projectList = projectListByCollaboratorMapper(resultset);
        return {
            code: ResponseCodes.OK,
            message: DBMessages.Success,
            data: projectList
        };
    }

    static async updateEndDateProjectByLeader(updateEndDateForm: UpdateEndDateForm): Promise<ResponseBody> {
        const affectedRows = await ProjectModel.updateEndDateProjectByLeader(updateEndDateForm);
        if (affectedRows === 0)
            throw new Error("It couldn't be update end date the project");
        return {
            code: ResponseCodes.OK,
            message: DBMessages.Success
        };
    }
}