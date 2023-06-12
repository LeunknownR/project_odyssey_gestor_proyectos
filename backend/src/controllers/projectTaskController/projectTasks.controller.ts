import { projecTaskPriorityMapper } from "../../entities/collaborator/mappers";
import { ProjectTaskBoard, ProjectTaskPriority } from "../../entities/projectTasks/entities";
import { projectTaskBoardMapper } from "../../entities/projectTasks/mappers";
import ProjectTasksModel from "../../models/projectTasksModel/projectTasks.model";
import { ResponseMessages } from "../../utils/response/enums";
import { 
    WSProjectTaskToBeChangedStateForm,
    WSProjectTaskToBeDeletedForm,
    WSNewProjectTaskForm, 
    WSProjectTaskCommentForm, 
    WSProjectTaskMainInformationForm, 
    WSProjectSubtaskToBeDeletedForm,
    WSSubtaskToBeUpdatedForm,
    WSSubtaskToBeSwitchedCheckStatusForm,
    WSNewProjectSubtaskForm,
    WSProjectTaskForm
} from "../../websockets/services/projectTasks/utils/entities";

export default abstract class ProjectTasksController {
    public static async getTaskPriorityList(): Promise<ProjectTaskPriority[]> {
        const resultset: any[] = await ProjectTasksModel.getTaskPriorities();
        const taskPriorityList: ProjectTaskPriority[] = resultset.map(projecTaskPriorityMapper);
        return taskPriorityList;
    }
    public static async getTaskBoardByProjectId(projectTaskForm: WSProjectTaskForm): Promise<ProjectTaskBoard> {
        const resultset: any[] = await ProjectTasksModel.getTaskBoardByProjectId(projectTaskForm);
        return projectTaskBoardMapper(resultset);
    }
    public static async createTask(newTaskForm: WSNewProjectTaskForm): Promise<void> {
        const record: any = await ProjectTasksModel.createTask(newTaskForm);
        const message: string = record["message"];
        if (message === ResponseMessages.Success) return;
        throw new Error(message);
    }
    public static async updateTaskMainInformation(taskMainInformationForm: WSProjectTaskMainInformationForm): Promise<void> {
        const record: any = await ProjectTasksModel.updateTaskMainInformation(taskMainInformationForm);
        const message: string = record["message"];
        if (message === ResponseMessages.Success) return;
        throw new Error(message);
    }
    public static async updateSubtask(subtaskToBeUpdated: WSSubtaskToBeUpdatedForm): Promise<void> {
        const record: any = await ProjectTasksModel.updatesubtask(subtaskToBeUpdated);
        const message: string = record["message"];
        if (message === ResponseMessages.Success) return;
        throw new Error(message);
    }
    public static async createSubtask(newProjectSubtaskForm: WSNewProjectSubtaskForm): Promise<void> {
        const record: any = await ProjectTasksModel.createSubtask(newProjectSubtaskForm);
        const message: string = record["message"];
        if (message === ResponseMessages.Success) return;
        throw new Error(message);
    }
    public static async switchCheckStatusSubtask(subtaskToBeSwitchedCheckStatusForm: WSSubtaskToBeSwitchedCheckStatusForm): Promise<void> {
        const record: any = await ProjectTasksModel.switchCheckStatusSubtask(subtaskToBeSwitchedCheckStatusForm);
        const message: string = record["message"];
        if (message === ResponseMessages.Success) return;
        throw new Error(message);
    }
    static async deleteSubtask(projectSubtaskToBeDeletedForm: WSProjectSubtaskToBeDeletedForm): Promise<void> {
        const record: any = await ProjectTasksModel.deleteSubtask(projectSubtaskToBeDeletedForm);
        const message: string = record["message"];
        if (message === ResponseMessages.Success) return;
        throw new Error(message);
    }    
    static async changeTaskState(projectTaskToBeChangedStateForm: WSProjectTaskToBeChangedStateForm): Promise<void> {
        const record: any = await ProjectTasksModel.changeTaskState(projectTaskToBeChangedStateForm);
        const message: string = record["message"];
        if (message === ResponseMessages.Success) return;
        throw new Error(message);
    }

    static async deleteTask(projectTaskToBeDeletedForm: WSProjectTaskToBeDeletedForm): Promise<void> {
        const record: any = await ProjectTasksModel.deleteTask(projectTaskToBeDeletedForm);
        const message: string = record["message"];
        if (message === ResponseMessages.Success) return;
        throw new Error(message);
    }

    public static async commentInTask(projectTaskCommentForm: WSProjectTaskCommentForm): Promise<void> {
        const record: any = await ProjectTasksModel.commentInTask(projectTaskCommentForm);
        const message: string = record["message"];
        if (message === ResponseMessages.Success) return;
        throw new Error(message);
    }
}