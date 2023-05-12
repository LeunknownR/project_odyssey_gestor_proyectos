import { DBMessages } from "../../db/dbMessages";
import { projectListMapper } from "../../entities/project/mappers";
import { GroupedProjectList } from "../../entities/project/types";
import ProjectModel from "../../models/projectModel/projectModel";
import { CreateProjectRequestBody } from "../../routes/generalAdmin/projects/types";
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
    static async createProject(createProjectRequestBody: CreateProjectRequestBody): Promise<ResponseBody> {
        const affectedRows = await ProjectModel.createProject(createProjectRequestBody);
        if (affectedRows === 0)
            throw new Error("It couldn't be create the project");
        return {
            code: ResponseCodes.OK,
            message: DBMessages.Success
        };
    }
}