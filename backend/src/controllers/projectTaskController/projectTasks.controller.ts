import BasicCollaboratorUser from "../../entities/collaborator/BasicCollaboratorUser";
import { ProjectTaskPriority } from "../../entities/projectTask/ProjectTaskPriority";
import { ProjectTaskBoard } from "../../entities/projectTask/entities";
import { projectTaskBoardMapper } from "../../entities/projectTask/mappers";
import ProjectTasksModel from "../../models/projectTasksModel/projectTasks.model";
import { SearchCollaboratorRequestBody } from "../../routes/collaborator/types";
import { ResponseMessages } from "../../utils/response/enums";
import { 
    WSProjectTaskWithNewStateForm,
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

export default abstract class ProjectTaskController {
    static async getTaskPriorityList(): Promise<ProjectTaskPriority[]> {
        const resultset: any[] = await ProjectTasksModel.getTaskPriorities();
        const taskPriorityList: ProjectTaskPriority[] = resultset.map(record => new ProjectTaskPriority(record));
        return taskPriorityList;
    }
    static async searchProjectTeamMember(
        searchProjectTeamMemberRequestBody: SearchCollaboratorRequestBody
    ): Promise<BasicCollaboratorUser[]> {
        const resultset: any[] = await ProjectTasksModel.searchProjectTeamMember(searchProjectTeamMemberRequestBody);
        const collaboratorUserList: BasicCollaboratorUser[] = resultset.map(record => new BasicCollaboratorUser(record));
        return collaboratorUserList;
    }
    static async getTaskBoardByProjectId(projectTaskForm: WSProjectTaskForm): Promise<ProjectTaskBoard> {
        const resultset: any[] = await ProjectTasksModel.getTaskBoardByProjectId(projectTaskForm);
        return projectTaskBoardMapper(resultset);
    }
    static async createTask(newTaskForm: WSNewProjectTaskForm): Promise<void> {
        const record: any = await ProjectTasksModel.createTask(newTaskForm);
        const message: string = record["message"];
        if (message === ResponseMessages.Success) return;
        throw new Error(message);
    }
    static async updateTaskMainInformation(taskMainInformationForm: WSProjectTaskMainInformationForm): Promise<void> {
        const record: any = await ProjectTasksModel.updateTaskMainInformation(taskMainInformationForm);
        const message: string = record["message"];
        if (message === ResponseMessages.Success) return;
        throw new Error(message);
    }
    static async createSubtask(newProjectSubtaskForm: WSNewProjectSubtaskForm): Promise<void> {
        const record: any = await ProjectTasksModel.createSubtask(newProjectSubtaskForm);
        const message: string = record["message"];
        if (message === ResponseMessages.Success) return;
        throw new Error(message);
    }
    static async updateSubtask(subtaskToBeUpdated: WSSubtaskToBeUpdatedForm): Promise<void> {
        const record: any = await ProjectTasksModel.updateSubtask(subtaskToBeUpdated);
        const message: string = record["message"];
        if (message === ResponseMessages.Success) return;
        throw new Error(message);
    }
    static async switchCheckStatusSubtask(subtaskToBeSwitchedCheckStatusForm: WSSubtaskToBeSwitchedCheckStatusForm): Promise<void> {
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
    static async changeTaskState(projectTaskWithNewState: WSProjectTaskWithNewStateForm): Promise<void> {
        const record: any = await ProjectTasksModel.changeTaskState(projectTaskWithNewState);
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
    static async commentInTask(projectTaskCommentForm: WSProjectTaskCommentForm): Promise<void> {
        const record: any = await ProjectTasksModel.commentInTask(projectTaskCommentForm);
        const message: string = record["message"];
        if (message === ResponseMessages.Success) return;
        throw new Error(message);
    }
}