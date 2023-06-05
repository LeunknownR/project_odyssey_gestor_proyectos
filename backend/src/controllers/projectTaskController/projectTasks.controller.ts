import { ProjectTaskBoard } from "../../entities/projectTasks/entities";
import { projectTaskBoardMapper } from "../../entities/projectTasks/mappers";
import ProjectTasksModel from "../../models/projectTasksModel/projectTasks.model";

export default abstract class ProjectTasksController {
    static async getTaskBoardByProjectId(projectId: number): Promise<ProjectTaskBoard> {
        const resultset: any[] = await ProjectTasksModel.getTaskBoardByProjectId(projectId);
        return projectTaskBoardMapper(resultset);
    }
}