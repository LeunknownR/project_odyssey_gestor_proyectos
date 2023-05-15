import { DBMessages } from "../../db/dbMessages";
import { projectListMapper } from "../../entities/project/mappers";
import { GroupedProjectList } from "../../entities/project/types";
import ProjectModel from "../../models/projectModel/projectModel";
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
}