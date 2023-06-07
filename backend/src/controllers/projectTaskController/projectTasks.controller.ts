import { projecTaskPriorityMapper } from "../../entities/collaborator/mappers";
import { ProjectTaskBoard, ProjectTaskPriority } from "../../entities/projectTasks/entities";
import { projectTaskBoardMapper } from "../../entities/projectTasks/mappers";
import ProjectTasksModel from "../../models/projectTasksModel/projectTasks.model";
import { ResponseMessages } from "../../utils/response/enums";
import { WSNewProjectTask, WSNewProjectTaskForm, WSProjectTaskForm, WSTaskToBeUpdated, WSProjectTaskToBeUpdatedForm } from "../../websockets/services/projectTasks/utils/entities";

export default abstract class ProjectTasksController {
    static async getTaskPriorityList(): Promise<ProjectTaskPriority[]> {
        const resultset: any[] = await ProjectTasksModel.getTaskPriorities();
        const taskPriorityList: ProjectTaskPriority[] = resultset.map(projecTaskPriorityMapper);
        return taskPriorityList;
    }
    static async getTaskBoardByProjectId(projectId: number): Promise<ProjectTaskBoard> {
        const resultset: any[] = await ProjectTasksModel.getTaskBoardByProjectId(projectId);
        return projectTaskBoardMapper(resultset);
    }
    static async createTask(newTaskForm: WSNewProjectTaskForm): Promise<void> {
        const record: any = await ProjectTasksModel.createTask(newTaskForm);
        const message: string = record["message"];
        if (message === ResponseMessages.Success) return;
        throw new Error(message);
    }
    static async updateTask(taskToBeUpdatedForm: WSProjectTaskToBeUpdatedForm): Promise<void> {
        const record: any = await ProjectTasksModel.updateTask(taskToBeUpdatedForm);
        const message: string = record["message"];
        if (message === ResponseMessages.Success) return;
        throw new Error(message);
    }
}